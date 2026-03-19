import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUpComponent = () => {

    let [username, updateUsername] = useState("")
    let [email, updateEmail] = useState("")
    let [phone, updatePhone] = useState("")
    let [password, updatePassword] = useState("")

    let [loading, setLoading] = useState("")
    let [error, setError] = useState("")
    let [success, setsuccess] = useState("")



    const handlesubmit = async (e) => {
        // prevent default behaviour
        e.preventDefault();

        // notify user to wait
        setError("")
        setsuccess("")
        setLoading("submitting data! please wait......")


        // confirm user input
        console.log(username, phone, email, password);

        // try send data to server
        try {
            // create form data
            const user_data = new FormData();
            user_data.append("username", username);
            user_data.append("email", email);
            user_data.append("phone", phone);
            user_data.append("password", password);

            // use axios to send data to server
            const response = await axios.post("https://derrick.alwaysdata.net/api/signup", user_data);
            console.log(response);
            if (response.status === 200) {
                setsuccess(response.data.message)
                setLoading("")
                updateEmail("")
                updatePassword("")
                updatePhone("")
                updateUsername("")
            }
        } catch (error) {
            console.log(error);
            setError(error.message);
            setLoading("")

        }
    };


    return (
        <div className="row justify-content-center mt-4">
            <div className="col-md-6 card shadow p-4">
                <h2>Sign Up</h2>
                <h5 className="text-warning">{loading}</h5>
                <h5 className="text-danger">{error}</h5>
                <h5 className="text-success">{success}</h5>

                <form onSubmit={handlesubmit}>
                    <input type="text"
                        className="form-control"
                        placeholder="enter username"
                        required
                        onChange={(e) => { updateUsername(e.target.value) }}
                        value={username}
                    /> <br />
                    <br />
                    <input type="password"
                        className="form-control"
                        placeholder="enter password"
                        required
                        onChange={(e) => { updatePassword(e.target.value) }}
                        value={password}
                    /><br />
                    <br />
                    <input type="email"
                        className="form-control"
                        placeholder="enter email"
                        required
                        onChange={(e) => { updateEmail(e.target.value) }}
                        value={email}
                    /><br />
                    <br />
                    <input type="tel"
                        className="form-control"
                        placeholder="enter phone number"
                        required
                        onChange={(e) => { updatePhone(e.target.value) }}
                        value={phone}
                    /><br />
                    <br />
                    <button className="btn btn-dark">sign Up</button><br />
                    <Link to="/signin">already have an account? sign In</Link>

                </form>
            </div>
        </div>
    );
}

export default SignUpComponent;
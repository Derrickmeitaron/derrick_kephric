import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignInComponent = () => {
    let [email, updateEmail] = useState("");
    let [password, updatePassword] = useState("");

    let [loading, setLoading] = useState("");
    let [success, setSuccess] = useState("")
    let [error, setError] = useState("")

    // create variable for use navigate
    let navigate = useNavigate();

    const handlesubmit = async (e) => {
        e.preventDefault();


        // notify user
        setError("");
        setLoading("please wait......")
        setSuccess("")
        // try send data to server
        try {
            // create form data
            const user_data = new FormData();
            user_data.append("email", email);
            user_data.append("password", password);

            const response = await axios.post("https://kmuturi.alwaysdata.net/api/signin", user_data)

            console.log(response.data);
            if (response.status === 200) {
                if (response.data.user) {
                    localStorage.setItem("user", JSON.stringify(response.data.user))
                    setSuccess(response.data.message)
                    navigate("/")
                }


            }



        } catch (error) {
            console.log(error)
            setError(error.message)
            setLoading("please wait.....")
            setSuccess("")

        }

    }
    return (
        <div className="row justify-content-center mt-4">
            <div className="col-md-6 card shadow p-4">
                <h2>sign in</h2>
                <h5 className="text-warning">{loading}</h5>
                <h5 className="text-danger">{error}</h5>
                <h5 className="text-success">{success}</h5>
                <form onSubmit={handlesubmit}>
                    <input type="email"
                        placeholder="enter email"
                        className="form-control"
                        required
                        onChange={(e) => { updateEmail(e.target.value) }}
                        value={email}
                    />
                    <br />
                    <br />
                    <input type="password"
                        placeholder="enter password"
                        className="form-control"
                        required
                        onChange={(e) => { updatePassword(e.target.value) }}
                        value={password}
                    />
                    <br />
                    <br />
                    <button className="btn btn-dark glow-on-hover">sign in</button>
                    <br />
                    <Link to="/signup">don't have an account? sign up</Link>
                </form>
            </div>
        </div>
    );
}

export default SignInComponent;
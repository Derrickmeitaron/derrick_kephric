import axios from "axios";
import { useState } from "react";

const AddProductComponent = () => {

    let [product_name, setProductname] = useState("");
    let [product_description, setProductdescription] = useState("");
    let [product_cost, setProductcost] = useState("");
    let [product_category, setProductcategory] = useState("");
    let [product_image, setProductimage] = useState("");

    let [loading, setLoading] = useState("")
    let [error, setError] = useState("")
    let [success, setSuccess] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("")
        setSuccess("")
        setLoading("please wait.......")

        try {
            const product_data = new FormData()
            product_data.append("product_name", product_name);
            product_data.append("product_description", product_description);
            product_data.append("product_cost", product_cost);
            product_data.append("product_category", product_category);
            product_data.append("product_image", product_image);

            // user axios(messenger)
            const response = await axios.post("https://derrick.alwaysdata.net/api/add_product", product_data);

            console.log(response);

            if (response.status === 200) {
                setLoading("")
                setSuccess(response.data.message);

                // clear the form
                setProductname("")
                setProductdescription("")
                setProductcost("")
                setProductcategory("")
            }

        } catch (error) {
            setError(error.message);
            setLoading("");

        }


    }
    return (
        <div className="row justify-content-center mt-4">
            <div className="col-md-6 card-shadow p-4">
                <h2>add product</h2>
                <h5 className="text-danger">{error}</h5>
                <h5 className="text-warning">{loading}</h5>
                <h5 className="text-success">{success}</h5>
                <form onSubmit={handleSubmit}>
                    <input type="text"
                        className="form-control"
                        placeholder="product_name"
                        required
                        onChange={(e) => { setProductname(e.target.value) }}
                        value={product_name} />

                    <br />
                    <textarea type="text"
                        className="form-control"
                        rows="7"
                        placeholder="product_description"
                        required
                        onChange={(e) => { setProductdescription(e.target.value) }}
                        value={product_description} />
                    <br />
                    <input type="number"
                        className="form-control"
                        placeholder="product_cost"
                        required
                        onChange={(e) => { setProductcost(e.target.value) }}
                        value={product_cost} />
                    <br />
                    <label htmlFor="" className="form-label">
                        product_category
                    </label>
                    <select className="form-select"
                        required
                        onChange={(e) => { setProductcategory(e.target.value) }}>
                        <option value="taps">taps</option>
                        <option value="tanks">tanks</option>
                        <option value="joints">joints</option>
                        <option value="pipes">pipes</option>
                    </select>

                    <br />
                    <label htmlFor="" className="form-label">
                        product_image
                    </label>
                    <input type="file"
                        className="form-control"
                        placeholder="product_image"
                        required
                        accept="image/*"
                        onChange={(e) => { setProductimage(e.target.files[0]) }} />
                    <br />
                    <button className="btn btn-dark glow-on-hover">add product</button>
                </form>
            </div>
        </div>
    );
}

export default AddProductComponent;
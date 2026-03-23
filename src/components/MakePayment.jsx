import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const MakePayment = () => {
    const { product } = useLocation().state || {}
    console.log(product);


    const img_url = "https://derrick.alwaysdata.net/static/images/"

    let [phone, setPhone] = useState("")
    let [loading, setLoading] = useState("")
    let [error, setError] = useState("")
    let [success, setSuccess] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        setError("")
        setSuccess("")
        setLoading("please wait...")

        try {
            const data = new FormData();
            data.append("amount", product.product_cost)
            data.append("phone", phone)

            const response = await axios.post("https://derrick.alwaysdata.net/api/mpesa_payment", data)
            console.log(response)

            if (response.status === 200) {
                setLoading("")
                setSuccess(response.data.message)
                setPhone("")
            }

        } catch (error) {
            setLoading("")
            setError(error.message)

        }
    }
    return (
        <div className="row justify-content-center mt-4" id="dmx">
            <Navbar />
            <h2>lipa na mpesa</h2>
            <div className="col-md-3">
                <img src={img_url + product.product_image} alt="" className="rounded img-thumbnail" />
            </div>

            <div className="col-md-3 p-4">
                <h2 className="text-dark">{product.product_name}</h2>
                <h4 className="text-primary">{product.product_category}</h4>
                <p className="text-muted">{product.product_description}</p>
                <h4 className="text-warning">{product.product_cost} </h4>

                <hr />
                <h6 className="text-warning">{loading}</h6>
                <h6 className="text-danger">{error}</h6>
                <h6 className="text-success">{success}</h6>
                <form onSubmit={handleSubmit}>
                    <input
                        type="number"
                        required
                        className="form-control"
                        placeholder="enter amount"
                        readOnly
                        value={product.product_cost} />
                    <br />

                    <input type="tel"
                        required
                        placeholder="enter mpesa number +254"
                        className="form-control"
                        onChange={(e) => { setPhone(e.target.value) }}
                        value={phone} />
                    <br />
                    <button className="btn btn-dark">pay now</button>

                </form>
            </div>

        </div>
    );
}

export default MakePayment;
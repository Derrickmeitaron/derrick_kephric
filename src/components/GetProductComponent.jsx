import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const GetProducts = () => {

    let [products, setproducts] = useState([]);
    let [loading, setLoading] = useState("")
    let [error, setError] = useState("")

    // base url for image location
    const img_url = "https://derrick.alwaysdata.net/static/images/";
    let navigator = useNavigate()


    // function to fetch products from the server
    const GetProducts = async () => {
        setError("")
        setLoading("fetching products please wait...")

        try {
            const response = await axios.get("https://derrick.alwaysdata.net/api/get_products");
            console.log(response)
            if (response.status === 200) {
                setLoading("")
                setproducts(response.data)
            }

        } catch (error) {
            setLoading("")
            setError(error.message)

        }
    };

    useEffect(() => { GetProducts() }, [])
    return (
        <div className="row">
            <h3>available products</h3>
            <h5 className="text-warning">{loading}</h5>
            <h5 className="text-danger">{error}</h5>
            {/* map/loop over the product array to access one at a time */}


            {products.map((product) => (
                <div className="col-md-3 justify-content-center mb-4">

                    <div className="card shadow card-margin">
                        <img src={img_url + product.product_image} alt="" className="product_img mt-4" />

                        <div className="card-body justify-content-center">
                            <h5 className="mt-2">{product.product_name}</h5>
                            <p className="text-muted">{product.product_description}</p>
                            <b className="text-warning">{product.product_cost}</b>
                            <br />
                            <button className="pay-btn" onClick={() => { navigator("/makepayment", { state: { product } }) }}><span>🛒 Pay Now</span></button>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    );
}

export default GetProducts;
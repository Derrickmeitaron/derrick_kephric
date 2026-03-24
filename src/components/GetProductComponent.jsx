import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const GetProducts = () => {

    let [products, setproducts] = useState([]);
    let [loading, setLoading] = useState("")
    let [error, setError] = useState("")

    let [pipes, setPipes] = useState([]);
    let [tanks, setTanks] = useState([]);
    let [joints, setJoints] = useState([]);
    let [taps, setTaps] = useState([]);


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


                let pipes_products = response.data.filter((product) =>
                    product.product_category === "pipes"
                )
                setPipes(pipes_products);

                let taps_products = response.data.filter((product) =>
                    product.product_category === "taps"
                )
                setTaps(taps_products);

                let tanks_products = response.data.filter((product) =>
                    product.product_category === "tanks"
                )
                setTanks(tanks_products);

                let joints_products = response.data.filter((product) =>
                    product.product_category === "joints"
                )
                setJoints(joints_products);
            }

        } catch (error) {
            setLoading("")
            setError(error.message)

        }
    };

    useEffect(() => { GetProducts() }, [])
    return (
        <div className="row glass" id="dmx">
            <Navbar />
            <h3>available products</h3>
            <h5 className="text-warning">{loading}</h5>
            <h5 className="text-danger">{error}</h5>
            {/* map/loop over the product array to access one at a time */}


            <h2 className="text-center my-2 p-4 bg-dark text-white">pipes</h2>
            {pipes.map((product) => (
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
            <h2 className="text-center my-2 p-4 bg-dark text-white">tanks</h2>
            {tanks.map((product) => (
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
            <h2 className="text-center my-2 p-4 bg-dark text-white">joints</h2>
            {joints.map((product) => (
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
            <h2 className="text-center my-2 p-4 bg-dark text-white">taps</h2>
            {taps.map((product) => (
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
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductComponent from './components/GetProductComponent';
import SignInComponent from './components/SignInComponent';
import SignUpComponent from './components/SignUpComponent';
import AddProductComponent from './components/AddProductComponent';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import MakePayment from "./components/MakePayment";

function App() {
  return (
    <BrowserRouter>
      <div className="App">


        <header className="App-header">


          <div className="carousel slide" data-bs-ride="carousel" id="mycarousel">

            <div className="carousel-inner">

              <div className="carousel-item active">
                <img
                  src="/black-2951012_1280.png"
                  alt="slide1"
                  className="d-block w-100"
                  height="550"
                />
              </div>

              <div className="carousel-item">
                <img
                  src="/fifty-percent-1426592_1280.png"
                  alt="slide2"
                  className="d-block w-100"
                  height="550"
                />
              </div>

              <div className="carousel-item">
                <img
                  src="/buy-1-get-1-free-7139286_1280.png"
                  alt="slide3"
                  className="d-block w-100"
                  height="550"
                />
              </div>

            </div>

            <button
              className="carousel-control-next"
              data-bs-target="#mycarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>

            <button
              className="carousel-control-prev"
              data-bs-target="#mycarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>

          </div>
        </header>


      </div>

      <Routes>
        <Route path='/' element={<ProductComponent />} />
        <Route path='/signup' element={<SignUpComponent />} />
        <Route path='/signin' element={<SignInComponent />} />
        <Route path='/addproduct' element={<AddProductComponent />} />
        <Route path='/makepayment' element={<MakePayment />} />
      </Routes>

      <footer className="text-light bg-dark text-center p-4">
        <div className="container">
          <div className="row">

            {/* Help Center */}
            <div className="col-lg-4 text-light">
              <h4>Help Center</h4>
              <p>
                As Kephrics Plumbing Services, we thank you for choosing us.
                We are certified by the Kenyan government to provide services 24/7.
              </p>
              <p>
                To get repair services, simply fill in the required form and services will be rendered immediately.
              </p>
              <p>
                Payment can be done online or after the service.
              </p>
            </div>

            {/* Contact Us */}
            <div className="col-lg-4 text-light">
              <h4>Contact Us</h4>

              <form>
                <input
                  type="email"
                  className="form-control mb-2"
                  placeholder="Enter your email"
                />

                <textarea
                  className="form-control mb-2"
                  placeholder="Leave a comment"
                ></textarea>

                <button className="btn btn-danger">
                  Send Message
                </button>
              </form>
            </div>

            {/* Social Media */}
            <div className="col-lg-4 text-light">
              <h4>Stay Connected</h4>

              <a href="https://facebook.com/dmx.breezy">
                <img src="/fb.png" alt="Facebook" width="40" />
              </a>

              <a href="https://instagram.com/dmxbreezy" className="ms-2">
                <img src="/in.png" alt="Instagram" width="40" />
              </a>

              <a href="https://x.com" className="ms-2">
                <img src="/x.png" alt="Twitter" width="40" />
              </a>

              <a href="https://wa.me/254705067151" className="ms-2">
                <img src="/whatsapp-1623579_1920.png" alt="WhatsApp" width="40" />
              </a>

            </div>

          </div>
        </div>
      </footer>

    </BrowserRouter>
  );
}

export default App;
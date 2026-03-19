
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductComponent from './components/GetProductComponent';
import SignInComponent from './components/SignInComponent';
import SignUpComponent from './components/SignUpComponent';
import AddProductComponent from './components/AddProductComponent';
import AddPlumberComponent from './components/AddPlumberComponent';
import ServicesComponent from './components/ServicesComponent';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <header className="App-header">
          <h1>KEPHRICS COMPANY</h1>
        </header>
      </div>
      <Routes>
        <Route path='/' element={<ProductComponent />} />
        <Route path='/signup' element={<SignUpComponent />} />
        <Route path='/signin' element={<SignInComponent />} />
        <Route path='/services' element={<ServicesComponent />} />
        <Route path='/addproduct' element={<AddProductComponent />} />
        <Route path='/addplumber' element={<AddPlumberComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import ProductDetail from "./components/ProductDetail";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Products from "./components/Products";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Footer } from "./components/Footer";


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/productdetail" element={<ProductDetail/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

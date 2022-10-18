import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import ProductListing from "./components/ProductListing";
import ProductDetail from "./components/ProductDetail";
import Sizes from "./components/Sizes/Sizes";


function App() {
  return (
    <div className="App">
      <Header />
      {/* <Sizes /> */}
      <Routes>
        
        <Route path="/" exact element={<ProductListing />} />
        <Route path="/product/:productId" exact element={ProductDetail} />
        <Route>404 Not Found!</Route>
      </Routes>
    </div>
  );
}

export default App;

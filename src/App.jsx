import { useReducer, useState } from "react";
import "./App.css";
import AnnouncementBar from "./Components/Announcement/AnnouncementBar";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import NewsLetter from "./Components/NewsLetter/NewsLetter";
import Shop from "./Components/Shop/Shop";
import productList from "./data/initialProducts";
import { CartContext, ProductContext } from "./Context";
import { productReducer } from "./Reducer/reducer";

function App() {
  const [products, dispatch] = useReducer(productReducer, productList);
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <ProductContext.Provider value={{ products, dispatch }}>
        <AnnouncementBar />
        <Header />
        <Shop />
        <NewsLetter />
        <Footer />
      </ProductContext.Provider>
    </CartContext.Provider>
  );
}

export default App;

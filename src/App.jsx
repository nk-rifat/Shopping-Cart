import { useReducer } from "react";
import "./App.css";
import AnnouncementBar from "./Components/Announcement/AnnouncementBar";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import NewsLetter from "./Components/NewsLetter/NewsLetter";
import Shop from "./Components/Shop/Shop";
import productList from "./data/initialProducts";
import { CartContext, ProductContext } from "./Context";
import { productReducer } from "./Reducer/productReducer";
import { cartReducer } from "./Reducer/cartReducer";

function App() {
  const [products, productsDispatch] = useReducer(productReducer, productList);
  const [cart, cartDispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, cartDispatch }}>
      <ProductContext.Provider value={{ products, productsDispatch }}>
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

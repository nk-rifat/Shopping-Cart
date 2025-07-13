import { useState } from "react";
import "./App.css";
import AnnouncementBar from "./Components/Announcement/AnnouncementBar";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import NewsLetter from "./Components/NewsLetter/NewsLetter";
import Shop from "./Components/Shop/Shop";
import productList from "./data/initialProducts";
import { ProductContext } from "./Context";

function App() {
  const [products, setProducts] = useState(productList);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      <AnnouncementBar />
      <Header />
      <Shop />
      <NewsLetter />
      <Footer />
    </ProductContext.Provider>
  );
}

export default App;

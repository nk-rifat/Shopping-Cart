import "./App.css";
import AnnouncementBar from "./Components/Announcement/AnnouncementBar";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import NewsLetter from "./Components/NewsLetter/NewsLetter";
import Shop from "./Components/Shop/Shop";

function App() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <Shop />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default App;

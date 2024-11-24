import "./App.css";
import Navbar from "./Heading-Part/Navbar";
import TitlePart from "./Body-Part/TitlePart";
import Footer from "./Heading-Part/Footer";
import HeroImage from "./Heading-Part/HeroImage";

function App() {
  return (
    <>
      <Navbar />
      <HeroImage/>
      <TitlePart />
      <Footer />
    </>
  );
}

export default App;

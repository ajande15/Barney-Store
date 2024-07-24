import './App.css';
import Header from "./header/Header.js";
import Headerimg from "./header/Headerimg.js";
import Header2 from "./header/Header-2.js";
import BestSelling from "./main_content/Best-Selling.js";
import Videos from "./main_content/Videos.js";
import Explore from "./main_content/Explore.js";
import Reviews from "./main_content/Reviews-View.js";
import SizeGuide from "./footer/Size-Guide.js";
import AskedQA from "./footer/AskedQA.js";
import Footer from "./footer/Footer.js";

function App() {
  return (
    <div className='app'>
    <Header />
    <Headerimg/>
    <Header2/>
    <BestSelling/>
    <Videos/>
    <Explore/>
    <Reviews/>
    <SizeGuide/>
    <AskedQA/>
    <Footer/>
    </div>
  );
}

export default App;

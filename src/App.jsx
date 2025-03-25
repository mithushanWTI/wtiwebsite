import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Inbound from "./pages/Inbound";
import Outbound from "./pages/Outbound";
import PackageDetails from "./components/PackageDetails";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Corporate from "./pages/Corporate";
import AboutUs from "./pages/AboutUs";
import WhatsAppButton from "./components/WhatsAppButton";
import MiceTour from "./pages/MiceTour";

import VisaServices from "./pages/VisaServices";
import AirTickets from "./pages/AirTickets";
import Article1 from "./pages/Article1";
import Article2 from "./pages/Article2";
import Article3 from "./pages/Article3";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inbound" element={<Inbound/>} />
        <Route path="/outbound" element={<Outbound/>} />
        <Route path="/package/:id" element={<PackageDetails />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/blog/Article1" element={<Article1/>} />
        <Route path="/blog/Article2" element={<Article2/>} />
        <Route path="/blog/Article3" element={<Article3/>} />
        <Route path="/contactus" element={<Contact/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/corporate" element={<Corporate/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/AirTickets" element={<AirTickets/>} />
        <Route path="/VisaServices" element={<VisaServices/>} />
      
        <Route path="/micetours" element={<MiceTour/>} />
      </Routes>
      <WhatsAppButton/>
    </Router>
  );
};

export default App;

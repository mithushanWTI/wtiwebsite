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


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inbound" element={<Inbound/>} />
        <Route path="/outbound" element={<Outbound/>} />
        <Route path="/package/:id" element={<PackageDetails />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contactus" element={<Contact/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/corporate" element={<Corporate/>} />
        <Route path="/services" element={<Services/>} />
      </Routes>
    </Router>
  );
};

export default App;

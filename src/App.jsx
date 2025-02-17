import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Inbound from "./pages/Inbound";
import Outbound from "./pages/Outbound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inbound" element={<Inbound/>} />
        <Route path="/outbound" element={<Outbound/>} />
      
      </Routes>
    </Router>
  );
};

export default App;

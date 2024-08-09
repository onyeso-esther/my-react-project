import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Services from "./pages/Services";
import LunarSpecialists from "./pages/LunarSpecialists";
import Blog from "./pages/Blog";
import Us from "./pages/Us";
import AboutUs from "./pages/AboutUs";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/services" element={<Services />} />
      <Route path="/Blog" element={<Blog/>} />
      <Route path="/LunarSpecialists" element={<LunarSpecialists />} />
      <Route path="/Us" element={<Us />} /> 
      <Route path="/AboutUs" element={<AboutUs />} />
      
    </Routes>
  );
    
}

export default App;

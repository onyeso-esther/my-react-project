import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Services from "./pages/Services";
import LunarSpecialists from "./pages/LunarSpecialists";
import Blog from "./pages/Blog"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/services" element={<Services />} />
      <Route path="/Blog" element={<Blog/>} />
      <Route path="/LunarSpecialists" element={<LunarSpecialists />} />
      
    </Routes>
  );
    
}

export default App;

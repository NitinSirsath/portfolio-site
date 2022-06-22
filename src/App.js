import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.jsx'
import Error from "./pages/Error.jsx";
import Experience from "./pages/Experience.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import DP from './assets/me.jpg'
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="App">
     <Navbar profilePhoto={DP}/>
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/projects" element={<Projects />}/>
      <Route path="/experience" element={<Experience />}/>
      <Route  path="*" element={<Error />}/>
     </Routes>
     <Footer />
    </div>
  );
}

export default App;

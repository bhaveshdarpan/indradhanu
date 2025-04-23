import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/ui/navbar/Navbar.js";
import Footer from "./components/ui/footer/Footer.js";
import Homepage from "./pages/Homepage/Homepage.js";
import AboutUs from "./pages/AboutUs/AboutUs.js";
import Projects from "./pages/Projects/Projects.js";
import BeAnAlly from "./pages/BeAnAlly/BeAnAlly.js";
import Vibhinn from "./pages/Vibhinn/Vibhinn.js";
import "./App.css";
import Navbar from "./components/navbar/Navbar.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/be-an-ally" element={<BeAnAlly />} />
            <Route path="/vibhinn" element={<Vibhinn />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

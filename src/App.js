import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.js";
import Footer from "./components/ui/footer/Footer.js";
import Homepage from "./pages/Homepage/Homepage.js";
import AboutUs from "./pages/AboutUs/AboutUs.js";
import Projects from "./pages/Projects/Projects.js";
import BeAnAlly from "./pages/BeAnAlly/BeAnAlly.js";
import Vibhinn from "./pages/Vibhinn/Vibhinn.js";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";

function PageTitleUpdater() {
  const location = useLocation();
  useEffect(() => {
    let title = "Indradhanu"; // default title for homepage
    switch (location.pathname) {
      case "/":
        title = "Indradhanu";
        break;
      case "/about-us":
        title = "About Us";
        break;
      case "/projects":
        title = "Projects";
        break;
      case "/be-an-ally":
        title = "Be An Ally";
        break;
      case "/vibhinn":
        title = "Vibhinn";
        break;
      default:
        title = "Indradhanu";
    }
    document.title = title;
  }, [location]);
  return null;
}

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <PageTitleUpdater />
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

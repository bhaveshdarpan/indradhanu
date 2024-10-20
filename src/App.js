import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/homepage/Homepage.js";
import Resources from "./components/resources/Resources";
import ContactUs from "./components/contact-us/ContactUs";
import Footer from "./components/footer/Footer";
import AboutUs from "./components/about-us/AboutUs";
import Projects from "./components/projects/Projects";
import BeAnAlly from "./components/be-an-ally/BeAnAlly";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="#resources" element={<Resources />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/be-an-ally" element={<BeAnAlly />} />
            <Route path="#contact-us" element={<ContactUs />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

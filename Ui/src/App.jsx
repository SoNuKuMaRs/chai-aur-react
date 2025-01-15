import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import React Router components
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Service";
import Contact from "./components/Contacts/Contact";

const App = () => {
  return (
    <Router>
      {/* Wrap everything inside Router */}
      <Navbar />
      <Routes>
        {/* Define the routes for navigation */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;

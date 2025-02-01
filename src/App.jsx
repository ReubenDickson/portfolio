import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <Navbar />

        {/* Home Page Content */}
        <header className="header">
          <h1>Reuben Dickson</h1>
          <p>DevOps Engineer | Automating Infrastructure, Delivering Excellence</p>
        </header>

        {/* Profile Picture and About Me Section */}
        <section className="profile-section">
          <div className="profile-image">
          <img src="/profile.jpg" alt="Reuben Dickson" />
          </div>
          <About />
        </section>

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />
      </div>
    </Router>
  );
};

export default App;
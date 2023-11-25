import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contributions from "./components/Contributions"
import Contact from "./components/Contact"
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Projects />
    <Contributions />
    <Contact />
    <Footer />
    </>
  );
}

export default App;

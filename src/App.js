import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Hero from "./components/Hero";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </Router>
    </>
  );
}

export default App;

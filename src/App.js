import React from "react";
import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavBar from "./components/navBar";
import Landing from "./components/Landing";
import Skills from './components/Skills';
import Projects from './components/Projects';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Project from "./components/Project";
import Contact from "./components/Contact";
import Items from "./components/Items";
import EmailItem from "./components/EmailItem";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Landing />
      <Skills />
      <Router>
        <Projects />
        <Routes>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/items" element={<Items />} />
        </Routes>
      </Router>
      <EmailItem />
      <Footer/>
    </>
  );
}

export default App;

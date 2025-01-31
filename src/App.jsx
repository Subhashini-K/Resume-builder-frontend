import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ResumeTemplates from "./components/ResumeTemplates/ResumeTemplates";
import Form from "./components/Form/Form";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume-templates" element={<ResumeTemplates />} />
          <Route path="/form" element={<Form />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

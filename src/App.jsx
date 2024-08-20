import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Software from "./components/Software";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Clients from "./components/Clients";
import React, { useEffect, useRef, useState, lazy, Suspense } from "react";
import useLocoScroll from "./components/useLocoScroll";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const ref = useRef(null);
  const [preloader, setPreload] = useState(true);

  useLocoScroll(!preloader);

  useEffect(() => {
    if (!preloader && ref) {
      if (typeof window === "undefined" || !window.document) {
        return;
      }
    }
  }, [preloader]);

  const [timer, setTimer] = useState(3);
  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreload(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clear();
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  if (typeof window === "undefined" || !window.document) {
    return null;
  }

  return (
    <Router>
      {preloader ? (
        <div className="Pre-Loader">
          <h2>Flash Innovations</h2>
        </div>
      ) : (
        <div
          // className="main-container"
          // id="main-container"
          // data-scroll-container
          ref={ref}
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/software" element={<Software />} />
            <Route path="/services" element={<Services />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;

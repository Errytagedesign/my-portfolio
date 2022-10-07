import React, { useState, useEffect } from "react";

import "./App.css";
import "aos/dist/aos.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Compoenets
import { HomePage, Navbar, Footer } from "./components/exportAllcomp";
import Spinner from "./components/spinner/Spinner";

function App() {
  const [loading, setLoading] = useState(true);

  // const handleLoading = () => {
  //   const timeId = setTimeout(setLoading(false), 15000);
  // };

  const AOS = require("aos");
  useEffect(() => {
    AOS.init();
    const timeId = setTimeout(() => {
      // if loading is true, set it to false
      setLoading(false);
    }, 3000);
    return () => {
      // clear timeout here
      clearTimeout(timeId);
    };
  }, [AOS]);

  return loading ? (
    <Spinner />
  ) : (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

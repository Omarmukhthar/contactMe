import React from "react";
import Hero from "./components/Hero";
import Contact from "./components/contact";
import ScrollToTop from "./components/ScrollToTop";
import Orbs from "./components/Orbs";
import "./App.css";

function App() {
  return (
    <>
      <Orbs />
      <main>
        <Hero />
        <Contact />
      </main>
      <ScrollToTop />
    </>
  );
}

export default App;

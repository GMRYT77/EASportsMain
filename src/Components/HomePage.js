import React from "react";
import Footer from "./Footer/Footer";
import MainContent from "./MainContent/MainContent";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function HomePage() {
  return (
    <>
      <Navbar />
      <MainContent />
      <Footer />
    </>
  );
}

export default HomePage;

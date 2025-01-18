import React from "react";
import {  Routes, Route } from "react-router-dom";
import Home from "./home/page";
import Header from "./components/kit/header";
import { LenisProvider } from "./context/smooth-scroll";
import ScrollToTop from "./components/kit/scroll-top";
import Footer from "./components/kit/footer";

function App() {
  return (

    <>

      <LenisProvider>

        <ScrollToTop/>

  
    
        <Header/>


        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>


        <Footer/>

      </LenisProvider>
    
    
    </>



   
   
    


  );
}

export default App;

import React from "react";
import {  Routes, Route, useLocation } from "react-router-dom";
import Home from "./home/page";
import Header from "./components/kit/header";
import { LenisProvider } from "./context/smooth-scroll";
import Footer from "./components/kit/footer";

function App() {

  const location = useLocation(); // Now safe to use because it's inside a Router



  return (

    <>

      <LenisProvider>


  
    
        <Header/>


        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>


        <div key={location.pathname}>

          <Footer/>

        </div>

       

      </LenisProvider>
    
    
    </>



   
   
    


  );
}

export default App;

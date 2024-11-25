
import BrandsLogo from "./components/BrandsLogo/BrandsLogo"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar"
import Services from "./components/Services/Services"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial from "./components/Testimonial/Testimonial";
import BlogsComp from "./components/Blogs/BlogsComp";
import Footer from "./components/Footer/Footer";
import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Price from "./components/Price/Price";


const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);
 
  return (


   <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <BrandsLogo />
      <Services />
      <About />
      <Price />
      <Testimonial />
      <BlogsComp />
      <Contact />
      <Footer />
     
    
      </div>
      
  );
};

export default App

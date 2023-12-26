import React from "react";
import './index.css';
import  AboutUs  from './components/layout/aboutUs';
import  OurStory  from './components/layout/OurStory';
import  OurCompanyVision  from './components/layout/OurCompanyVision';
import OurCoreValues from "./components/layout/OurCoreValues";
import ContactUsNewProject from "./components/layout/ContactUsNewProject";
import Header from "./components/layout/header";
import Hero from "./components/layout/heroSection";
import Footer from "./components/layout/footer";
import PrivacyPolicy from "./components/layout/privacyPolicy";

function App() {
  return (
    <div>
      <Header/> 
      <Hero/>
      <PrivacyPolicy/>
      <Footer/>
    </div>
  );
}

export default App;

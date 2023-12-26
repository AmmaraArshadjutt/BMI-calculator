import React from "react";
import videoPNG from "../../../assets/images/heroVideo.png";
import bgImage from "../../../assets/images/HeroSectionbg.png";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";


const Hero = () => {
  return (
    <Router basename="">
    <div>
      <section
        className="bg-white dark:bg-gray-900 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          height: "68vh",
        }}
      >
        <div className="max-w-screen-xl px-6 py-8 lg:py-36 text-white">
          <h1 className="mb-2 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ml-24 mr-2">
            Welcome to Al Salaam Tech House
          </h1>
          <h2 className="mb-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ml-24 mr-2">
            We Provide <span style={{ color: "rgba(210, 167, 87, 1)" }}>Creative</span> Ideas
          </h2>
          <p className="max-w-2xl mb-6 font-light text-white-500 lg:mb-8 md:text-lg lg:text-xl ml-24 mr-2">
            A leading tech company that provides innovative solutions to businesses across industries.
          </p>
          <div className="ml-24 mt-8 flex items-center relative">
            <Link
              href="#"
              className="flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-yellow-600 hover:bg-yellow-700 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900 mr-4"
            >
              Get started
            </Link>

            <div className="flex items-center">
              <img src={videoPNG} alt="Video" style={{ height: '3rem' }} className="mx-2" />
              <span className="text-white">Watch Video!</span>
            </div>
           
          </div>
        </div>
      </section>
    </div>
   </Router>
  );
};

export default Hero;
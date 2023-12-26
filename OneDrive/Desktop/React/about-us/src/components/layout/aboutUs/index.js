
import React from "react";
import { Component } from "react";
import imgh from '../../../assets/images/About-Us.png';


const AboutUs = () => {

    return (
        <div>
            <div class=" absolute box-border border-[#D2A757] border-2 mb-14 ml-[15rem] mt-[4rem] w-[526px] h-[276px]  pl-15">
                <div class=" relative w-[559px] h-[372.71.15px] top-[-42px] left-[155px] pl-[18px] pt-[10rem] ml-[-14.5rem] mt-[-4.85rem] ">
                    <img src={imgh} alt="Company Image" class="rounded-md shadow-md"/>
                </div>
            </div>

            <div class=" w-1/2 pl-[50rem] pt-[8.25rem] h-5">
                <p class="text-black w-[552px] h-[78ewpx] top-[811px] left-[649px] font-sans font-bold text-[44px]">
                    Introduction
                </p>
                <p
                    class="text-black w-[576px] h-[104px] top-[887px] left-[649px] font-sans font-normal text-[24px] leading-[25.78px]">
                    We take pride in our ability to collaborate with our clients, ensuring that we fully understand
                    their goals and requirements before we begin any project.
                </p>
                <p class="text-black w-[576px] top-[887px] left-[649px] font-sans font-normal text-[24px] leading-[25.78px]" >
                    1. Custom Responsive Designs
                    <br />2. Seo Optimized Content
                    <br />3. Custom App Development
                </p>
            </div>
        </div>

    );
};

export default AboutUs;
import React from "react";
import { Component } from "react";
import img1 from '../../../assets/images/our-story-one.png';
import img2 from '../../../assets/images/our-story-two.png';

const OurStory = () => {

    return (
        <div class=" bg-[#52462CCC] container mx-auto p-8 flex items-center mt-[18.5rem]">

        <div class=" w-1/4">
            <p class=" text-white font-bold text-[44px] leading-[51px] ml-[5.25rem]" >Our Story</p>
            <p class="text-white font-normal leading-[28.13px] w-[393px] h-[132px] top-[1159px] left-[69px] ml-[5.25rem]">
                We have established our company in 2022.
                <br/>
                We have the skills and expertise to help you succeed
                <br/>
                We can help your business to grow and provide innovative solution.
            </p>
        </div>

        <div class= "w-[1493px] h-[296px] top-[460px] left[455px] pr-[48.25rem] ">
            <img src= {img1} alt="First Image" class="mx-auto  shadow-md"/>
        </div>

     
        <div class="w-[372px] h-[296.8px] top-[1083px] left[841px] ml-[-57.25rem]">
            <img src= {img2} alt="Second Image" class="mx-auto  shadow-md"/>
        </div>

    </div>

    );
};

export default OurStory;
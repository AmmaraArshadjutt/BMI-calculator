import React from "react";
import { Component } from "react";
import img1 from '../../../assets/images/vision.png';
import img2 from '../../../assets/images/mission.png';

const OurStory = () => {

    return (
        <div class="container mx-auto p-8">

        
        <div class="flex items-center mb-[-3rem]">
            <div class="w-[559px] h-[372.96px] top-[1431px] border border-[#D2A757] ml-[8.75rem]">
                <img src={img1} alt="Top Left Image" class="rounded-md shadow-md"/>
            </div>
            <div class="w-1/2 pl-8">
                <div class=" mt-[-11.65rem] ml-[0.5rem] left-10">
                    <p class="text-[44px] font-bold text-[#D2A757]"> Our Company Vision</p>
                </div>
                <p class="text-black font-normal text-[24px] w-[-1.25rem] h-3 mt-5 ml-[1rem] pr-[12.5rem]">
                    Our Vision is to be a leading Web Solution company in IT sector and progress in our current position in market. We know that Customer’s growth is our growth,
                     so we commit our customers to help in achieving their business goals.
                </p>
            </div>
        </div>

     
        <div class="flex items-center">
            <div class="w-1/2 pr-8">
                <div class="w-[48rem] ml-[8.65rem]">
                    <p class="text-[44px] font-bold text-[#D2A757] mt-[-7.25rem]"> Our Company Mission</p>
                </div>
                <p class="text-black font-normal text-[24px] w-[-1.25rem] h-[3.75rem] mt-5 ml-[1rem] pl-[7.5rem]">
                    We believe in work with the accuracy and best quality. We want to be known as the reliable, innovative and user friendly software service provider in IT industry.We believe in work with the accuracy and best quality. We want to be known as the reliable,
                     innovative and user friendly software service provider in IT industry.
                </p>
            </div>
            <div class="w-[559px] h-[372.96px] top-[1431px] border border-[#D2A757]">
                <img src= {img2} alt="Bottom Right Image" class="rounded-lg shadow-md"/>
            </div>
        </div>

    </div>

    );
};

export default OurStory;
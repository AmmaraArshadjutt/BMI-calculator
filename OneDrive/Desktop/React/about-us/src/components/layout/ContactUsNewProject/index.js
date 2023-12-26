import React from "react";
import { Component } from "react";
import img1 from '../../../assets/images/ContactUs.png';


const ContactUsNewProject = () => {

    return (
        <div>
            <div class=" absolute box-border border-[#D2A757] border-2 mb-14 ml-[15rem] mt-[4rem] w-[526px] h-[276px]  pl-15">
                <div class=" relative w-[559px] h-[372.71.15px] top-[-42px] left-[155px] pl-[18px] pt-[10rem] ml-[-14.5rem] mt-[-4.85rem] ">
                    <img src={img1} alt="Company Image" class="rounded-md shadow-md" />
                </div>
            </div>

            <div class=" w-1/2 pl-[50rem] pt-[8.25rem] h-5">
                <p class="text-black w-[552px] h-[78ewpx] top-[811px] left-[649px] font-sans font-bold text-[44px]">
                    Contact us for your new projects.
                </p>
                <p
                    class="text-black w-[576px] h-[104px] top-[887px] left-[649px] font-sans font-normal text-[24px] leading-[25.78px]">
                    Join our team and get the details about your
                    next projects and you will get to know how our
                    team and company works in the web ans app
                    making process. .
                </p>
              
                <button class="text-[26px]  border-[#D2A757] border-[10.5px] ring-offset-2 font-medium absolute top-2992 left-716 w-[168px] h-[62px] p-[16px 20px] bg-[#D2A757] text-white rounded-lg">
                    Contact Us
                </button>
                
            </div>

        </div>

    );
};

export default ContactUsNewProject;
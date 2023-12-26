import React from "react";
import { Component } from "react";
import img1 from '../../../assets/images/Logo.png';
import img2 from '../../../assets/images/AlslamW.png';
import img3 from '../../../assets/images/AlslamY.png';
import img4 from '../../../assets/images/facebook.png';
import img5 from '../../../assets/images/snapchat.png';
import img6 from '../../../assets/images/insta.png';
import img7 from '../../../assets/images/linkedIn.png';


const Footer = () => {

    return (
        <body class="bg-gray-100">

            <footer class="bg-gradient-to-r from-[#52462C] to-[#D2A757] text-white p-8 flex flex-wrap justify-around mt-[355.23px]">
                <div class="flex-none w-full md:w-1/4 lg:w-1/6">
                    <img src={img2} alt="Company Logo" class="w-[13rem] h-16 object-contain mb-4 ml-[-1.75rem]" />
                    <p class="text-[14px] leading-[21px] w-[20.75rem] font-normal text-white">We take pride in our ability to collaborate with our
                        clients, ensuring that we fully understand their goals and requirements .</p>

                    <h5 class="text-[14px] font-bold pt-[1.75rem] mb-4">Parent Company</h5>
                    <img src={img3} alt="Company Logo" class="w-[13rem] h-16 object-contain mb-4 ml-[-1.75rem]" />
                    <a href="#" class="text-gray-300 hover:text-white">https://alsalaamlimousine.com/</a>

                    <h5 class="text-[14px] font-bold pt-[1.75rem] mb-4">Sub Company</h5>
                    <img src={img2} alt="Company Logo" class="w-[13rem] h-16 object-contain mb-4 ml-[-1.75rem]" />
                    <a href="#" class="text-gray-300 hover:text-white">https://alsalaamlimousine.com/</a>

                </div>

                <div class="w-full md:w-1/4 lg:w-1/6 mt-4 md:mt-0 pl-[6.75rem]">
                    <h3 class="font-bold font-[Montserrat] text-[16px] leading-[4rem] ">Useful Links</h3>
                    <ul class="list-none text-[14px] font-normal space-y-3">
                        <li>Home</li>
                        <li>About us</li>
                        <li>Services</li>
                        <li>Terms of service</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>


                <div class="w-full md:w-1/4 lg:w-1/6 mt-4 md:mt-0 pr-[6.75rem]">
                    <h3 class="font-bold font-[Montserrat] text-[16px] leading-[4rem] ">Our Services</h3>
                    <ul class="list-none text-[14px] font-normal space-y-3">
                        <li>Web Design</li>
                        <li>Web Development</li>
                        <li>Product Management</li>
                        <li>Marketing</li>
                        <li>Graphic Design</li>
                    </ul>
                </div>

                <div class="w-full md:w-1/4 lg:w-1/6 mt-4 md:mt-0 ml-[-8.25rem]">
                    <h3 class="font-bold font-[Montserrat] text-[16px] leading-[4rem]  ">Contact Us</h3>
                    <p class=" text-[14px] leading-[21px] w-[20.75rem] font-normal text-white pt-[-1.25rem]">40 Commercial Bolan,Dc Colony,</p>
                    <p class=" text-[14px] leading-[21px] w-[20.75rem] font-normal text-white pt-[-3.25rem]">Rahwali , Gujranwala Cantt</p>
                    <p class=" text-[14px] leading-[21px] w-[20.75rem] font-normal text-white pt-[-3.25rem]">Pakistan</p>
                    <div class="pt-[1.75rem] text-[14px]">
                        <p>Phone:  +(92)3142683233</p>
                        <p>Email: info@alsalaamtechhouse.com</p>
                    </div>
                </div>




                <div class="w-full mt-8 ">
                    <p class="text-center font-semibold text-[18px] ml-[11.75rem] mt-[-11rem]"> Copyright 2023 © All Rights Reserved Al Salaam Tech House</p>
                    <div class=" w-full mt-[1.75rem] pr-[3.5rem] pt-3 flex justify-center space-x-4">
                    <img src={img4} alt="Company Logo" />
                    <img src={img5} alt="Company Logo" />
                    <img src={img6} alt="Company Logo" />
                    <img src={img7} alt="Company Logo" />
                    </div>
                </div>
            </footer>

            <script src="https://kit.fontawesome.com/your-font-awesome-key.js" crossorigin="anonymous"></script>

        </body>
    );
};

export default Footer;
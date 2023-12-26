
import React from "react";
import { Component } from "react";
import img1 from '../../../assets/images/focus.png';
import img2 from '../../../assets/images/innovation.png';
import img3 from '../../../assets/images/security.png';



const OurCoreValues = () => {

    return (
        <section>
            <div class="container mx-auto p-8 bg-[#52462C]">


                <h1 class="text-white text-3xl font-semibold text-left mb-8">Our Core Values</h1>


                <div class="flex gap-8">


                    <div class="w-1/3 bg-white p-6 rounded-lg shadow-md">
                        <img src={img1} alt="Vision Image" class="w-[4rem] h-[4rem] mb-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" />
                        <h2 class=" text-[28px] font-semibold mb-2">Customer Focus</h2>
                        <p class="text-black text-xl font-normal">“Our customers are at the heart of everything we do. Their satisfaction is our success."</p>
                    </div>


                    <div class="w-1/3 bg-white p-6 rounded-lg shadow-md">
                        <img src={img2} alt="innovation Image" class="w-[4rem] h-[4rem] mb-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" />
                        <h2 class="text-[28px] font-semibold mb-2">Innovation</h2>
                        <p class="text-black text-xl font-normal">We never stop innovating to create transformative solutions that reshape the landscape of logistics and software development."</p>
                    </div>


                    <div class="w-1/3 bg-white p-6 rounded-lg shadow-md">
                        <img src={img3} alt="Security Image" class="w-[4rem] h-[4rem] mb-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" />
                        <h2 class="text-[28px] font-semibold mb-2">Security</h2>
                        <p class="text-black text-xl font-normal">Implementing mechanisms in the construction of security to help it remain functional (or resistant) to attacks.</p>
                    </div>

                </div>

            </div>

        </section>

    );
};

export default OurCoreValues;
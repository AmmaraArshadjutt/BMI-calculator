import { React, useState } from "react";
import img1 from '../../../assets/images/Logo.png';

const Header = () => {
  let NavLinks = [
    { name: "Home", link: "/" },
    { name: "Our Company", link: "/" },
    { name: "Services", link: "/" },
    { name: "Contact Us", link: "/" },
  ];

  let [open, setOpen] = useState(false);
  return (
    <>
      <div className=" shadow-md w-full fixed top-0 left-0">
        <div className="md:flex items-center  justify-between bg-stone-950 py-3 text-white  ">
          <div className=" font-bold text-2xl  cursor-pointer flex items-center font-[Poppins] ml-8 text-white">
            <span>
              <img
                src={img1}
                className="w-20"
                alt="Al Salaam"
              />
            </span>
            <span className="ml-[-15px] font-[Roboto]">Al Salaam</span>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
            <i class="fa-solid fa-bars " name={open ? "close" : "menu"}></i>
          </div>
          <ul
            className={`font-[Roboto] mx-0 xl:mx-20 md:mx-7  md:flex font-bold md:items-center  md:pb-0 pb-12 absolute md:static bg-stone-950 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open
                ? "top-20  opacity-100"
                : "top-[-490px] opacity-0 md:opacity-100"
            }`}>
            {NavLinks.map(NavLinks => (
              <li
                key={NavLinks.name}
                className="  md:ml-8 text-xl active:border-b-[3px] active:border-b-customYellow md:my-0 my-7 ">
                <a href={NavLinks.link} className=" text-white ">
                  {" "}
                  {NavLinks.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
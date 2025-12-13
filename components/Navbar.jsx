import React, { useState } from "react";
import Image from 'next/image'
import {navComp} from "@/lib/Navcomponents";

import navOpen from "@/assets/images/navOpen.png";
import navClose from "@/assets/images/navClose.png";
import osesLogo from "@/assets/images/osesLogo.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // bg-[#09122c]

  const handleOpen = () => {
    setIsOpen((prev) => {
      return !prev;
    });
  };
  return (
    <div className="h-[50px] min-w-screen absolute flex justify-center items-center text-white top-0 z-30">
      <div className="w-full h-full flex justify-evenly  ">
        <div className="flex gap-2 justify-center items-center">
          <div className="h-[50px] w-[50px] rounded-full p-3 flex justify-center items-center">
            <Image
              src={osesLogo}
              width={35}
              height={35}
              className="object-cover h-[35px] w-[35px] rounded-full flex justify-center items-center"
              alt="oses logo"
            />
          </div>
          <div className="flex justify-center font-bold text-2xl">
            <span>Oses &nbsp;</span> | Dev
          </div>
        </div>
        {/* large screen display */}
        <div className="sm:flex flex-row gap-5 justify-center items-center ml-8 hidden font-medium text-lg sm:block">
          {navComp.map((nav_items) => {
            return <NavItems key={nav_items.id} items={nav_items} />;
          })}
        </div>
        {/* small screen display */}
        <div className="flex justify-center items-center sm:hidden">
          <button
            onClick={handleOpen}
            className="w-[30px] h-[30px] border-2 border-black border-solid rounded-sm justify-center cursor-pointer items-center text-white bg-white "
          >
            <Image
              src={isOpen ? navClose : navOpen}
              className="w-full h-full object-cover"
             alt="nav menu"/>
          </button>
        </div>
        {/* display in phones */}
        { isOpen &&
        <div className="flex flex-col absolute right-1 py-5 top-[60px] w-[120px] bg-[#020327] rounded-xl shadow-2xl  h-[120px] gap-3 justify-center items-center ml-8 sm:hidden font-semibold text-sm z-40">
          {navComp.map((nav_items) => {
            return <NavItems key={nav_items.id} items={nav_items} />;
          })}
        </div>
        }
      </div>
    </div>
  );
};

const NavItems = ({ items }) => {
  return (
    <ul>
      <li>
        <a href={items.href}> {items.navLink}</a>
      </li>
    </ul>
  );
};

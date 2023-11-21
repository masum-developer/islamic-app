import React from 'react';
import profile from "@/assets/header/profile.png";
import search from "@/assets/header/search.jpg";
import polygon from "@/assets/header/polygon.jpg";
import Image from 'next/image';
import { IoIosSettings } from "react-icons/io";

const Header = () => {
    return (
        <div className="navbar">
              <div className="navbar-start">
                <h2>Dua Page</h2>
              </div>
              <div className="navbar-center hidden lg:flex relative">
                <input
                  className="border py-1.5 px-4 rounded"
                  type="text"
                  placeholder="Search best food"
                />
                <Image
                  className="absolute right-1"
                  src={search}
                  alt="search"
                ></Image>
              </div>
              <div className="navbar-end">
                <span className="mr-1 hidden lg:block">
                  <Image className='bg-[#E2E2E2]' src={profile} alt="brightness"></Image>
                </span>
                <span className="mr-3 hidden lg:block">
                  <Image src={polygon} alt="switch"></Image>
                </span>
                <span className="mr-3">
                <IoIosSettings className="text-green-600" />
                </span>
              </div>
            </div>
    );
};

export default Header;
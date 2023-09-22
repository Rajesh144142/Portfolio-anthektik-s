import React, { useState, useEffect } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";
import "./../App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

const Header = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const menuList = [
    {
      id: "Home",
      id1: 1,
      name: "Home",
    },
    {
      id: "About",
      id1: 2,
      name: "About",
    },
    {
      id: "Skills",
      id1: 3,
      name: "Skills",
    },
    {
      id: "Projects",
      id1: 4,
      name: "Projects",
    },
  ];
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {/* px-4 sm:px-6 lg:px-8 */}
      <div className=" mx-auto w-[100%]  sticky top-0 bg-white z-10 ">
        <div className="flex items-center h-20 sm:flex justify-between px-4 ">
          <h1 className="flex  font-bold text-3xl basis-1/2 text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500">
            anthektikós
          </h1>
          <ul className="  pt-1 font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent text-2xl hidden   gap-5 md:flex lg:flex">
            {menuList.map((item) => (
              <Link key={item.id1} to={item.id} spy={true} smooth={true}>
                <li className="btn btn-xs sm:btn-sm md:btn-md btn-outline btn-primary m-1">
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
          <div className=" z-20 md:hidden lg:hidden">
            {!toggle ? (
              <HiMenuAlt1
                onClick={() => setToggle(!toggle)}
                className="text-blue-800 text-3xl mt-2 cursor-pointer"
              />
            ) : (
              <HiOutlineX
                onClick={() => setToggle(!toggle)}
                className="text-blue-800 text-3xl mt-2  cursor-pointer"
              />
            )}
            {toggle ? (
              <ul className=" absolute flex right-4 bg-white border-[0.1px] border-gray-400 transition p-2 cursor-pointer items-center ml-[-50px] rounded-xl flex-col md:hidden lg:hidden gap-2">
                {menuList.map((item) => (
                  <Link key={item.id1} to={item.id} spy={true} smooth={true}>
                    <li className=" px-10 cursor-pointer  ">
                      <button className=" w-[6rem] hover:bg-blue-500  hover:rounded-md p-2 ">{item.name}</button>
                      <br />
                    </li>
                  </Link>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

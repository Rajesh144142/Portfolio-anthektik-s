import React from "react";
import { SiLeetcode, SiGeeksforgeeks, SiGithub } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";

const AboutMe = () => {
    
  return (
    <>
      <div className=" flex flex-col gap-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <a href="https://leetcode.com/rajeshkh704435/">
            <div className="text-center bg-amber-300  cursor-pointer p-[20px] font-medium text-white  rounded-lg hover:bg-yellow-400 w-[13rem]">
              <div className="flex justify-center items-center text-xl text-orange-400 ">
                <div className="pt-[2px] pr-[5px] text-[27px]">
                  <SiLeetcode />{" "}
                </div>
                <div className="text-black">leetcode</div>
              </div>
            </div>
          </a>
          <a href="https://auth.geeksforgeeks.org/user/rajeshkh_704435/practice">
            <div className="text-center bg-green-600  cursor-pointer p-[20px] font-medium text-white  rounded-lg  hover:bg-green-700 w-[13rem]">
              <div className="flex justify-center items-center text-xl text-green-950 ">
                <div className="pt-[2px] pr-[5px] text-[27px]">
                  <SiGeeksforgeeks />
                </div>{" "}
                <div className="text-black ">GFG</div>
              </div>
            </div>
          </a>{" "}
        </div>
        <div className="flex flex-col md:flex-row  justify-center items-center gap-4">
          <a href="https://www.hackerrank.com/rajeshkh704435?hr_r=1">
            <div className="text-center bg-green-300  cursor-pointer p-[20px] font-medium text-white  rounded-lg  hover:bg-green-500  w-[13rem]">
              <div className="flex justify-center items-center text-[17px] text-green-800 ">
                <div className="pt-[2px] pr-[5px] text-[27px]">
                  <FaHackerrank />
                </div>{" "}
                <div className="text-black">HackerRank</div>
              </div>
            </div>
          </a>
          <a href="https://github.com/Rajesh144142">
            {" "}
            <div className="text-center bg-gray-300  cursor-pointer p-[20px] font-medium text-white  rounded-lg  hover:bg-gray-200 w-[13rem]">
              <div className="flex justify-center items-center text-xl text-black ">
                <div className="pt-[2px] pr-[5px] text-[27px]">
                  <SiGithub />
                </div>{" "}
                <div className="text-black">Github</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default AboutMe;

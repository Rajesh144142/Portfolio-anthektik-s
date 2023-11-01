import React, { useState } from "react";
import Lottie from "lottie-react";
import Animation from "./animation_lmpq6gmo.json";
import AboutMe from "./AboutMe";
import About from "./AboutHandaler";
const AboutYourself = () => {
  return (
    <>
       <div className=" text-center text-4xl font-bold border-solid  text-blue-300 mb-9 mt-7 md:mt-0 block md:hidden">
              About Me
            </div>
      <div className="flex flex-col justify-center items-center md:flex-row  ml-4 mr-4 gap-5">
       
        <div className="  w-[90%] m-auto md:w-[40%]">
          <Lottie animationData={Animation} />
        </div>
        <div className="m-auto w-[90%] md:w-[55%] flex flex-col  gap-6">
          <span className=" font-light text-lg m-auto w-[100%] md:w-[90%]">
            <div className=" text-start text-4xl font-bold border-solid  text-blue-300 mb-6 hidden md:block">
              About Me
            </div>
            <span className="text-gray-500 font-mono ">
              I am <span className="font-medium"> Rajesh Kumar Halder</span>, a
              dedicated CSE student skilled in full stack web development and
              proficient in programming With expertise in React.js, React
              Native, Node.js, and MongoDB.
            </span>
           <span className="font-mono text-gray-500  ">
            I am efficient in server-side applications and proficient in
            problem-solving (More than <span className="font-bold text-gray-500"> 1000 problem </span>
            solved in different coding platform)
            </span> 
          </span>

          <button
            onClick={() => document.getElementById("my_modal_1").showModal()}
            className="btn btn-outline btn-info m-auto w-[100%] md:w-[91%]"
          >
            Coding Skills
          </button>

          <button
            onClick={() => document.getElementById("my_modal_2").showModal()}
            className="btn btn-outline btn-primary  m-auto w-[100%] md:w-[91%]"
          >
            Education
          </button>
        </div>
      </div>

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg text-center">Education</h3>

          <About />
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">Coding Platforms</h3>

          <AboutMe />
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default AboutYourself;

import React, { useEffect } from "react";
import myimg from "./../assets/my-pic-t.png";
import Aos from "aos";
import Animate from "./animate";
import Myname from "./myname";
import { Link } from "react-scroll";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(function () {
    Aos.init({ duration: 100 });
  }, []);

  return (
    <div className="">
          <div className='h-12  md:h-16' id="Home" ></div>

      <div className="p-4 " >
        <div className="flex flex-col md:flex-row  justify-center md:justify-around  items-center m-auto w-[98%]   gap-10 md:gap-0">
          <div className=" flex justify-center  p-2">
            <div className="flex flex-col justify-start items-start ">
              <div>
                <Myname
                  font="fade-right"
                  css="bg-clip-text font-bold text-transparent bg-gradient-to-r to-blue-500 from-purple-800  delay-300ms duration-600ms md:text-4xl"
                  text="Hello,I'm Rajesh Kumar Halder"
                  condition="true"
                />
              </div>
              <div data-aos="fade-up" className="">
                <Animate />
              </div>
              <div data-aos="fade-up">
                <Myname
                  font="fade-left"
                  css="text-orange-500 cursor-pointer mt-[6.8rem]"
                  text="Welcome to My Website"
                  condition="true"
                />
              </div>
              <div className="flex mt-5 gap-4" >
                <button className="btn btn-outline btn-success" data-aos="fade-down">
                  <a href="https://drive.google.com/drive/folders/13SUvizcruVbHnwqlesk3aYbVh-ozb2wg?usp=sharing">
                    Resuma
                  </a>
                </button>

                <button className="btn btn-outline btn-info" data-aos="fade-up">
                  <Link to="Contact">Contact</Link>
                </button>
              </div>
            </div>
          </div>
          <div className=" " data-aos="flip-left">
            <div className="avatar">
              <div className=" mask mask-hexagon bg-blue-500">
                <img src={myimg} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

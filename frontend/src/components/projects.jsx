import React, { useEffect, useState } from "react";
import { baseUrl } from "./utils/constant";
import axios from "axios";
import imdb from "../assets/imdb.png";
import portfolio from "../assets/portfoliocss.png";
import traveloAPP from "../assets/traveloAPP.png";
import { Link } from "react-router-dom";
import ImageSlider from "./imageslider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsGithub } from "react-icons/bs";
import { GiDeliveryDrone } from "react-icons/gi";
const Projects = () => {
  // const projectHandle = [
  //   {
  //     projectname: "IMDB",
  //     url1: imdb,
  //     url2: imdb,
  //     url3: imdb,
  //     in: 5000,
  //     description:
  //       "Lorem ipsum dolor sit amet  adipisicing elit  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, dolorem illum ea asperiores culpa quia hic quaerat ab reprehenderit debitis molestiae nulla quos excepturi ut, veniam itaque laudantium explicabo autem.........",
  //     src: "https://github.com/Rajesh144142",

  //   },
  //   {
  //     projectname: "Travelo",
  //     url1: traveloAPP,
  //     url2: imdb,
  //     url3: imdb,
  //     in: 6000,
  //     description:
  //       "Lorem ipsum dolor sit amet consec Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima dolorem nihil obcaecati quos eligendi atque laborum, quaerat debitis, hic consequatur praesentium quo saepe sed inventore! Ducimus cumque fuga labore vero? tetur adipisicing elit........",
  //     src: "https://github.com/Rajesh144142",

  //   },
  //   {
  //     projectname: "MyPortfolio",
  //     url1: portfolio,
  //     url2: imdb,
  //     url3: imdb,
  //     in: 4000,
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quas repudiandae et! Excepturi, eum? Fugiat quasi quisquam tempore consequatur numquam possimus quibusdam, laudantium, harum, doloremque ipsa recusandae. Dolorum, dolorem deserunt! adipisicing elit........",
  //     src: "https://github.com/Rajesh144142",

  //   },
  //   {
  //     projectname: "project3",
  //     url1: portfolio,
  //     url2: imdb,
  //     url3: imdb,
  //     in: 5000,
  //     description:
  //       "Lorem ipsum dolor sit Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita nemo, illo tempora nisi sint praesentium quisquam doloribus veniam voluptatum provident unde eius odio molestias modi minima at labore, tenetur laudantium? amet consectetur adipisicing elit........",
  //     src: "https://github.com/Rajesh144142",

  //   },
  // ];
  const [projects, setProjects] = useState([]);
  const interval = 5000;
  useEffect(() => {
    axios
      .get(`${baseUrl}pro/`)
      .then((response) => {
        console.log(response.data);
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id="Projects" className="pt-24 mb-9  m-auto w-[100%]">
      <h1 className="text-center text-4xl font-bold text-blue-300 m-6">
        Projects
      </h1>
      <div className=" m-auto w-[88%]  ">
        <Slider {...settings}>
          {projects.map((item, id) => (
            <div className="  w-[20rem]  p-1  rounded-xl  " key="id">
              <div className="border-2 p-2 rounded-lg  w-[98%] ">
                <h1 className="text-center text-xl font-bold p-1 ">
                  {item.projectName}
                </h1>
                <div className="">
                  <ImageSlider
                    img1={item.image1}
                    img2={item.image2}
                    img3={item.image3}
                    interval={interval}
                  />
                </div>
                {/* <img src={item.url1} alt="error" className=" rounded-xl" /> */}

                <span className="">
                  <h1 className="font-thin ">Description : </h1>
                  <p className=" h-28 md:h-20">{item.description}</p>
                </span>
                <div className="flex justify-center items-center md:justify-start gap-5 mt-1">
                  <button className="">
                    <a
                      href={item.githubLink}
                      className="flex items-center gap-1 border-2 bg-slate-100 p-2 "
                    >
                      <BsGithub />{" "}
                      <span className="hidden md:block">Github repo</span>
                    </a>
                  </button>
                  <button className=" ">
                    <a
                      href={item.liveLink}
                      className="flex items-center gap-1 border-2 bg-slate-100 p-2 "
                    >
                      <GiDeliveryDrone />{" "}
                      <span className=" hidden md:block">Live Preview</span>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;

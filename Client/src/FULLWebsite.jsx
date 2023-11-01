import React from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills/skills";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Project from "./components/projects";
import Footer from "./components/footer";
import Header from "./components/Header";
import { Link, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";
import { MdAdminPanelSettings } from "react-icons/md";
const FULLWebsite = () => {
  const navigate = useNavigate();

  const handleToLoginPage = () => {
 
      navigate("../login");
  
  };
  return (
    <div className=" w-[100%] m-auto">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
      <div
        data-aos="fade-up"
        onClick={handleToLoginPage}
        className=" top-20 right-5  p-1 z-50 fixed "
      >
        <span className=" bg-white btn btn-circle btn-outline btn-info text-3xl ">
          <MdAdminPanelSettings />
        </span>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default FULLWebsite;

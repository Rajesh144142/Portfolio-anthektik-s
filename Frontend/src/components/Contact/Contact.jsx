import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import Messageform from './messageform'
import Lottie from "lottie-react";
import Aboutme from '../About/aboutme.json'
const Contact = () => {
  const textShadowStyle = {
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  };
  return (
    <>
<div id='Contact' className=''>
  <div className='h-20'></div>
      <div className=' justify-center'>
        <h1 className='text-4xl font-bold text-center text-blue-700 leading-tight mb-4'>What's Next</h1>
        <h1 className='text-center font-bold text-xl' style={textShadowStyle}>Get In Touch</h1>
        <p className='text-center font-bold p-5 text-purple-700'>
          Whether you have a question or just want to say hi, my inbox is always open. I’ll try my best to get back to you!</p>
        <div className=" flex justify-center flex-col md:flex-row ">
          {/* <div className='p-5  border-4 text-center   border-blue-500  w-1/3'>
 
 <p> I am a passionate full stack developer and software engineer, from India. I enjoy building from small sites to rich interactive web apps. If you are a business seeking a web presence or an employer looking to hire, you can get in touch with me here. 

 </p>
 <h1 className=" bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-800 font-bold text-xl" >Rajesh Kumar Halder</h1>
 <div className='flex justify-center '>
  <div className=' border-solid border m-2 border-blue-600 rounded-full p-3  bg-blue-600 hover:bg-blue-600 transition duration-500 hover:scale-150'><FaInstagram />  </div>
            <div className='border-solid border m-2  border-blue-600 rounded-full p-3 bg-blue-600 hover:bg-blue-600 transition duration-500 hover:scale-150'> <FaGithub /></div>
            <div className='border-solid border m-2 border-blue-600 rounded-full p-3 bg-blue-600 hover:bg-blue-600 transition duration-500  hover:scale-150'> <FaFacebook /></div>
            <div className='border-solid border m-2 border-blue-600 rounded-full p-3 bg-blue-600 hover:bg-blue-600 transition duration-500 hover:scale-150'><FaLinkedin /></div>
  </div>
  </div> */}<div className=' flex  justify-center p-5 md:p-2 flex-col  '>
            <div className='  w-[250px] mx-auto md:w-[400px]'><Lottie animationData={Aboutme} /></div>
            <div className='p-5 border-4 text-center w-[250px] mx-auto   border-blue-500 md:w-[400px]'>

              <p className="text-gray-700  leading-relaxed " > I am a passionate full stack developer and software engineer, from India. I enjoy building from small sites to rich interactive web apps. If you are a business seeking a web presence or an employer looking to hire, you can get in touch with me here.

              </p>
              <h1 className=" bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-800 font-bold text-xl" >Rajesh Kumar Halder</h1>
              <div className='flex justify-center '>
                <div className=' border-solid border m-2 border-blue-600 rounded-full p-3  bg-blue-600 hover:bg-blue-600 transition duration-500 hover:scale-150'>             <a href="https://www.instagram.com/ku.mar6501/"> <FaInstagram /></a>
                </div>
                <div className='border-solid border m-2  border-blue-600 rounded-full p-3 bg-blue-600 hover:bg-blue-600 transition duration-500 hover:scale-150'>  
                 <a href="https://github.com/Rajesh144142"><FaGithub /></a> </div>
                <div className='border-solid border m-2 border-blue-600 rounded-full p-3 bg-blue-600 hover:bg-blue-600 transition duration-500  hover:scale-150'> 
                <a href='https://www.facebook.com/rajesh.halder.56808995/'><FaFacebook /></a> </div>
                <div className='border-solid border m-2 border-blue-600 rounded-full p-3 bg-blue-600 hover:bg-blue-600 transition duration-500 hover:scale-150'> 
                 <a href="https://www.linkedin.com/in/rajesh-kumar-halder-141666203/"><FaLinkedin /></a></div>
              </div>
            </div>
          </div>
          <div className=' p-2  w-full md:w-1/3'>
            <Messageform />
          </div>

          <div>

          </div>

        </div>

      </div>
      </div>
    </>
  )
}

export default Contact;
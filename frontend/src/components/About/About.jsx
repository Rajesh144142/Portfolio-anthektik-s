import React, { useState } from 'react'
import Aboutimg from './../../assets/about.png'
// import Aboutme from './aboutme.json'
// import Lottie from "lottie-react";

import AboutYourself from './AboutYourself'
const About = () => {
  const [forMore, setForMore] = useState(false)

  return (
    <>
      <div className='pt-16' id='About'>
        <div>
         <AboutYourself/>   
        </div>

   
      </div>




    </>
  )
}

export default About
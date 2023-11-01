
import Aos from "aos";
import "aos/dist/aos.css";


import React ,{useEffect}from 'react'

const animateforright = ({text,css}) => {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
   <div data-aos="fade-right">
 <div className={css}>{text}</div>
 </div>
  )
}

export default animateforright;
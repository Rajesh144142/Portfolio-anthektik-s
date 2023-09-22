
import Aos from "aos";
import "aos/dist/aos.css";


import React ,{useEffect}from 'react'

const myname = ({text,css,font,condition}) => {
  useEffect(function () {
    Aos.init({ duration: 1500 });
  }, []);

  return (
   <div data-aos={font}>
 <div className={css}> {condition=='true'?<h1 className="text-2xl md:text-3xl">{text}</h1>:<h1 className="text-md md:text-xl">{text}</h1>}</div>
 </div>
  )
}

export default myname;


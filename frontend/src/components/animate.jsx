import Typed from "typed.js";
import { useEffect, useRef } from "react";
const animate=()=> {
  // Create Ref element.
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["FullStack Web <br/> Developer","Software Engineer"],
// Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop:true
    });
     return () => {
      typed.destroy();
    };
  }, []); 

  return (
    <div className="">
      <h1 className='font-extrabold text-xl md:text-3xl h-1 '>And <br/>I'm a <span ref={el} className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-800 '></span></h1>
    </div>
  );
}
export default animate;
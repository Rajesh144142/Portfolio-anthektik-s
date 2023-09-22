import React, { useEffect } from 'react';
import { BsBraces } from 'react-icons/bs';
import { BsCodeSlash } from 'react-icons/bs'
import SkillsCart from './skillsCart'
import img9 from './../../assets/express-logo.png'
import img2 from './../../assets/CSS.png'
import img1 from './../../assets/HTML.png'
import img3 from './../../assets/JAVASCRIPT.png'
import img4 from './../../assets/react.png'
import img5 from './../../assets/Tailwind_CSS.png'
import img6 from './../../assets/node_js.png'
import img7 from './../../assets/mongodb.png'
import img8 from './../../assets/blockchain.png'
import img12 from './../../assets/bootstrap.png'
import Aos from "aos";
import "aos/dist/aos.css";




const skills = () => {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);
  // const items1=[
  //     {
  //      id:1,
  //      name:'HTML'
  //     },
  //     {
  //         id:2,
  //         name:'CSS'
  //     },
  //     {
  //         id:3,
  //         name:'JAVASCRIPT'
  //     },
  //     {
  //         id:4,
  //         name:'REACT'
  //     },{
  //         id:5,
  //         name:'TAILWIND CSS'
  //     },{
  //         id:6,
  //         name:'BOOTSTRAP'
  //     }
  // ]
  // const items2=[
  //     {
  //      id:1,
  //      name:'HTML'
  //     },
  //     {
  //         id:2,
  //         name:'CSS'
  //     },
  //     {
  //         id:3,
  //         name:'JAVASCRIPT'
  //     },
  //     {
  //         id:4,
  //         name:'REACT'
  //     },{
  //         id:5,
  //         name:'TAILWIND CSS'
  //     },{
  //         id:6,
  //         name:'BOOTSTRAP'
  //     }
  // ]
  const frontend = [
    {

      id: 1,
      url: img1,
      name: 'HTML'
    }, {
      id: 2,
      url: img2,
      name: ' CSS'
    }, {
      id: 3,
      url: img3
      , name: 'JAVA SCRIPT'
    },
    {
      id: 4,
      url: img4
      , name: 'REACT JS'
    },
    {
      id: 5,
      url: img5
      , name: 'TAILWIND CSS'
    }, {
      id: 6,
      url: img12,
      name: 'BOOTSTRAP'
    }]

  const backend = [{
    id: 6,
    url: img6
    , name: 'Node Js'
  },
  {
    id: 7,
    url: img7
    , name: 'MongoDB'
  }
    
    ,
  {
    id: 9,
    url: img9
    , name: 'Express'
  }
  //   ,
  // {
  //   id: 10,
  //   url: img10
  //   , name: 'HTML'
  // }
  //   ,
  // {
  //   id: 11,
  //   url: img11
  //   , name: 'HTML'
  // }


  ]
  return (
  
    <div className='flex  flex-col items-center justify-center pt-16 md:pt-16 ' id='Skills'>

      <div className=''><h1 className='text-center text-[25px] font-bold border-solid   text-blue-300 m-10'>Skills</h1>

        <h1 className='text-center text-[15px] font-bold border-solid   text-gray-400 p-4'>My favorite Skills</h1>
      </div>








      
      <div className='flex  flex-col  items-center  md:flex-row gap-[5rem]'>
        
        <div className=' border-solid border-blue-200 bg-blue-50 border-2 p-5 rounded-xl  w-[250px]  md:w-[320px]  ' >
          <div data-aos="fade-right" className='flex justify-center items-center  '>
            <span className='font-bold text-xl p-2 text-blue-700 md:text-2xl'> <BsBraces /> </span>
            <h1 className='font-bold text-xl  text-purple-600 md:text-2xl'>Frontend</h1>
          </div>
          <ul data-aos="zoom-in" className=' grid grid-cols-2 md:grid-cols-3'>

            {frontend.map((item) => (

              <li key={item.id}>
                <SkillsCart img={item.url} name={item.name} />
              </li>
            )
            )}
          </ul>
        </div>
        
        
        <div className=' border-solid border-blue-200 bg-blue-50 border-2 p-5 rounded-xl  w-[250px] md:w-[320px] ' >
          <div data-aos="fade-right" className='flex justify-center items-center  '>
            <span className='font-bold text-xl p-2 text-blue-700 md:text-2xl'> <BsCodeSlash /> </span>
            <h1 className='font-bold text-xl p-[1.2px] text-purple-600 md:text-2xl'>Backend</h1>
          </div>
          <ul data-aos="zoom-in" className=' grid grid-cols-2 md:grid-cols-3 '>

            {backend.map((item) => (

              <li key={item.id}>
                <SkillsCart img={item.url} name={item.name} />
              </li>
            )
            )}
          </ul>
        
        </div>
       
        </div>
    </div>
  )
}

export default skills
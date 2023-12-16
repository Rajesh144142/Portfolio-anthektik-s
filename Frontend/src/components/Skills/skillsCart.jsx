import React from 'react'
// import{BsPatchCheckFill} from'react-icons/bs'
const skillsCart = ({img,name}) => {
  return (
    // w-[60px] h-[80px] bg-blue-200 items-center	p-1 rounded-[3rem]  mb-[1rem]  hover:bg-blue-600 transition duration-500 hover:scale-125 md:w-[70px] 
    // w-[60px] h-[80px] p-3 md:w-[70px]
    <div>
    <div className='  flex flex-col justify-center  cursor-pointer text-center content-center p-3'>
    <div className='  bg-blue-200 items-center	p-3 rounded-lg  h-20 mb-2 hover:bg-blue-600 transition duration-500 hover:scale-125 ' >
    <img className='h-14 w-14' src={img} alt="Error"/>
    </div>
  <h1 className='text-center font-bold bg-gradient-to-r from-slate-500 to-slate-800 inline-block text-transparent bg-clip-text text-[10px] md:text-[11px]'>{name}</h1>
    </div>
   
    {/* <div className="">
      <h1>{heading}</h1>
      <div className='grid'>
      <h1 className='text-blue-800 p-5'><BsPatchCheckFill/></h1>
        <div className='p-4'>{skills}</div>
      </div>

    </div>
        
    </div> */}
     </div>
  )
}

export default skillsCart;
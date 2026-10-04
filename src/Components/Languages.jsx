import React from 'react'

import {img1,img2,img3} from "../assets/images/images"
// import {appstyling } from"../Style"


function Languages() {
  return (
    <>
     <section className='px-6 py-2 max-w-6xl'>
        <h1 className='font-bold text-4xl font-blue-300'>The languages that i know!</h1>
        <div className='flex gap-8 text-1xl text-gray-700 my-10 '>
            <div className='border-2  border-gold-600 rounded rounded-2xl p-3 '>Expert in python</div>
            <div className='border-2 border-gold-600 rounded rounded-2xl p-3 '>Intermediate in Java</div>
            <div className='border-2 border-gold-600 rounded rounded-2xl p-3  '>Basics at the Mysql</div>
        </div>
        
        <div>
          <h2 className=' p-2 text-3xl font-bold mb-3'>The images card</h2>
          <div className='flex gap-2'>
            <img className='w-60 rounded-2xl  bg-blue-100'  src={img1} alt="" />
            <img className='w-60 rounded-2xl' src={img2} alt="" />
            <img className='w-60 rounded-2xl text-red-200' src={img3} alt="" />
          </div>
        </div>
        {/* <p className={appstyling.textstyling }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptatibus amet, mollitia molestiae rem ut voluptatum nostrum est, quos deleniti commodi omnis! Id nisi veritatis ipsa ut accusamus eaque reiciendis?</p> */}
        
        </section> 
    </>
  )
}

export default Languages

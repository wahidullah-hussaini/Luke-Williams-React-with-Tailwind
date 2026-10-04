import React from 'react'
import { img1, img2, img3 } from "../assets/images/images"
import { appstyling } from "../Style"

const languages = [
  "Expert in Python",
  "Intermediate in Java",
  "Basics of MySQL",
];

const images = [img1, img2, img3];

function Languages() {
  return (
    <section className={appstyling.section}>
      <h1 className={appstyling.title}>The languages that I know</h1>

      <div className='flex flex-wrap gap-4 my-8'>
        {languages.map((lang) => (
          <div key={lang} className={appstyling.badge}>{lang}</div>
        ))}
      </div>

        <p className={appstyling.textstyling}>
        Programming is a tool for building useful things. Python is the language I
        know best, Java helps me understand how bigger programs are organized, and
        I am building my basics in MySQL to store and manage data. Right now I am
        learning React and Tailwind CSS to turn all of this into modern, beautiful
        websites that people can really use.
      </p>
        <div className='text-center m-auto'>
      <h2 className='text-2xl font-bold text-foreground mb-4 mt-5 '>Gallery</h2>
      <div className='flex justify-between items-center  border-gray-300 pb-5 mb-10 '>
        {images.map((img, index) => (
          <img key={index} className='w-60 h-60 rounded-card shadow-card shadow-xl bg-blue-200 ' src={img} alt="" />
        ))}
        </div>
      </div>

      
    </section>
  )
}

export default Languages
// import React from 'react'
import logo from "../assets/banner-stack.png"

export default function Hero() {
  return (

    <section className="container mx-auto mt-20 mb-20 p-5 flex flex-col md:flex-row justify-between items-center   sm:flex-col">
      <div className="space-y-10 text-center">
        <h1 className="font-bold text-5xl ">Build Your Ideal <br className="sm:block" />
 <span className="text-transparent bg-linear-to-r bg-clip-text from-purple-500 to bg-green-400">Development Stack</span></h1>
            <p>
Explore frontend, backend, database, and tooling options,<br className="sm:block" />
compare them side by side, and put together the stack that fits your <br className="sm:block" />
next project.
            </p>
            <div className="flex gap-2 sm:text-base  sm:flex-row justify-center">
                <button className="rounded-xl btn hover:bg-red-700  bg-linear-65 from-red-400 to bg-pink-400"> Explore Technologies</button>
                <button className="btn rounded-xl hover:bg-cyan-700"> Learn More</button>
              </div>
              </div>
             

          <div className="flex ">
            <img className=" " src={logo} alt="banner"/>
      </div>
     </section>
     
     
  )
}

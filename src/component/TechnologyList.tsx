// import React from 'react'

// import { type } from '../type'
import { use } from "react";
import type {TechnologyType} from "../type";
import Technology from '../component/Technology';
export interface TechnologyProps{
    technologyListPromise:Promise<TechnologyType[]>
}
export const  technologyListPromise=async():Promise<TechnologyType[]>=>{
const res=await fetch('/data.json')
const data=await res.json();
console.log(data) 
return data;
}


export default function TechnologyList({technologyListPromise}:TechnologyProps) {
    const technologyList=use(technologyListPromise);
    console.log(technologyList);
     

  return (
       <section className="container mx-auto px-5 py-10">
<h1 className="font-bold text-5xl mb-3">Explore the  <span className="text-pink-500">Technologies</span></h1>
        <p className="mb-10 text-2xl opacity-70">Pick one technology per category to build your ideal stack.</p>
        
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {
        technologyList.map((technology:TechnologyType)=>(
            <Technology key={technology.id}
                technology={technology}



                />
             
        ))
    }
      
       </div>
        
    </section>
  )
}

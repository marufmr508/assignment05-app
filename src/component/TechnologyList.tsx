   
import { use, useState } from "react";
import type {TechnologyType} from "../type";
import Technology from '../component/Technology';
import toast from "react-hot-toast"
import { CiCircleRemove } from "react-icons/ci";
 
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
const[stack ,setStack]=useState<TechnologyType[]>([])

function handleAddToChart(technology:TechnologyType):void{
    setStack((previousTechnology)=>{
                const alreadySelected = previousTechnology.some((stack)=>stack.id===technology.id);
                if(alreadySelected){
                 return previousTechnology;
                }
                
               
                
          return[...previousTechnology,technology]
})
toast.success("Stack Selected")
}
function handleRemove(id:string):void{
    setStack((previousStack)=>
                  previousStack.filter((technology)=>technology.id !==id));


}
function handleRemoveAll():void {
    setStack([]);

}
    const technologyList=use(technologyListPromise);
    console.log(technologyList);
     

  return (
       <section className=" container mx-auto px-5 py-10">
<h1 className="font-bold text-5xl mb-3">Explore the  <span className="text-pink-500">Technologies</span></h1>
        <p className="mb-10 text-2xl opacity-70">Pick one technology per category to build your ideal stack.</p>
        <div className="flex flex-col lg:flex-row gap-9  "> 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
    {
        technologyList.map((technology:TechnologyType)=>(
            <Technology key={technology.id}
                technology={technology}

handleAddToChart={handleAddToChart}

                />
             
        ))
    }
    
      
       </div>
        <div className="max-h-max w-full lg:w-100  max-w-sm border rounded-xl p-4  shadow-2xl items-center gap-5 ">
            <h1 className="  text-2xl sm:text-xl font-bold text-blue-500">Your Stack</h1>
            <p>{stack.length}  technologies selected</p>
              <div>
                {
                    stack.map((technology:TechnologyType)=>(
                        <div key={technology.id} className="flex shadow-purple-500 shadow-2xl
                           rounded-xl mt-5">
                            <div className="flex gap-3.5 pl-5 ">
                            <img className="rounded-full items-center w-12" src={technology.icon} alt={technology.name} />
                           <div className="font-bold text-xl">
                              {technology.name}
                              <div className="opacity-60 text-[12px]">
                                {technology.category}
                               
                           </div>
                           </div>
                              <button  onClick={()=>handleRemove(technology.id)} className="text-red-400 font-bold text-3xl"><CiCircleRemove /></button>

                           </div>
  
                           </div>
                         
                    
               ))}
                {stack.length > 0 && (
                    
            <button onClick={handleRemoveAll}
        className=" font-semibold hover:text-red-700 border-2 border-red-400 mx-auto mt-10 ml-20 px-3 rounded-2xl bg-linear-60 from-green-700 to from--400 text-white"
            > Remove All</button>)}

            
              </div>
            <div>

            </div>

        </div>
       </div>
        
     
        
    </section>
  )
}

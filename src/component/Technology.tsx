// import React from 'react'
import type { TechnologyType } from "../type"

interface typeCard{
technology:TechnologyType
 handleAddToChart(technology:TechnologyType):void;
 isAdded:boolean
  
}
export default function Technology({technology,handleAddToChart,isAdded}:typeCard) {
    function addToChart(){
        handleAddToChart(technology);
    }
  return (
     
       
      <div className="w-full max-w-sm rounded-xl p-4 shadow-md border-0  ">

      {/* Icon + Badge */}
      <div className="flex justify-between items-center  ">
        <img
          src={technology.icon}
          alt={technology.name}
          className="w-10 h-10"
        />

        <span className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-500">
          {technology.badge}
        </span>
      </div>

      {/* Name */}
      <h2 className="text-xl font-bold mt-4">
        {technology.name}
      </h2>

      {/* Description */}
      <p className="text-sm text-gray-500 mt-2">
        {technology.description}
      </p>

      {/* Category + Difficulty + Rating */}
      <div className="flex justify-between items-center mt-4 text-sm">

        <span className="bg-gray-100 px-2 py-1 rounded">
          {technology.category}
        </span>

        <span className="text-gray-500">
          {technology.difficulty}
        </span>

        <span>
          ⭐ {technology.rating}
        </span>

      </div>

      {/* Button */}
      <button  
      disabled={isAdded} 
      onClick={(addToChart)}
       className="w-full disabled:bg-green-500 mt-4 bg-gray-900 text-white py-2 rounded-lg hover:bg-purple-600 transition">
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>

    </div>
  )
}

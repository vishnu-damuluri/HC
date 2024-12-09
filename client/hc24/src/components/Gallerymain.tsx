import React from 'react'
import yourImage from '../assets/Screenshot 2024-11-30 154215.png';  // Adjust the path as needed

export default function Gallerymain() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 pt-8 lg:grid-cols-2 lg:gap-8">
        <div className="h-auto rounded-lg flex flex-col justify-center items-start py-8">
          <h2 className='font-bold text-left text-6xl text-amber-800'>Through<br></br>The lens of time</h2>
          <p className='text-2xl font-semibold text-gray-600 text-left mt-8'>Each photo is a piece of a larger story - a stack of memories. some memories never fade - they just wait to be revisted.</p>
        </div>

        <div className="h-auto rounded-lg bg-gray-200 flex justify-center items-center" id="image2">
          <img src={yourImage} alt="Gallery" className="w-full h-auto rounded-lg" />
        </div>
      </div>
    </div>
  )
}

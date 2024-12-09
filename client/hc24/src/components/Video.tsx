import React from 'react'
import headerVideo from '../assets/mainvdo.mp4'

export default function Video() {
  return (
    <div>
        <div className=" mt-10 min-h-auto ">
      <div className="container m-auto">
        <div className="w- z-0 relative py-10">
          <div className="w- h-full lg:mx-4 relative z-0 rounded-xl ">
            {/* Main Video */}
            <video
              className="relative z-[1] playsinline w-full h-full object-center object-cover rounded-2xl"
              preload="metadata"
              loop
              playsInline
              autoPlay
              muted
              aria-hidden="false"
              src={headerVideo} 
            ></video>

            {/* Blurred Background Video */}
            <video
              className="absolute top-0 left-0 w-full  transform-gpu translate-x-0 translate-y-0 z-0 playsinline object-center object-cover rounded-3xl blur-2xl"
              preload="none"
              loop
              playsInline
              autoPlay
              muted
              aria-hidden="true"
              src={headerVideo} 
            ></video>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

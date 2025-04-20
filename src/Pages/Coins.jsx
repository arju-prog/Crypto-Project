import React from 'react'
import vdo from "../assets/my-movie.mp4"

function Coins() {
  return (
     <div className="relative w-full h-screen overflow-hidden">
     <video
       autoPlay
       loop
       muted
       playsInline
       className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover z-[-1]"
     >
       <source src={vdo} type="video/mp4" />
       Your browser does not support the video tag.
     </video>
     

     <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center text-shadow-xl">
       <h1 className="text-5xl font-bold mb-4">Hello, World!</h1>
       <p className="text-xl">Welcome to my website!</p>
     </div>
   </div>
  )
}

export default Coins
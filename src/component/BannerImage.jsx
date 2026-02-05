import React from 'react'

import humanCoding from "../assets/images/humanCodingImage.jpg"

function BannerImage() {
  return (
 <div
       
        className="flex justify-center mt-[11rem] px-4 w-full"
      >
        <div className="w-[65%] lg:w-[25%] lg:w-[25%]  rounded-2xl overflow-hidden">
          <img
           
            className="w-full h-auto object-cover"
            src={humanCoding} alt=""
           
          />
        </div>
      </div>
  
  )
}

export default BannerImage

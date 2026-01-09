import React from 'react'

import humanCoding from "../assets/images/humanCodingImage.jpg"

function BannerImage() {
  return (
   <div className='bg_dark'>
     <div className=' banner_image_holder container w-full d-flex flex-row justify-content-center'>

<div className="image_holder ">
  {/* <img  src="https://framerusercontent.com/images/NJSwXyDlaUZn0O49iCxLH4yY.png?scale-down-to=1024" alt="" /> */}
  <img className="
        w-full
        max-w-[320px]        /* mobile */
        sm:max-w-[420px]     /* small tablets */
        md:max-w-[600px]     /* tablets */
        lg:max-w-[850px]     /* laptops */
        xl:max-w-[1024px]    /* big screens */
        h-auto
        object-contain
      "
       src={humanCoding} alt="" />
</div>

</div>
   </div>
  )
}

export default BannerImage

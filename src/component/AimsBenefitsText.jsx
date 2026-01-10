import React, { useRef } from 'react'

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger plugin


function AimsBenefitsText({ text , animation }) {

  const textParentRef = useRef()
  const textRef = useRef()

  useGSAP(() => {

    gsap.to(textRef.current, {
      duration: 0.5,
      ease: "power4.out",
      delay: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: textParentRef.current,
        // markers: true,
        start: "top 30%",
        end: "top 5%",
        scrub: 4
      }
    })

  }, { scope: textParentRef }, []);

  return (

    <div className='bg_dark text-light'>
      <div className='container w-full d-flex justify-content-center  '>
        {
          animation === true ?

          <div className='container py-5 w-75' ref={textParentRef} >

            <h2 ref={textRef}   className="
    font-intertight font-semibold text-[32px] leading-[38px] 
    sm:text-[40px] sm:leading-[45px] 
    md:text-[52px] md:leading-[58px] 
    lg:text-[64px] lg:leading-[65px] 
    tracking-[-0.02em] text-center
  ">{text}</h2>
         </div>
            :
            <div className="
    font-intertight font-semibold text-[32px] leading-[38px] 
    sm:text-[40px] sm:leading-[45px] 
    md:text-[52px] md:leading-[58px] 
    lg:text-[64px] lg:leading-[65px] 
    tracking-[-0.02em] text-center
    mt-[100px]
  ">
              <h2>{text}</h2>
            </div>
        }
      </div>
      
      </div>
  )
}

export default AimsBenefitsText

import React, { useRef } from 'react'

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger plugin


function AimsBenefitsText({ text , animation }) {

  const textParentRef = useRef()
  const textRef = useRef()

  console.log(textRef)


  useGSAP(() => {

    gsap.to(textRef.current, {
      duration: 0.5,
      ease: "power4.out",
      delay: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: textParentRef.current,
        // markers: true,
        start: "top 10%",
        end: "top 5%",
        scrub: 4
      }
    })

  }, { scope: textParentRef }, []);

  return (

    <div className='bg_dark text-light'>
      <div className='container w-full d-flex justify-content-center aims_benefit_main '>
        {
          animation === true ?

          <div className='aims_benefit_main_text ' ref={textParentRef} >

            <h2 ref={textRef} className='text-red-500' >{text}</h2>
         </div>
            :
            <div className='aims_benefit_main_text  '>
              <h2>{text}</h2>
            </div>
        }
      </div>
      
      </div>
  )
}

export default AimsBenefitsText

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger plugin

function Banner() {
  const parentRef = useRef();
  const containerRef = useRef();
  const imageRef = useRef(); // image wrapper
  const juniorRef = useRef();
  const frontendRef = useRef();
  const developerRef = useRef();
  const holds_both = useRef();
  const headingRef = useRef();

  gsap.registerPlugin(ScrollTrigger);


useGSAP(() => {
  const titles = containerRef.current.querySelectorAll(".hero-title");

  // Hero Text Animation + Pin
  gsap.fromTo(
    titles,
    {
      scale: 1,
      opacity: 1,
    },
    {
      scale: 0.8,
      opacity: 0,
      ease: "none",
      stagger: 0.08,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 10%",
        end: "bottom top", // pin ends when hero section fully scrolled
        scrub: 2,
        // markers: true,
      },
    }
  );


}, { scope: containerRef });


useGSAP(() => {
  gsap.to(imageRef.current, {
    y: -50, // jitna upar image move karna hai
    scale: 1.11, // thoda scale barhao
    ease: "none",
    scrollTrigger: {
      trigger: containerRef.current, // poora hero text wrapper
      start: "top top", // jaise hi hero section top pe aaye
      end: "bottom+=200 top", // jitna scroll me move karna hai
      scrub: 2, // smooth animation
      pin: containerRef.current, // poora hero section pin
      pinSpacing: false,
      // markers: true,
    },
  });


   gsap.from(headingRef.current, {
      y: 100,      // start 100px neeche
      opacity: 0,  // start invisible
      duration: 1.5,
      ease: "power3.out", // fast at start, slow at end
    });
}, { scope: containerRef });

  return (
    <>
      <div className="bg_dark text-light">
        <div className="container ">
          {/* HERO TITLE */}

          {/* PINNED SCROLL AREA */}
          <div
            ref={containerRef}
            className="relative flex flex-col  items-center justify-center pt-[150px] overflow-hidden"
          >
            {/* SCALE WRAPPER (ISKO SCALE KAREIN) */}
            <div className=" text-center will-change-transform hero-title">
              <h1 className=" text-[clamp(3rem,10vw,9rem)] leading-[0.75] tracking-[-0.4rem] font-bold"
               style={{ fontWeight: 600 }}
              
              >
                JUNIOR
              </h1>

              <h1 className=" text-[clamp(3rem,10vw,9rem)] leading-[0.75] tracking-[-0.3rem]"
              style={{ fontWeight: 600 }}
             
              >
                MERNSTACK
              </h1>

              <h1 className=" text-[clamp(3rem,10vw,9rem)] leading-[0.75] tracking-[-0.3rem]"
              style={{ fontWeight: 600 }}
           
              >
                DEVELOPER
              </h1>
            </div>
            <div className="w-full flex justify-center hero-title">
              <div className="flex justify-between mx-4 md:mx-48 md:space-x-20 gap-5 ">
                <p className="text-[clamp(0.875rem,2.5vw,1.25rem)] text-white mb-0">
                  DEVELOPING MODERN WEB APPLICATIONS
                </p>

                <p className="text-[clamp(0.875rem,2.5vw,1.25rem)] text-white mb-0">
                  (2024 – PRESENT)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

       <div
  ref={imageRef}
  className="banner_image_holder container w-full flex justify-center px-4"
>
  <div className="image_holder w-full flex justify-center">
    <img
      src="https://framerusercontent.com/images/NJSwXyDlaUZn0O49iCxLH4yY.png?scale-down-to=1024"
      alt=""
      className="
        w-full
        max-w-[320px]        /* mobile */
        sm:max-w-[420px]     /* small tablets */
        md:max-w-[600px]     /* tablets */
        lg:max-w-[850px]     /* laptops */
        xl:max-w-[1024px]    /* big screens */
        h-auto
        object-contain
      "
    />
  </div>
</div>
     
    </>
  );
}

export default Banner;

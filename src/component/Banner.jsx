import {  useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger plugin
import profileImage from "../assets/images/edit_profile_image.JPG";

function Banner() {


  const containerRef = useRef();
  const imageRef = useRef(); // image wrapper
  
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
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
    },
    { scope: containerRef }
  );

  useGSAP(
    () => {
      gsap.to(imageRef.current, {
        y: -50, // jitna upar image move karna hai
        scale: 1.21, // thoda scale barhao
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

    },
    { scope: containerRef }
  );

  return (
    <>
      <div className="bg_dark text-light">
        <div className="container ">
          {/* HERO TITLE */}

          {/* PINNED SCROLL AREA */}
          <div
            ref={containerRef}
            className="relative flex flex-col items-center justify-center pt-[150px] overflow-hidden"
          >
            {/* SCALE WRAPPER (ISKO SCALE KAREIN) */}
            <div className="text-center will-change-transform hero-title">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl !leading-[0.85] !sm:leading-[0.8] !md:leading-[0.8]  tracking-[-0.4rem] font-semibold">
                JUNIOR
              </h1>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl !leading-[0.85] !sm:leading-[0.8] !md:leading-[0.8]  tracking-[-0.3rem] font-semibold">
                MERNSTACK
              </h1>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl !leading-[0.85] !sm:leading-[0.8] !md:leading-[0.8]  tracking-[-0.3rem] font-semibold">
                DEVELOPER
              </h1>
            </div>

            <div className="w-full flex justify-center hero-title px-4 mt-2">
              <div className="flex flex-col md:flex-row gap-0 sm:gap-3 md:gap-5 w-50 justify-between">
                <p className="text-sm md:text-lg text-white mb-0 text-center">
                  DEVELOPING MODERN WEB APPLICATIONS
                </p>
                <p className="text-sm md:text-lg text-white mb-0 text-center">
                  (2024 – PRESENT)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={imageRef}
        className="flex justify-center mt-[5rem] lg:mt-[11rem]  px-4 w-full mb-5"
      >
        <div className="w-[45%] md:w-[35%] lg:w-[25%] rounded-2xl overflow-hidden">
          <img
            // src="https://framerusercontent.com/images/NJSwXyDlaUZn0O49iCxLH4yY.png?scale-down-to=1024"
            src={profileImage}
            alt="Profile Image"
            className="w-full h-auto object-cover "
          />
        </div>
      </div>
    </>
  );
}

export default Banner;

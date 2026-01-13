import Header from "../component/Header";
import Footer from "../component/Footer";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger plugin
import React, { useEffect, useRef } from "react";
import myWorkImage from "../assets/images/my_work.png";
import myWorkImage2 from "../assets/images/my_work_um_motors.png";

export const About = () => {
  const imagesRef = useRef(); // image wrapper

  imagesRef.current = [];

  const addToRefs = (el) => {
    if (el && !imagesRef.current.includes(el)) {
      imagesRef.current.push(el);
    }
  };
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    imagesRef.current.forEach((img) => {
      gsap.to(img, {
        y: -50,
        scale: 1.2,
        ease: "none",
        scrollTrigger: {
          trigger: img,
          start: "top 80%",
          end: "top 20%",
          scrub: 2,
          // markers: true,
        },
      });
    });
  });


    useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // ya "smooth"
    });
  }, []);

  return (
    <>
      <Header />

      <div className="bg-dark ">
        <div className="container flex flex-col justify-center items-center pt-[12rem]">
          <p className="text-white fw-bold">(2024-2025)</p>
          <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl !leading-[0.85] !sm:leading-[0.8] !md:leading-[0.8]  tracking-[-0.4rem] font-semibold">
            SELECTED
          </h1>
          <h1 className=" text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl !leading-[0.85] !sm:leading-[0.8] !md:leading-[0.8]  tracking-[-0.4rem] font-semibold">
            WORKS
          </h1>
        </div>

        <div className="pb-5">
          <div
            ref={addToRefs}
            className="flex justify-center mt-[5rem] lg:mt-[9rem]  px-4 w-full will-change-transform"
          >
            <div className=" relative w-[45%] md:w-[35%] lg:w-[55%] h-[55vh] rounded-2xl overflow-hidden transform-gpu">
              <img
                src={myWorkImage}
                alt=""
                className="w-full object-cover h-full"
              />

              {/* BLACK OVERLAY */}
              <div className="absolute inset-0 bg-black/20 flex justify-center items-end">
              
               <div className="text-center pb-5 ">

                 <h1 className="company_name  text-white fw-bold underline" >Carscrack</h1>
                 <h4 className="company_description text-white fw-bold underline ">Highly recommended for anyone looking to buy or sell a car in Pakistan!</h4>
               </div>
              
              
              </div>
            </div>
          </div>
          <div
            ref={addToRefs}
            className="flex justify-center mt-[5rem] lg:mt-[8rem]  px-4 w-full will-change-transform"
          >
            <div className=" relative w-[45%] md:w-[35%] lg:w-[55%] h-[55vh] rounded-2xl overflow-hidden transform-gpu">
              <img
                src={myWorkImage2}
                alt=""
                className="w-full object-cover h-full"
              />

              {/* BLACK OVERLAY */}
              <div className="absolute inset-0 bg-black/20 flex justify-center items-end">
              
               <div className="text-center pb-5 ">

                 <h1 className="company_name text-white fw-bold underline" >Universal motors ltd.</h1>
                 <h4 className="company_description text-white fw-bold underline" >Japanese used cars for sale shipping globally!</h4>
               </div>
              
              
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

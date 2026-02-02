import Header from "../component/Header";
import Footer from "../component/Footer";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger plugin
import React, { useEffect, useRef } from "react";
import myWorkImage from "../assets/images/my_work.png";
import myWorkImage2 from "../assets/images/my_work_um_motors.png";
import erdImage from "../assets/images/e-commerce-ERD-image.png";

export const About = () => {
  const imagesRef = useRef(); // image wrapper

  imagesRef.current = [];

  const addToRefs = (el) => {
    if (el && !imagesRef.current.includes(el)) {
      imagesRef.current.push(el);
    }
  };

  const handleViewRepo = (userClicked) => {
    if (userClicked === "first") {
      window.open("https://carscrack.com/", "_blank");
    } else if (userClicked === "second") {
      window.open("https://universalmotorsltd.com", "_blank");
    } else if (userClicked === "third") {
      window.open(
        "https://github.com/Ahmed-201/Backend-E-commerce-coza-store-copy.git",
        "_blank"
      );
    }
  };

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const mm = gsap.matchMedia();

    // md and up (≥ 768px)
    mm.add("(min-width: 768px)", () => {
      imagesRef.current.forEach((img) => {
        gsap.fromTo(
          img,
          { y: 0, scale: 1 },
          {
            y: -40,
            scale: 1.15,
            ease: "none",
            scrollTrigger: {
              trigger: img,
              start: "top 80%",
              end: "top 20%",
              scrub: 1.5,
              // markers: true,
            },
          }
        );
      });
    });

    return () => mm.revert(); // cleanup
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

      <div className="bg-[#1a1a1a]  ">
        <div className="container flex flex-col justify-center items-center pt-[6rem]">
          <p className="text-white fw-bold">(2024-PRESENT)</p>
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
            className="flex justify-center mt-[5rem] lg:mt-[9rem]  px-4  will-change-transform"
          >
            <div
              className=" relative w-[75%] lg:w-[65%] xl:w-[55%] h-[25vh] lg:h-[55vh] rounded-2xl overflow-hidden transform-gpu cursor-pointer"
              onClick={(e) => handleViewRepo("first")}
            >
              <img
                src={myWorkImage}
                alt=""
                className=" object-cover h-full w-full"
              />

              {/* BLACK OVERLAY */}
              <div className="absolute inset-0 bg-black/20 flex justify-center items-end ">
                <div className=" hidden lg:block w-full text-center px-6 py-4 bg-black/40 backdrop-blur-md ">
                  <h2 className="company_name text-white fw-bold ">
                    Carscrack
                  </h2>
                  <h4 className="text-white text-sm fw-bold">
                    Highly recommended for anyone looking to buy or sell a car
                    in Pakistan!
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div
            ref={addToRefs}
            className="flex justify-center mt-[5rem] lg:mt-[8rem]  px-4  will-change-transform"
          >
            <div
              className="relative w-[75%] lg:w-[65%] xl:w-[55%] h-[25vh]  lg:h-[55vh] rounded-2xl overflow-hidden transform-gpu cursor-pointer"
              onClick={(e) => handleViewRepo("second")}
            >
              <img src={myWorkImage2} alt="" className=" h-full w-full" />

              {/* BLACK OVERLAY */}
              <div className="absolute inset-0 bg-black/20 flex justify-center items-end">
                <div className="hidden lg:block w-full text-center px-6 py-4 bg-black/40 backdrop-blur-md">
                  <h2 className="company_name text-white fw-bold ">
                    Universal motors ltd.
                  </h2>
                  <h4 className="company_description text-white fw-bold text-sm">
                    Japanese used cars for sale shipping globally!
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div
            ref={addToRefs}
            className="flex justify-center mt-[5rem] lg:mt-[8rem]  px-4  will-change-transform"
          >
            <div
              className="relative w-[75%] lg:w-[65%] xl:w-[55%] h-[25vh]  lg:h-[55vh] rounded-2xl overflow-hidden transform-gpu cursor-pointer"
              onClick={(e) => handleViewRepo("third")}
            >
              <img src={erdImage} alt="" className=" h-full w-full" />

              {/* BLACK OVERLAY */}
              <div className="absolute inset-0 bg-black/20 flex justify-center items-end">
                <div className="hidden lg:block w-full text-center px-6 py-4 bg-black/40 backdrop-blur-md">
                  <h2 className="company_name text-white fw-bold ">
                    E-commerce ERD Design
                  </h2>
                  <h4 className="company_description text-white fw-bold text-sm">
                    Explore the project source code, including backend
                    implementation, on GitHub.
                  </h4>
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

import React from "react";
import { Link } from "react-router-dom";

function RelevantExperience() {
  const handleViewResume = () => {
    window.open(
      "https://drive.google.com/file/d/1gh2GjYGn6gvD958KPBVq4-_huQo0g7Ri/view?usp=drive_link",
      "_blank"
    );
  };

  return (
    <>
      <div className=" text-light py-16">
        <div className="container mx-auto flex flex-col items-end px-4">
          {/* Heading */}
          <div className="w-full mb-12">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.9] md:leading-[0.6]">
              RELEVANT
            </h1>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold">
              EXPERIENCE
            </h1>
          </div>

          {/* Experiences */}
          <div className="flex flex-col items-end w-full gap-12">
            <div>
              {/* Experience 1 */}
              <div className="flex flex-col gap-4">
                <div className="">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                    Kdys LAB
                  </h2>
                </div>
                <div className="flex flex-col sm:flex-row justify-between text-lg sm:text-xl font-semibold gap-2">
                  <h4>FRONTEND DEVELOPER</h4>
                  <h4>(Jan-2024 – Sep-2024)</h4>
                </div>
                <div>
                  <p className="text-[#929292] text-base sm:text-lg">
                    Built frontend UI and handled API integrations for dynamic,
                    data-driven applications.
                  </p>
                </div>
              </div>

              <hr className="border-white-700" />

              {/* Experience 2 */}
              <div className="flex flex-col gap-4 ">
                <div className="">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                    Universal Motors ltd.
                  </h2>
                </div>
                <div className="flex flex-col sm:flex-row justify-between text-lg sm:text-xl font-semibold gap-2">
                  <h4>FRONTEND DEVELOPER</h4>
                  <h4>(May 2025 – continue)</h4>
                </div>
                <div>
                  <p className="text-[#929292] text-base sm:text-lg">
                    Next.js & TypeScript development, API integration, and bug
                    fixing for the official website.
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
     <button
  type="button"
  className="
    rounded-full
    border-2 border-white
    px-6 py-2
    bg-white
    hover:bg-white
    fw-bold
  "
>
 <Link to="/about" className="no-underline text-black hover:!text-zinc-500 transition-all duration-150">
  VIEW WORK
 </Link>
</button>


                <button
                  type="button"
                  className="rounded-full border-2 border-light px-6 py-2 text-light hover:bg-light hover:!text-zinc-500 fw-bold transition"
                  onClick={handleViewResume}
                >
                  RESUME
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RelevantExperience;

import React from "react";

function RelevantExperience() {
  const handleViewResume = () => {
    window.open(
      "https://drive.google.com/file/d/1gh2GjYGn6gvD958KPBVq4-_huQo0g7Ri/view?usp=drive_link",
      "_blank"
    );
  };

  return (
    <div className="bg_dark text-light">
      <div className=" experince_main container d-flex flex-column align-items-end ">
        <div className=" container experience_heading w-full">
          <h1  style={{lineHeight:"0.4"}}>RELEVANT </h1>
          <h1 className="" >EXPERIENCE </h1>
        </div>
        <div className="d-flex flex-column experinces_main">
          <div className="experince ">
            <div className="company">
              <h2>Kdys LAB</h2>
            </div>
            <div className="time_period d-flex justify-content-between">
              <h4>FRONTEND DEVELOPER</h4>
              <h4>(Jan-2024 – Sep-2024)</h4>
            </div>
            <div className="designation">
              <p>
                Built frontend UI and handled API integrations for dynamic,
                data-driven applications.{" "}
              </p>
            </div>
          </div>

          <hr />

          <div className="experince ">
            <div className="company">
              <h2>Universal Motors ltd.</h2>
            </div>
            <div className="time_period d-flex justify-content-between">
              <h4>FRONTEND DEVELOPER</h4>
              <h4>(May 2025 – continue)</h4>
            </div>
            <div className="designation">
              <p>
                Next.js & TypeScript development, API integration, and bug
                fixing for the official website.{" "}
              </p>
            </div>
          </div>

          <div className="work_resume_btn_parent btn d-flex p-0 gap-4">
            <div className="work_resume_btn">
              <button
                type="button"
                class="btn btn-light rounded-pill border border-5"
              >
                VIEW WORK
              </button>
            </div>
            <div className="work_resume_btn">
              <button
                type="button"
                class="btn btn-light rounded-pill border border-5"
                onClick={handleViewResume}
              >
                RESUME
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RelevantExperience;

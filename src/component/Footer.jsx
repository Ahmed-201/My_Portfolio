import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin,faGithub} from "@fortawesome/free-brands-svg-icons";
import avatar from "../assets/images/avatar_image.png";

// import { fa-square-facebook} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="container-fluid main_footer">
      <div className="container flex justify-center flex-col-reverse lg:flex-row gap-[120px]  ">
        <div className="avatar">
          <div className="name ">
            <h2 className="text-center md:text-left" >MUHAMMAD AHMED</h2>
            <p className="busy_in text-center md:text-left">
              Junior Frontend Developer, currently building engaging user
              interfaces at universal motors ltd.
            </p>
          </div>
          <div className="avatar_img">
            <img src={avatar} alt="" />
          </div>
        </div>
        <div className="lets_connect d-flex flex-column  ">
          <div className="email_content d-flex flex-column">
            <div className="caption  w-1/2 sm:w-full ">
              <h4 className="font-[Inter\ Tight] font-semibold text-white text-2xl sm:text-xl">
                Think I’d be a good fit for your team or project? Let’s connect.
              </h4>
            </div>

            <div className="email_btn">
              <button
                type="button"
                class="btn btn-light rounded-pill fw-bold bg-light "
              >
                abbasiahmed201@gmail.com
              </button>
            </div>
          </div>
          <div className="projects_social gap-5">
            <div className="projects_parent d-flex flex-column gap-4">
              <div className="heading">
                <p>SELECTED PROJECTS</p>
              </div>

              <div className="project_name">
                <p>Crosby: POS Tool Launch</p>
                <p>Crosby: POS Tool Launch</p>
                <p>Crosby: Scout product launge</p>
                <p>Crosby: POS Tool Launch</p>
              </div>
            </div>
            <div className="social_parent d-flex flex-column gap-2">
              <div className="heading">
                <p>SOCIALS</p>
              </div>
              <div className="social_links d-flex flex-row gap-3">
                <div>
                  {" "}
                  <FontAwesomeIcon icon={faLinkedin} />{" "}
                  <span>
                    {" "}
                    <a
                      href="https://www.linkedin.com/in/ahmed-abbasi-0880aa2bb"
                      target="_blank" // Open in new tab
                      rel="noopener noreferrer" // Security best practice
                      className=" hover:underline text-white"
                    >
                      Linked in
                    </a>
                  </span>{" "}
                </div>
                <div>
                  <FontAwesomeIcon icon={faGithub} /> <span> <a
                      href="https://github.com/Ahmed-201"
                      target="_blank" // Open in new tab
                      rel="noopener noreferrer" // Security best practice
                      className=" hover:underline text-white"
                    >
                      Github
                    </a></span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { gsap } from "gsap";

function Header() {

  const [isTablet, setIsTablet] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  
  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= 1024);
      if (window.innerWidth > 768) setOpen(false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (open) {
      gsap.fromTo(
        menuRef.current,
        {
          y: -30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
        },
      );
    }
  }, [open]);
  return (
    <>
      {/* HEADER BAR */}
      <div className=" relative  bg-dark py-3">
        <div className="container d-flex align-items-center justify-content-between text-light">
          {/* LOGO */}
          <Link to="/" className=" text-white no-underline">
            {" "}
            <h3 className="m-0 fs-5 fw-semibold">MUHAMMAD AHMED</h3>
          </Link>

          {/* DESKTOP LINKING (REMOVED ON TABLET) */}
          {!isTablet && (
            <div className="d-flex align-items-center justify-content-between flex-grow-1 ms-5">
              {/* ABOUT / WORK */}
              <div className="d-flex gap-4">
                <Link
                  to="/"
                  className="hover:underline text-white no-underline"
                >
                  <h5 className="m-0 fs-6 ">ABOUT</h5>
                </Link>
                <h5 className="m-0 fs-6">
                  <Link
                    to="/about"
                    className="hover:underline text-white no-underline"
                  >
                    WORK
                  </Link>
                </h5>
              </div>

              {/* CONNECT */}
              <div className="d-flex align-items-center gap-3">
                <h5 className="m-0 fs-6">LETS CONNECT</h5>
                <button className="btn btn-light rounded-pill px-4 fw-bold">
                  abbasiahmed201@gmail.com
                </button>
              </div>
            </div>
          )}

          {/* HAMBURGER (TABLET & MOBILE) */}
          {isTablet && (
            // <button
            //   className="btn btn-outline-light"
            //   onClick={() => setOpen(!open)}
            // >
            //   <FontAwesomeIcon icon={faBars} />
            // </button>

            
       <button
      className="relative w-6 h-6 flex items-center justify-center"
      onClick={() => setOpen(!open)} >
      {/* Line 1 */}
      <span
        className={`absolute block h-0.5 w-6 bg-white  transition-transform duration-300
        ${open ? "rotate-45" : "translate-y-1"} `}
      ></span>

      {/* Line 2 */}
      <span
        className={`absolute block h-0.5 w-6 bg-white  transition-transform duration-300
        ${open ? "-rotate-45" : "-translate-y-1"} `}
      ></span>
    </button>
          )}
        </div>

        {/* MOBILE / TABLET MENU */}
        {isTablet && open && (
          <div
            className="absolute absolute top-full w-full bg-[black] text-light py-4 z-50 h-[75vh] "
            ref={menuRef}
          >
            <div className="container d-flex flex-col gap-3 text-center w-50 pt-[100px]">
              <div className="border-b pb-3 flex flex-col items-center">
                <Link
                  to="/"
                  className="hover:underline text-white no-underline"
                >
                  <h1 className="text-7xl fw-bold ">ABOUT</h1>
                </Link>
                <h1 className="text-7xl fw-bold">
                  <Link
                    to="/about"
                    className="hover:underline text-white no-underline"
                  >
                    WORK
                  </Link>
                </h1>
              </div>

              <p className="fw-bold mb-0">LET'S CONNECT</p>
              <button
                type="button"
                className="
    w-full
    max-w-md
    px-4 md:px-6 lg:px-8
    py-2 md:py-3
    bg-white
    text-black
    font-bold
    rounded-full
    text-sm md:text-base lg:text-lg
    truncate
    text-center
    transition-all
    hover:bg-gray-200
  "
              >
                abbasiahmed201@gmail.com
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;

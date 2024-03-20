// import React, { useState } from "react";
import facebook from "../image/facebook.png";
import twitter from "../image/R (2).png";
import insta from "../image/pngkey.com-insta-icon-png-2831746.png";
import linkedin from "../image/linkedin-icon-logo-png-transparent.png";
import logo from "../image/logo.png";
import home from "../image/home1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
function Sign() {
  // const [open, setOpen] = useState(false);
  // setOpen(!open);

  return (
    <>
      <div className=" bg-gradient-to-r from-color1 via-color2 to-color3 h-[1000px]  w-[1270px] md:h-[600px] md:w-[1536px]">
        <div className="bg-black py-10 md:py-6 w-[1270px] md:w-[1536px]">
          <div className="flex">
            <h5
              className=" text-white md:mr-[300px] md:ml- 
                ml-[160px] font-medium
                
            }
            "
            >
              Contact Us &gt;
            </h5>
            <ul className="flex ml-4 gap-8 md:flex md:ml-96 md:gap-2 justify-around">
              <li>
                <img className="h-3 w-3  md:h-6 md:w-6" src={facebook}></img>
              </li>
              <li>
                <img className="h-3 w-3 md:h-6 md:w-6" src={twitter}></img>
              </li>
              <li>
                <img className="h-3 w-3 md:h-6 md:w-6" src={insta}></img>
              </li>
              <li>
                <img className="h-3 w-3 md:h-6 md:w-6" src={linkedin}></img>
              </li>
              <li>
                <FontAwesomeIcon
                  className="text-red-700 w-4 h-3 md:w-8 md:h-6"
                  icon={faYoutube}
                />
              </li>
            </ul>
          </div>
        </div>
        <nav>
          <ul
            className="flex gap-10
            md:gap-10 "
          >
            <li>
              <img
                className=" flex md:h-20 md:w-20 md:ml-40 md:mt-5 h-20 w-20 ml-40 mt-5"
                src={logo}
              ></img>
            </li>

            <li>
              <input
                className="bg-gradient-to-b from-slate-200 to-slate-500 md:py-4 md:flex md:rounded-3xl md:shadow-lg md:ml-16 md:border md:outline-none md:h-9 md:w-72 md:mt-10 md: placeholder:text-black py-4 flex rounded-3xl shadow-lg ml-16 border outline-none h-9 w-72 mt-10 placeholder:text-black"
                type="text"
                placeholder="search"
              ></input>
            </li>

            <li className="mt-11 md:mt-11 text-white">
              Explore &nbsp;
              <FontAwesomeIcon icon={faCaretDown} />
            </li>
            <li className="mt-11 md:mt-11 text-white">
              Virtual Learning &nbsp;
              <FontAwesomeIcon icon={faCaretDown} />
            </li>
            <li className="mt-11 md:mt-11 text-white">
              Course &nbsp;
              <FontAwesomeIcon icon={faCaretDown} />
            </li>
            <li className="mt-11 md:mt-11 text-white">
              Resources &nbsp;
              <FontAwesomeIcon className="" icon={faCaretDown} />
            </li>
            <li className="mt-11 md:mt-11 text-white">
              About Us &nbsp;
              <FontAwesomeIcon icon={faCaretDown} />
            </li>
            <li className="mt-11 md:mt-11 text-white">Login |</li>
            <li>
              <button className="bg-white md:rounded-3xl  md:border md:outline-none md:h-8 md:w-24 md:mt-10 md:mr-5 rounded-3xl  border outline-none h-8 w-24 mt-10 mr-5">
                Demo
              </button>
            </li>
          </ul>

          <img
            className="md:h-[320px] md:w-[400px] md:mt-14 md:ml-20 h-[520px] w-[700px] mt-20 ml-20"
            src={home}
          ></img>
        </nav>
      </div>
    </>
  );
}

export default Sign;

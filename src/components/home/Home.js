import React from "react";
import group from "../../assests/manpreet.jpg";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { contactsData } from "../../utils/data/contactsData";
import linkedin from "../../assests/icons/linkedin.svg";
import github from "../../assests/icons/github.svg";
import xtwitter from "../../assests/icons/x_twitter.svg";
import { RoundedCorner } from "@mui/icons-material";
function Home() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <div className="bg-[#222222] left-0 right-0 relative z-10 px-4 flex lg:flex-row lg:justify-around  flex-col gap-y-12 items-center py-20 ">
      <div className="">
        <div className=" text-white text-base font-normal font-['Helvetica'] uppercase leading-loose tracking-[3px] mb-2">
          Portfolio
        </div>
        <div>
          <div className=" text-white text-7xl tracking-tighter font-extrabold font-['Helvetica'] leading-[80px] mb-2">
            I’m Here <br />
            To Build Your <br />
            Dream Project
          </div>
        </div>
        <div className=" max-w-[470px]  text-white  text-base font-normal font-['Helvetica'] leading-loose">
          Web Design, UI-UX Design, Web Development & Coding. Powered by Passion. Connected by
          Collaboration.
        </div>
        <div className="flex flex-row py-6 gap-x-4 items-center">
          <div
            className="cursor-pointer w-9 h-9 hover:scale-110 transition duration-300 ease-in-out"
            onClick={() => openInNewTab(contactsData.linkedIn)}
          >
            <img src={linkedin} alt="Linkedin"/>
          </div>
          <div
            className="cursor-pointer w-9 h-9 hover:scale-110 transition duration-300 ease-in-out"
            onClick={() => openInNewTab(contactsData.github)}
          >
            <img src={github} alt="Github" />
          </div>
          <div
            className="cursor-pointer w-9 h-9 hover:scale-110 transition duration-300 ease-in-out"
            onClick={() => openInNewTab(contactsData.twitter)}
          >
            <img src={xtwitter} alt="Twitter"/>
          </div>
        </div>
        <div className="flex flex-row w-full gap-x-4">
          <a
            role="button"
            target="_blank"
            rel="noopener noreferrer"
            href={contactsData.resume}
            className="bg-[#222222] rounded-md text-white text-base font-semibold font-['Helvetica'] capitalize py-2 cursor-pointer flex flex-row items-center justify-center hover:scale-105 transition ease-in-out duration-300 px-4"
            style={{ border: "2px solid #ffffff" }}
          >
            View Resume
          </a>
          <NavLink to="/contact">
            <button
              className="text-white rounded-md text-base font-semibold font-['Helvetica'] leading-loose uppercase cursor-pointer text-center py-2 border hover:scale-105 transition ease-in-out duration-300 px-4"
              style={{ border: "2px solid #e64072" }}
            >
              Contact Me
            </button>
          </NavLink>

        </div>
      </div>
      <div className=" ">
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            delay: 0,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          border={RoundedCorner}
          src={group}
          alt="Logo"
          className=" w-[360px] h-[440px] rounded-2xl"
        />
      </div>
    </div>
  );
}

export default Home;

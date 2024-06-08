import React from "react";
import dev from "../../assests/dev.png";
import prog from "../../assests/prog.png";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Skills_Slider from "../skill_slider/base";
import { heading } from "../../utils/data/webData";
function Skills() {
  return (
    <div className="bg-[#EFF1F3] left-0 right-0 relative flex flex-col items-center z-10 px-4 py-20 ">
      <div className=" text-center text-[#e64072] tracking-tighter text-[36px] font-extrabold font-['Helvetica'] uppercase mb-4 glow">
        Skills
      </div>
      <div className=" text-center text-[#e64072] text-[28px] font-extrabold font-['Helvetica'] tracking-tighter glow">
        How I Can Help You With...
      </div>
      <div className=" w-full my-10">
        <Skills_Slider />
      </div>
      <div className="flex lg:flex-row  lg:justify-around flex-col items-center gap-y-10 w-11/12 py-10">
        <NavLink to="/skill">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "anticipate", duration: 0.2 }}
            className="box1 rounded-tl-md rounded-md border bg-[#f678a7] hover:bg-[#222222] text-black hover:text-white flex flex-col items-start p-5 max-w-[500px] font-['Helvetica'] transition ease-in-out duration-300"
          >
            <div className="flex flex-row justify-start items-center mb-2">
              <img src={dev} className="w-12 h-12 mr-4" />
              <div className="Design text-2xl font-bold  leading-loose tracking-tight">
                Development
              </div>
            </div>
            <div className="AgencyIsABusiness text-opacity-60 text-base font-normal  leading-loose mb-2">
              {heading.webtitle}
            </div>
          </motion.div>
        </NavLink>
        <NavLink to="/skill">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "anticipate", duration: 0.2 }}
            className="box1 rounded-tl-md rounded-md border bg-[#f678a7] hover:bg-[#222222] text-black hover:text-white flex flex-col items-start p-5 max-w-[500px] font-['Helvetica'] transition ease-in-out duration-300"
          >
            <div className="flex flex-row justify-start items-center mb-2">
              <img src={prog} className="w-12 h-12 mr-4" />
              <div className="Design text-orange-950 text-2xl font-bold leading-loose tracking-tight">
                Programming
              </div>
            </div>
            <div className="AgencyIsABusiness  text-orange-950 text-opacity-60 text-base font-normal leading-loose mb-2">
              {heading.progtitle}
            </div>
          </motion.div>
        </NavLink>
      </div>
    </div>
  );
}

export default Skills;

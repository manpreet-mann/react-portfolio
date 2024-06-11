import React, { useEffect } from "react";
import { data } from "../utils/data/webData";
function SkillsPage() {
  // const openInNewTab = (url) => {
  //   window.open(url, "_blank", "noreferrer");
  // };
  useEffect(() => {
    // scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-white pb-32 pt-20 flex flex-col items-center relative z-10 font-['Helvetica'] ">
      <div className="text-[#e64072] text-[40px] font-extrabold tracking-tighter pb-20">
        What I know...
      </div>
      {/* skills demonstration */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-content-center w-10/12 gap-x-8 gap-y-16  ">
        {data.map((item, index) => {
          return (
            <div
              className="flex flex-col bg-[#FFD9D9] rounded-md px-4 py-4 transition duration-300 ease-in-out hover:bg-[#e64072] hover:text-white text-black hover:scale-105"
              key={index}
            >
              <img src={item.image} className="w-12 h-12" alt="skills Heading"/>
              <div className="font-bold tracking-tighter text-[22px]">
                {item.heading}
              </div>
              <div className="text-[16px] font-normal leading-loose tracking-wide">
                {item.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SkillsPage;

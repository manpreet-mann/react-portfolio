import React, { useEffect } from "react";
import { projectsData } from "../utils/data/projectsData";
import github from "../assests/projects/github.svg";
import web from "../assests/projects/web.svg";
import { contactsData } from "../utils/data/contactsData";

function P_page() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <div className="bg-white flex flex-col items-center font-['Helvetica']">
        <div className="w-full grid grid-cols-1">
          {/* Header */}
          <div className="flex flex-col items-center py-20 gap-y-4">
            <div className="text-black tracking-tighter font-extrabold text-[20px] uppercase text-center">
              Explore my Techstack
            </div>
            <div className="text-[#e64072] tracking-tighter font-extrabold text-[50px] uppercase text-center">
              My Major Projects
            </div>
            <div className="tracking-wider w-6/12 text-center">
              Explore a showcase of my latest projects built with cutting-edge
              technologies and diverse programming languages...
            </div>
          </div>

          {/* Projects Data */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 py-12">
            {projectsData.map((data, index) => (
              <div key={index} className="p-4 rounded-lg shadow-lg bg-[#6b6b6b] text-white">
                <div className="p-4 flex justify-center items-center mb-4 rounded-md overflow-hidden">
                  <img
                    src={data.image}
                    alt={data.name}
                    className="w-full h-auto rounded-md"
                  />
                </div>
                <div className="text-[24px] text-[#E7ECEF] font-extrabold leading-[32px] mb-2">
                  {data.name}
                </div>
                <div className="flex flex-row gap-x-4 py-2">
                  <img
                    src={github}
                    width={24}
                    height={24}
                    className="cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
                    onClick={() => openInNewTab(data.code)}
                  />
                  <img
                    src={web}
                    width={24}
                    height={24}
                    className="cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
                    onClick={() => openInNewTab(data.demo)}
                  />
                </div>
                <div className="text-lg leading-loose mb-2">
                  <span className="font-semibold tracking-tight text-[#E7ECEF]">
                    Techstack Used:
                  </span>{" "}
                  <div className=" text-[#E7ECEF] text-base tracking-wider break-all">
                    {data.tools.map((tool, id) => (
                      <span key={id}>
                        {tool}{id !== data.tools.length - 1 && ", "}
                      </span>
                    ))}
                  </div>
                </div>
                <div className=" text-[#E7ECEF] text-base italic leading-loose">
                  {data.description}
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex flex-col items-center py-32 gap-y-10 bg-[#FFD9D9]">
            <div className="text-[#e64072] tracking-tighter font-extrabold text-[30px] uppercase">
              My Major Projects
            </div>
            <div className="tracking-wider w-6/12 text-center">
              Dive into my GitHub profile to discover a variety of innovative projects. See how I’ve transformed unique ideas into functional and exciting applications!
            </div>
            <button
              className="bg-[#e64072] rounded-sm text-center text-[#FFD9D9] text-sm font-black capitalize tracking-tight px-10 py-4 transition duration-300 ease-in-out hover:text-white hover:scale-x-110 hover:tracking-wide"
              onClick={() => openInNewTab(contactsData.github)}
            >
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default P_page;

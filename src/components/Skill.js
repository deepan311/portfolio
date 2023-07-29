import React from "react";
import SkillBg from "../asset/SkillBg.svg";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs, IoLogoPython } from "react-icons/io";
import { SiTailwindcss,SiMongodb } from "react-icons/si";
import { BiLogoDjango } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
function Skill() {
  const weblist = [
    { name: "React JS", percentage: "90%", icon: <FaReact /> },
    { name: "TailWind CSS", percentage: "90%", icon: <SiTailwindcss /> },
    { name: "Node JS", percentage: "70%", icon: <IoLogoNodejs /> },
    { name: "Mongo DB", percentage: "70%", icon: <SiMongodb /> },
    { name: "Django PY", percentage: "10%", icon: <BiLogoDjango /> },
  ];

  const programList = [
    { name: "Javascript", percentage: "95%", icon: <RiJavascriptFill /> },
    { name: "Python", percentage: "80%", icon: <IoLogoPython /> },
    { name: "OOPS ", percentage: "90%", icon: null },
    { name: "DSA", percentage: "40%", icon: null },
  ];

  return (
    <div
      className="  "
      style={{
        backgroundImage: `url(${SkillBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="grid grid-cols-2 w-full relative px-1 md:px-5  pt-28 py-8">
        <div className="absolute left-0 right-0  top-8 flex justify-center   text-white font-bold">
          <h3 className="bg-black/80 px-10 font-mono py-3 text-xl rounded-lg text-center w-38">
            What I Know..?
          </h3>{" "}
        </div>
        <div className="col-span-2 lg:col-span-1 my-2">
          <div className="md:mx-3 text-black rounded-lg bg-gradient-to-br from-blue-950/30 to-blue-800/30 p-5 shadow-2xl">
            <h3 className="text-2xl text-gray-950 font-bold text-center">
              Web Technology
            </h3>
            {weblist.map((item) => (
              <div className="flex items-center my-5 bg-gray-50 px-2 py-4 rounded-lg shadow-lg font-bold text-xl">
                <div className=" px-2 ">{item.icon}</div>
                <div className="text-start text-sm md:text-lg">
                  <h3>{item.name}</h3>
                </div>
                <div className="flex-grow h-1 p-1 rounded-xl flex items-center mx-4 bg-gray-800 ">
                  <div
                    className="bg-white rounded-lg  h-1"
                    style={{ width: item.percentage }}
                  />
                </div>
                <div className="">
                  <h3 className="text-sm font-mono">{item.percentage}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-2 lg:col-span-1 my-2">
          <div className="md:mx-3 text-black rounded-lg bg-gradient-to-br from-blue-950/30 to-blue-800/30 p-5 shadow-2xl">
            <h3 className="text-2xl text-gray-950 font-bold text-center">
             Programming
            </h3>
            {programList.map((item) => (
              <div className="flex items-center my-5 bg-gray-50 px-2 py-4 rounded-lg shadow-lg font-bold text-xl">
                <div className=" px-2 ">{item.icon}</div>
                <div className="text-start text-sm md:text-lg">
                  <h3>{item.name}</h3>
                </div>
                <div className="flex-grow h-1 p-1 rounded-xl flex items-center mx-4 bg-gray-800 ">
                  <div
                    className="bg-white rounded-lg  h-1"
                    style={{ width: item.percentage }}
                  />
                </div>
                <div className="">
                  <h3 className="text-sm font-mono">{item.percentage}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <h3 className="font-mono text-sm mx-4 text-gray-600 text-center py-7">Now Learning About DSA Full Concepts and Django web framwork</h3>
    </div>
  );
}

export default Skill;

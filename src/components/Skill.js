import React from "react";
import { FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoNodejs, IoLogoPython } from "react-icons/io";
import { SiTailwindcss, SiMongodb, SiLeetcode, SiRedux } from "react-icons/si";
import { BiLogoDjango } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { AiTwotoneApi } from "react-icons/ai";
import { SiThealgorithms } from "react-icons/si";
import { MdStarPurple500 } from "react-icons/md";
import { PiFileSqlDuotone } from "react-icons/pi";
import { VscJson } from "react-icons/vsc";
import Language from "./Language";
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

  const skill = [
    { head: "PROGRAMMING LANGUAGE", topic: [{ name: "Java", Logo: FaJava }, { name: "JavaScript", Logo: RiJavascriptFill }, { name: "Python", Logo: IoLogoPython },] },
    {
      head: "FRAMWORKS & TECHNOLOGIES", topic: [{
        name: "React JS", Logo: FaReact
      },
      { name: " Node JS", Logo: IoLogoNodejs },
      { name: " Tailwind CSS", Logo: SiTailwindcss },
      { name: " React Native", Logo: TbBrandReactNative },
      { name: " REST API", Logo: AiTwotoneApi },
      ]
    },

    {
      head: "PROBLEM SOLVING",
      topic: [{
        name: "Data Structure & Algorithm", Logo: SiThealgorithms
      },
      { name: "Solved LeetCode Problems", Logo: SiLeetcode },
      ]
    },

    {
      head: "FORNTEND DEVELOPMENT",
      topic: [{
        name: "HTML & CSS", Logo: FaHtml5
      },
      { name: "React", Logo: FaReact },
      { name: "Redux", Logo: SiRedux },
      ]
    },
    {
      head: "DATABASE",
      topic: [{
        name: "SQL", Logo: PiFileSqlDuotone
      },
      { name: "NO SQL", Logo: VscJson },
      { name: "Mongo DB", Logo: SiMongodb  },
      ]
    },
  ]

  return (
<div className="flex-col">


    <div className="bg-white p-4 rounded-lg max-w-[500px] shadow-lg shadow-white/10 hover:shadow-white/25 cursor-pointer">

      <h3 className="text-black font-bold text-xl">SKILL'S</h3>
      {skill.map((item => (
        <h3 className="text-black text-sm my-5 font-semibold flex-wrap flex items-center"><MdStarPurple500 className="text-yellow-600 mr-1" /> {item.head} | {item.topic.map((It, index) => (<><span className="font-normal px-2 flex items-center"> {<It.Logo className="mr-1" />} {It.Logo == null && "•  "}  {It.name}</span> </>))} </h3>
      )))}

     
    </div>
    <Language />
      
</div>

  );
}



// const oldStyle =  (<div
//   className="  "
//   style={{
//     backgroundImage: `url(${SkillBg})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//   }}
// >
//   <div className="grid grid-cols-2 w-full relative px-1 md:px-5  pt-28 py-8">
//     <div className="absolute left-0 right-0  top-8 flex justify-center   text-black font-bold">
//       <h3 className="jonh-font bg-white hover:bg-gray-300 px-10 font-mono py-3 text-xl rounded-full text-center w-38">
//         What I Know..?
//       </h3>{" "}
//     </div>
//     <div className="col-span-2 lg:col-span-1 my-2">
//       <div className="md:mx-3 text-black rounded-md bg-gradient-to-br from-orange-900 to-blue-800 p-5 " style={{boxShadow: '0px 2px 4px 0px rgba(93,93,93,0.75'}}>
//         <h3 className="text-2xl text-gray-50 font-bold text-center">
//           Web Technology
//         </h3>
//         {weblist.map((item) => (
//           <div className="flex items-center my-5 bg-gray-50 hover:bg-gray-300 px-2 py-4 rounded-lg shadow-lg font-bold text-xl">
//             <div className=" px-2 ">{item.icon}</div>
//             <div className="text-start text-sm md:text-lg">
//               <h3>{item.name}</h3>
//             </div>
//             <div className="flex-grow h-1 p-1 rounded-xl flex items-center mx-4 bg-gray-800 ">
//               <div
//                 className="bg-white rounded-lg  h-1"
//                 style={{ width: item.percentage }}
//               />
//             </div>
//             <div className="">
//               <h3 className="text-sm font-mono">{item.percentage}</h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>

//     <div className="col-span-2 lg:col-span-1 my-2">
//       <div className="md:mx-3 text-black rounded-lg bg-gradient-to-br to-orange-900 from-blue-800 p-5 shadow-2xl" style={{boxShadow: '0px 2px 5px 0px rgba(93,93,93,0.75'}}>
//         <h3 className="text-2xl text-white font-bold text-center">
//          Programming
//         </h3>
//         {programList.map((item) => (
//           <div className="flex items-center my-5 bg-gray-50 hover:bg-gray-300 px-2 py-4 rounded-lg shadow-lg font-bold text-xl">
//             <div className=" px-2 ">{item.icon}</div>
//             <div className="text-start text-sm md:text-lg">
//               <h3>{item.name}</h3>
//             </div>
//             <div className="flex-grow h-1 p-1 rounded-xl flex items-center mx-4 bg-gray-800 ">
//               <div
//                 className="bg-white rounded-lg  h-1"
//                 style={{ width: item.percentage }}
//               />
//             </div>
//             <div className="">
//               <h3 className="text-sm font-mono">{item.percentage}</h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
//   <h3 className="jonh-font text-sm mx-4 text-white text-center py-7">Now Learning About DSA Full Concepts and Django web framwork</h3>
// </div>)

export default Skill;

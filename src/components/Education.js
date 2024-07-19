import React from "react";
import EducationBg from "../asset/SkillBg.svg";
import Fathima from "../asset/Fathima.png";
import Prist from "../asset/Prist.png";
import Pattukottai from "../asset/Pattukottai.png";

import { FiArrowUpRight } from "react-icons/fi";

function Education() {
  const eduList = [
    {
      name: "Currently, I am pursuing my final year of B.E. in Computer Science.",
      image: Prist,
      description:
        "P.R.Engineering College,Vallam Thanjavur ",
      visit: "https://goo.gl/maps/F7fmggzmcjtmzQvNA",
    },

    {
      name: " I completed my HSS (Higher Secondary School) in 2020 ",
      image: Pattukottai,
      description: "Pattukottai Alagiri Matriculation Higher Secondary School, Papanasam",
      visit: "https://goo.gl/maps/ZHterTP28uGwHj8r5",
    },
    {
      name: "I completed my SSLC (Secondary School Leaving Certificate) in 2018.",
      image: Fathima,
      description:
        "Fathima Matriculation higher secondary School, Kovilur  ",
      visit: "https://goo.gl/maps/KrVax4aZFrt81NMu5",
    },
  ];

  const opensite = (link) => {
    window.open(link, "_blank");
  };
  return (
    <div
      className="relative py-28 lg:px-20"
      style={{
        backgroundImage: `url(${EducationBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute left-10 top-8 flex justify-center   shadow-sm shadow-white/40 text-black font-bold">
        <h3 className="text-white px-10 font-mono py-3 text-xl rounded-sm jonh-font text-center w-38">
          EDUCATION INFO
        </h3>{" "}
      </div>
      <div className="grid  gap-2 grid-cols-3 p-3">
        {eduList.map((item) => (
          <div onClick={()=>{opensite(item.visit)}} className="cursor-pointer flex shadow-2xl col-span-3 relative  md:col-span-1 bg-white  rounded-lg overflow-hidden text-black">
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/80 transition duration-800 opacity-0 hover:opacity-100 text-white flex justify-center items-center"> Visit the Location</div>
            <img src={item.image} className="w-32 h-full object-cover" alt="" />
            <div> <h3 className="px-3 p-2 font-bold">{item.name}</h3>
              <h3 className="px-3 p-2 text-sm">{item.description}</h3>

            </div>

          </div>

        ))}
      </div>
    </div>
  );
}

export default Education;

{/* <div
className={` shadow-2xl col-span-3 relative  md:col-span-1 bg-white  rounded-lg overflow-hidden text-black`}
>
<img
  src={item.image}
  className="w-full  object-cover h-64 shadow-inner"
  alt="projectImg"
/>
<div className="absolute bg-gradient-to-t from-blue-900/30 to-orange-300/30 top-0 h-64 left-0 right-0" />
<h3 className="text-2xl font-bold p-2">{item.name}</h3>
<hr className="mx-2" />
<p className="text-sm text-gray-600 px-2 py-2">
  {item.description}
</p>
<hr className="mx-2 my-3" />
<div className="flex justify-between w-full ">
  <button
    onClick={() => {
      opensite(item.visit);
    }}
    className=" flex items-center relative bg-black/80 hover:bg-black/70 px-7 w-full pr-10 text-white py-2 m-2 rounded-lg"
  >
    Visit <FiArrowUpRight className="absolute right-3 text-xl " />
  </button>
</div>
</div> */}

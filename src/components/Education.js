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
      className="relative py-28 "
      style={{
        backgroundImage: `url(${EducationBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
     <div className="absolute left-0 right-0  top-8 flex justify-center   text-white font-bold">
        <h3 className="bg-black/80 px-10 font-mono py-3 text-xl rounded-lg text-center w-38">
          Education
        </h3>{" "}
      </div>
      <div className="grid gap-2 grid-cols-3 p-3">
        {eduList.map((item) => (
          <div
            className={` shadow-2xl col-span-3 md:col-span-2 lg:col-span-1 bg-white  rounded-lg overflow-hidden text-black`}
          >
            <img
              src={item.image}
              className="w-full object-cover h-64 shadow-inner"
              alt="projectImg"
            />
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;

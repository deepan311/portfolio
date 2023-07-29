import React from "react";
import ProjectBg from "../asset/ProjectBg.svg";
import Project1 from "../asset/Project1.png";
import Project2 from "../asset/Project2.png";
import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

function Projects() {
  const ProjectList = [
    {
      name: "Authentication",
      image: Project1,
      description:
        " This Project is fully authetication page. Register, log functionality through Google Account SignIn and Verfiy Link Sendyour Mail Id and reset Password future",
        githubLink:'https://github.com/deepan311/Full-Auth',
        visitLink:'https://deep-full-auth.vercel.app'
    },
    {
        name: "Sample",
        image: Project2,
        description:
          `This Project Nothing But, Only Focus on design part Only`,
          githubLink:'https://github.com/deepan311/gauge-project-1',
          visitLink:'https://gauge-project-1.vercel.app/'
      },
    
  ];

  const gitOpen = (link)=>{
    window.open(link,'_blank')
}
  return (
    <div
      className="relative"
      style={{
        backgroundImage: `url(${ProjectBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute left-0 right-0  top-8 flex justify-center   text-white font-bold">
        <h3 className="bg-black/80 px-10 font-mono py-3 text-xl rounded-lg text-center w-38">
          Project's
        </h3>{" "}
      </div>

      <div className="w-full grid gap-6 grid-cols-12 pt-28 p-3 ">
        {/* Card */}

        {ProjectList.map((item) => (
          <div className={` shadow-2xl col-span-12 md:col-span-6  ${ProjectList.length < 3 ? 'lg:col-span-6 lg:mx-28' : 'lg:col-span-4'} bg-white  rounded-lg overflow-hidden text-black`}>
            <img
              src={item.image}
              className="w-full object-cover h-52 shadow-inner"
              alt="projectImg"
            />
            <h3 className="text-2xl font-bold p-2">{item.name}</h3>
            <hr className="mx-2" />
            <p className="text-sm text-gray-600 px-2 py-2">
              {item.description}
            </p>
            <hr className="mx-2 my-3" />
            <div className="flex justify-between w-full ">
              <button onClick={()=>{gitOpen(item.githubLink)}} className=" flex items-center relative bg-black/80 hover:bg-black/70 px-7 pr-10 text-white py-2 m-2 rounded-lg">
                GitHub <FaGithub className="absolute right-3 text-xl " />
              </button>
              <button onClick={()=>{gitOpen(item.visitLink)}} className="flex items-center relative hover:bg-blue-500 bg-blue-600 px-8 pr-10 text-white font-bold py-2 m-2 rounded-lg">
                Visit <FiArrowUpRight className="absolute right-3 text-xl " />
              </button>
            </div>
          </div>
        ))}
      </div>
      <h3 className="font-mono text-sm mx-4 text-gray-600 text-center py-7">In the future, I believe I will work on good and big projects</h3>

    </div>
  );
}

export default Projects;

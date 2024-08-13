import React, { useState } from "react";
import ProjectBg from "../asset/ProjectBg.svg";
import Project1 from "../asset/Project1.png";
import Project2 from "../asset/Project2.png";
import Dchat from "../asset/Dee-Chat.png";
import Uthvee from "../asset/Uthvee-Image.png"
import PortFolio from "../asset/Porfolio-making.png"
import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

function Projects() {

  const [shownImg, setshownImg] = useState({url:"",status:false});
  const ProjectList = [
    {
      name: "Food Donate “Mobile Application” (Final Year Project)",
      image: Uthvee,
      description:
        "This application facilitated communication between food donors and the hunger community. The app also enabled nearby orphanages to contact donors and arrange food collection",
      githubLink: null,
      visitLink: null
    },
    {
      name: "Web Chat Application (MERN - Stack)",
      image: Dchat,
      description:
        " I have developed a fully responsive web chat application usingReact JS, Redux, Node.js -Express JS, MongoDB, and WebSocket.io.",
      githubLink: 'https://github.com/deepan311/DeeChat',
      visitLink: 'https://dee-chat-app.onrender.com/'
    },
    {
      name: "PortFolio Marker (Web Application)",
      image: PortFolio,
      description:
        `It is a portfolio web application I've created recently. Anyone can submit their details and create their own portfolio in my site. I used React, Node js to develop this.`,
      githubLink: 'https://github.com/deepan311/Folio',
      visitLink: "https://d-portfolio-p95f.onrender.com/deepan"
    },


  ];

  const gitOpen = (link) => {
    window.open(link, '_blank')
  }
  return (
    <div
      className="relative min-h-[100vh]"
      style={{
        backgroundImage: `url(${ProjectBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute left-6   top-8 flex justify-center    font-bold">
        <h3 className=" px-10 text-slate-700 shadow-sm shadow-black/40  jonh-font py-3 text-xl  text-center w-38">
          TECHNICAL PROJECT'S
        </h3>{" "}
      </div>

      <div className="w-full grid gap-6 grid-cols-12 pt-28 p-3 ">
        {/* Card */}

        {ProjectList.map((item) => (
          <div className={`shadow-sm shadow-black/30 col-span-12 md:col-span-6 ${ProjectList.length < 3 ? 'lg:col-span-6 lg:mx-28' : 'lg:col-span-4'} bg-white  rounded-lg overflow-hidden text-black`}>
            <img
              src={item.image}
              onClick={()=>setshownImg({status:true,url:item.image})}
              className="w-full cursor-pointer object-center object-cover  shadow-inner"
              alt="projectImg"
            />
            <h3 className="text-2xl font-bold p-2">{item.name}</h3>
            <hr className="mx-2" />
            <p className="text-sm text-gray-600 px-2 py-2">
              {item.description}
            </p>
            <hr className="mx-2 my-3" />
            {
              item?.githubLink != null && (
                <div className="flex justify-between w-full ">

                    <button onClick={() => { gitOpen(item?.githubLink) }} className=" flex items-center relative bg-black/80 hover:bg-black/70 px-7 pr-10 text-white py-2 m-2 rounded-md">
                      GitHub <FaGithub className="absolute right-3 text-xl " />
                    </button>
                    <button onClick={() => { gitOpen(item?.visitLink) }} className="flex items-center relative hover:bg-blue-500 bg-blue-600 px-8 pr-10 text-white font-bold py-2 m-2 rounded-md">
                      Visit <FiArrowUpRight className="absolute right-3 text-xl " />
                    </button>
                 

                </div>
              )
            }
          </div>
        ))}
      </div>
      {/* <h3 className="jonh-font absolute left-0 right-0 bottom-9 text-sm mx-4 text-gray-900 text-center ">In the future, I believe I will work on good and big projects</h3> */}


{/* Show Image */}


{
  shownImg.status && (
    <div onClick={()=>setshownImg({status:false,url:""})} className="fixed top-0 flex justify-center items-center left-0 bottom-0 right-0 w-full lg:p-20 p-3 z-50  h-full bg-black/50 ">
      <img src={shownImg.url} alt="projectImg" className="w-full object-cover" />
    <div className="absolute flex justify-center bottom-10 left-0 right-0">
    <button className=" bg-white shadow-black text-black shadow-sm w-10 h-10 rounded-full font-mono">
    X
     </button>
    </div>
    </div>
  )
 
}
    </div>
  );
}

export default Projects;

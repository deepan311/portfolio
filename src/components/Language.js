import React from "react";

import { MdStarPurple500 } from "react-icons/md";

function Language() {


    const skill = [
        {
            head: "English", topic: [
                "Read",
                "Write",
                "Conversation level",
            ]
        },
        {
            head: "Tamil", topic: [
                "Read",
                "Write",
                "Mother tong",
            ]
        },


    ]

    return (

        <div className="bg-white p-4 my-5 rounded-lg max-w-[500px] shadow-lg shadow-white/10 hover:shadow-white/25 cursor-pointer">

            <h3 className="text-black font-bold text-xl">LANGUAGE KNOWN</h3>
            {skill.map((item => (
                <h3 className="text-black text-sm my-5 font-semibold flex-wrap flex items-center"><MdStarPurple500 className="text-yellow-600 mr-1" /> {item.head} --{item.topic.map((It, index) => (<><span className="font-normal px-2 flex items-center">   • {It}</span> </>))} </h3>
            )))}


        </div>

    );
}

export default Language;

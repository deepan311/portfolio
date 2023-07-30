import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ImSpinner2 } from "react-icons/im";

import Bg from "../asset/bg.svg";

function Contact() {
  const form = useRef();

  const [load, setload] = useState(false);
  const [msg, setmsg] = useState({ msg: "", active: true, color: "" });

  const sendEmail = async (e) => {
    e.preventDefault();

    if (
      e.target.from_name.value.length < 1 ||
      e.target.user_email.value.length < 1 ||
      e.target.message.value.length < 1
    ) {
      setmsg({ msg: "Enter Valid Form", active: true, color: "bg-red-500" });
      return;
    }

    setload(true);


    emailjs
      .sendForm(
        "service_kzpm3pd",
        "template_jpgh3l6",
        form.current,
        "K9cWLzEWscHcxHr3L"
      )
      .then(
        (result) => {
          console.log(result.text);
          setmsg({
            msg: "Mail send Successfully",
            active: true,
            color: "bg-green-500",
          });
          setload(false);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setmsg({ msg: error, active: true, color: "bg-red-500" });
          setload(false);
        }
      );
  };

  if (msg.active) {
    setTimeout(() => {
      setmsg({ msg: "", active: false, color: "" });
    }, 5000);
  }

  return (
    <>
      

      <div
        className="relative py-10 "
        style={{
          backgroundImage: `url(${Bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

{msg.active && (
        <div
          class={`${msg.color} border-l-4 absolute rounded mx-auto top-8 w-3/4 md:w-1/2 right-0 left-0 border-white px-2 text-white p-4`}
          role="alert"
        >
          <p class="font-bold">{msg.msg}</p>
          {/* <p>{msg.msg}</p> */}
        </div>
      )}
        <h3 className="text-4xl font-bold text-white text-center">
          Contact Mail
        </h3>

        <div className="w-full px-10 lg:px-48">
          <form ref={form} action="" onSubmit={sendEmail}>
            <input
              name="from_name"
              type="text"
              className="w-full h-10 outline-none px-2 rounded-lg my-4 text-black py-2 "
              placeholder="Name"
            />
            <input
              name="user_email"
              type="email"
              className="w-full h-10 outline-none px-2 rounded-lg my-4 text-black py-2"
              placeholder="Email"
            />
            <textarea
              name="message"
              type="text"
              className="w-full h-20 max-h-48 overflow-auto outline-none px-2 rounded-lg my-4 text-black py-2"
              placeholder="Type Message"
            />
            <button
              type="submit"
              value="Send"
              className="w-full bg-red-500 py-2 rounded-lg flex justify-center items-center"
            >
              {" "}
              {load ? (
                <ImSpinner2 className="text-xl animate-spin" />
              ) : (
                "Send Mail"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;

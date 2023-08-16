import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdMenuOpen } from "react-icons/md";
import { IoMdCloseCircle, IoMdMail } from "react-icons/io";
import { FaClipboardList, FaGithub } from "react-icons/fa";
import main from "../asset/Main.png";
import Bg from "../asset/bg.svg";
import { BsLinkedin } from "react-icons/bs";

function Home({ scroll }) {
  const [nav, setnav] = useState(false);
  const open = (link) => {
    window.open(link, "_blank");
  };

  const listItem = (
    <>
      <h3
        onClick={() => {
          scroll("home");
          setnav(false);
        }}
        className="py-8 lg:p-3 lg:px-6 lg:rounded-lg cursor-pointer hover:bg-white/20"
      >
        Home
      </h3>
      <h3
         onClick={() => {
          scroll("skill");
          setnav(false);
        }}
        className="py-8 lg:p-3 lg:px-6 lg:rounded-lg cursor-pointer hover:bg-white/20"
      >
        Skill
      </h3>
      <h3
         onClick={() => {
          scroll("project");
          setnav(false);
        }}
        className="py-8 lg:p-3 lg:px-6 lg:rounded-lg cursor-pointer hover:bg-white/20"
      >
        Project
      </h3>
      <h3
        onClick={() => {
          scroll("education");
          setnav(false);
        }}
        className="py-8 lg:p-3 lg:px-6 lg:rounded-lg cursor-pointer hover:bg-white/20"
      >
        Education
      </h3>
      <h3
         onClick={() => {
          scroll("contact");
          setnav(false);
        }}
        className="py-8 lg:p-3 lg:px-6 lg:rounded-lg cursor-pointer hover:bg-white/20"
      >
        Contact
      </h3>
    </>
  );
  return (
    <div
      className=" w-auto h-[50rem]  relative  bg-gradient-to-bl "
      style={{ backgroundImage: `url(${Bg})`, backgroundSize: "cover" }}
    >
      <nav className=" shadow-xl w-full h-16  fixed z-50 top-0 bg-black/80  flex justify-between px-7 lg:px-16 items-center">
        <p className="text-3xl text-red-500 font-bold">D</p>
        <div className="block  lg:hidden">
          {nav ? (
            <IoMdCloseCircle
              onClick={() => setnav(false)}
              className="text-3xl cursor-pointer  text-white"
            />
          ) : (
            <MdMenuOpen
              className="text-white text-3xl cursor-pointer"
              onClick={() => setnav(true)}
            />
          )}
        </div>

        <div className={`hidden lg:block text-white gap-12`}>
          <div className="flex">{listItem}</div>
        </div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: nav ? "auto" : 0 }}
          className={`absolute lg:hidden overflow-hidden right-0 left-0 top-16 bg-black/90 text-white gap-12`}
        >
          <div className="flex-col text-center ">{listItem}</div>
        </motion.div>
      </nav>

      <div className=" flex flex-col py-10  justify-center z-10 h- items-center lg:items-start lg:px-16">
        <svg
          className="md:w-[400px] w-[300px] z-10"
          viewBox="0 0 508 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M250.79 243.98C252.377 243.98 255.597 242.883 260.45 240.69C261.477 242.183 262.247 243.91 262.76 245.87C260.193 247.457 257.673 248.693 255.2 249.58C252.773 250.42 251.047 250.84 250.02 250.84C244.373 250.84 240.08 249.277 237.14 246.15C234.247 243.023 232.8 238.59 232.8 232.85C232.8 227.063 234.247 222.42 237.14 218.92C240.033 215.373 244.327 213.6 250.02 213.6C254.547 213.6 258 215.07 260.38 218.01C262.76 220.95 263.95 224.777 263.95 229.49C263.95 230.47 263.39 231.59 262.27 232.85L242.11 232.5C242.203 236.233 242.903 239.08 244.21 241.04C245.517 243 247.71 243.98 250.79 243.98ZM249.39 219.41C247.617 219.41 245.96 219.76 244.42 220.46C243.347 222.7 242.67 224.777 242.39 226.69C246.03 226.55 250.16 226.457 254.78 226.41C254.547 221.743 252.75 219.41 249.39 219.41ZM287.1 239.5L289.69 229.07L293.4 220.11C291.814 219.83 289.854 219.223 287.52 218.29L288.15 214.44H305.58C306.654 216.587 307.19 218.617 307.19 220.53C305.37 220.81 303.55 220.997 301.73 221.09C300.797 224.217 298.954 229.047 296.2 235.58C293.494 242.113 291.674 246.92 290.74 250H281.71L270.58 221.16L265.12 220.53C265.12 218.617 265.657 216.587 266.73 214.44H284.16L284.79 218.29C282.877 219.177 281.267 219.783 279.96 220.11L283.32 229L285.77 239.5H287.1ZM327.899 243.98C329.486 243.98 332.706 242.883 337.559 240.69C338.586 242.183 339.356 243.91 339.869 245.87C337.303 247.457 334.783 248.693 332.309 249.58C329.883 250.42 328.156 250.84 327.129 250.84C321.483 250.84 317.189 249.277 314.249 246.15C311.356 243.023 309.909 238.59 309.909 232.85C309.909 227.063 311.356 222.42 314.249 218.92C317.143 215.373 321.436 213.6 327.129 213.6C331.656 213.6 335.109 215.07 337.489 218.01C339.869 220.95 341.059 224.777 341.059 229.49C341.059 230.47 340.499 231.59 339.379 232.85L319.219 232.5C319.313 236.233 320.013 239.08 321.319 241.04C322.626 243 324.819 243.98 327.899 243.98ZM326.499 219.41C324.726 219.41 323.069 219.76 321.529 220.46C320.456 222.7 319.779 224.777 319.499 226.69C323.139 226.55 327.269 226.457 331.889 226.41C331.656 221.743 329.859 219.41 326.499 219.41ZM358.89 197.99C359.776 197.99 360.336 198.013 360.57 198.06C360.57 200.487 360.266 202.61 359.66 204.43C359.613 207.323 359.543 211.407 359.45 216.68C359.263 228.253 359.123 237.12 359.03 243.28L364.49 243.91C364.49 245.823 363.953 247.853 362.88 250H345.45L344.82 246.15C347.713 245.077 349.813 244.377 351.12 244.05L349.79 205.2C347.596 204.967 345.753 204.617 344.26 204.15C344.26 202.423 344.423 200.743 344.75 199.11C347.503 198.363 352.216 197.99 358.89 197.99ZM384.224 219.2C382.544 219.2 380.631 219.62 378.484 220.46C377.878 221.393 377.294 223.05 376.734 225.43C376.221 227.763 375.964 230.12 375.964 232.5C375.964 236.887 376.618 240.013 377.924 241.88C379.231 243.7 381.331 244.61 384.224 244.61C387.164 244.61 389.288 243.7 390.594 241.88C391.901 240.013 392.554 236.84 392.554 232.36C392.554 227.833 391.878 224.52 390.524 222.42C389.218 220.273 387.118 219.2 384.224 219.2ZM384.224 213.6C389.684 213.6 394.071 215.28 397.384 218.64C400.744 221.953 402.424 226.597 402.424 232.57C402.424 238.497 400.768 243.023 397.454 246.15C394.141 249.277 389.731 250.84 384.224 250.84C378.718 250.84 374.308 249.277 370.994 246.15C367.728 243.023 366.094 238.497 366.094 232.57C366.094 226.597 367.751 221.953 371.064 218.64C374.378 215.28 378.764 213.6 384.224 213.6ZM425.74 250.84C423.034 250.84 420.187 249.953 417.2 248.18C417.107 253.127 417.06 256.86 417.06 259.38L422.52 260.01C422.52 262.063 421.984 264.093 420.91 266.1H403.48L402.85 262.25C405.837 261.13 407.937 260.43 409.15 260.15L407.82 221.3C405.627 221.113 403.784 220.763 402.29 220.25C402.29 218.523 402.454 216.843 402.78 215.21C404.74 214.79 409.08 214.417 415.8 214.09C416.174 214.697 416.594 215.723 417.06 217.17C421.914 214.79 425.11 213.6 426.65 213.6C431.27 213.6 434.7 215.233 436.94 218.5C439.18 221.72 440.3 226.06 440.3 231.52C440.3 236.98 439.04 241.577 436.52 245.31C434.047 248.997 430.454 250.84 425.74 250.84ZM417.62 223.33L417.34 241.04C418.414 242.02 419.674 242.883 421.12 243.63C422.614 244.33 423.874 244.68 424.9 244.68C429.007 244.68 431.06 240.737 431.06 232.85C431.06 229.91 430.757 227.553 430.15 225.78C429.59 224.007 428.914 222.77 428.12 222.07C427.374 221.323 426.487 220.95 425.46 220.95C423.407 220.95 420.794 221.743 417.62 223.33ZM459.901 243.98C461.488 243.98 464.708 242.883 469.561 240.69C470.588 242.183 471.358 243.91 471.871 245.87C469.305 247.457 466.785 248.693 464.311 249.58C461.885 250.42 460.158 250.84 459.131 250.84C453.485 250.84 449.191 249.277 446.251 246.15C443.358 243.023 441.911 238.59 441.911 232.85C441.911 227.063 443.358 222.42 446.251 218.92C449.145 215.373 453.438 213.6 459.131 213.6C463.658 213.6 467.111 215.07 469.491 218.01C471.871 220.95 473.061 224.777 473.061 229.49C473.061 230.47 472.501 231.59 471.381 232.85L451.221 232.5C451.315 236.233 452.015 239.08 453.321 241.04C454.628 243 456.821 243.98 459.901 243.98ZM458.501 219.41C456.728 219.41 455.071 219.76 453.531 220.46C452.458 222.7 451.781 224.777 451.501 226.69C455.141 226.55 459.271 226.457 463.891 226.41C463.658 221.743 461.861 219.41 458.501 219.41ZM497.752 221.16C497.658 220.927 497.192 220.81 496.352 220.81C495.512 220.81 494.065 221.44 492.012 222.7C491.825 231.847 491.708 238.707 491.662 243.28L497.122 243.98C497.122 245.987 496.585 247.993 495.512 250H478.082L477.452 246.15C480.345 245.077 482.445 244.377 483.752 244.05L482.982 221.37C480.555 221.183 478.525 220.833 476.892 220.32L477.382 215.28C478.642 214.72 483.192 214.347 491.032 214.16C491.452 214.58 491.662 215.397 491.662 216.61C495.768 214.603 498.358 213.6 499.432 213.6C500.552 213.6 501.905 213.88 503.492 214.44C505.125 214.953 506.362 215.513 507.202 216.12V217.31C507.202 221.137 506.735 224.683 505.802 227.95C505.008 228.277 503.958 228.44 502.652 228.44C501.345 228.44 500.132 228.37 499.012 228.23C498.872 227.623 498.452 225.267 497.752 221.16Z"
            fill="white"
          />
          <path
            d="M253.79 182.98C255.377 182.98 258.597 181.883 263.45 179.69C264.477 181.183 265.247 182.91 265.76 184.87C263.193 186.457 260.673 187.693 258.2 188.58C255.773 189.42 254.047 189.84 253.02 189.84C247.373 189.84 243.08 188.277 240.14 185.15C237.247 182.023 235.8 177.59 235.8 171.85C235.8 166.063 237.247 161.42 240.14 157.92C243.033 154.373 247.327 152.6 253.02 152.6C257.547 152.6 261 154.07 263.38 157.01C265.76 159.95 266.95 163.777 266.95 168.49C266.95 169.47 266.39 170.59 265.27 171.85L245.11 171.5C245.203 175.233 245.903 178.08 247.21 180.04C248.517 182 250.71 182.98 253.79 182.98ZM252.39 158.41C250.617 158.41 248.96 158.76 247.42 159.46C246.347 161.7 245.67 163.777 245.39 165.69C249.03 165.55 253.16 165.457 257.78 165.41C257.547 160.743 255.75 158.41 252.39 158.41ZM289.61 182.98C291.197 182.98 294.417 181.883 299.27 179.69C300.297 181.183 301.067 182.91 301.58 184.87C299.014 186.457 296.494 187.693 294.02 188.58C291.594 189.42 289.867 189.84 288.84 189.84C283.194 189.84 278.9 188.277 275.96 185.15C273.067 182.023 271.62 177.59 271.62 171.85C271.62 166.063 273.067 161.42 275.96 157.92C278.854 154.373 283.147 152.6 288.84 152.6C293.367 152.6 296.82 154.07 299.2 157.01C301.58 159.95 302.77 163.777 302.77 168.49C302.77 169.47 302.21 170.59 301.09 171.85L280.93 171.5C281.024 175.233 281.724 178.08 283.03 180.04C284.337 182 286.53 182.98 289.61 182.98ZM288.21 158.41C286.437 158.41 284.78 158.76 283.24 159.46C282.167 161.7 281.49 163.777 281.21 165.69C284.85 165.55 288.98 165.457 293.6 165.41C293.367 160.743 291.57 158.41 288.21 158.41ZM329.141 189.84C326.434 189.84 323.587 188.953 320.601 187.18C320.507 192.127 320.461 195.86 320.461 198.38L325.921 199.01C325.921 201.063 325.384 203.093 324.311 205.1H306.881L306.251 201.25C309.237 200.13 311.337 199.43 312.551 199.15L311.221 160.3C309.027 160.113 307.184 159.763 305.691 159.25C305.691 157.523 305.854 155.843 306.181 154.21C308.141 153.79 312.481 153.417 319.201 153.09C319.574 153.697 319.994 154.723 320.461 156.17C325.314 153.79 328.511 152.6 330.051 152.6C334.671 152.6 338.101 154.233 340.341 157.5C342.581 160.72 343.701 165.06 343.701 170.52C343.701 175.98 342.441 180.577 339.921 184.31C337.447 187.997 333.854 189.84 329.141 189.84ZM321.021 162.33L320.741 180.04C321.814 181.02 323.074 181.883 324.521 182.63C326.014 183.33 327.274 183.68 328.301 183.68C332.407 183.68 334.461 179.737 334.461 171.85C334.461 168.91 334.157 166.553 333.551 164.78C332.991 163.007 332.314 161.77 331.521 161.07C330.774 160.323 329.887 159.95 328.861 159.95C326.807 159.95 324.194 160.743 321.021 162.33ZM357.842 189.84C353.875 189.84 350.795 189.023 348.602 187.39C346.455 185.757 345.382 183.003 345.382 179.13C345.382 175.443 346.665 172.433 349.232 170.1C350.725 168.747 352.802 167.953 355.462 167.72C358.122 167.487 361.785 167.37 366.452 167.37V166.25C366.452 163.403 365.985 161.327 365.052 160.02C364.165 158.667 362.578 157.99 360.292 157.99C359.125 157.99 358.075 158.223 357.142 158.69L355.462 164.78L350.282 164.64C349.115 162.867 348.485 160.043 348.392 156.17C349.325 155.703 351.518 155.003 354.972 154.07C358.425 153.09 360.642 152.6 361.622 152.6C366.662 152.6 370.325 153.65 372.612 155.75C374.898 157.803 376.042 161.093 376.042 165.62C376.042 170.1 375.832 176.027 375.412 183.4C378.072 183.633 380.125 184.03 381.572 184.59C381.618 185.15 381.642 185.827 381.642 186.62L381.572 188.16C378.212 189.28 374.828 189.84 371.422 189.84C370.535 189.84 369.882 189.817 369.462 189.77C368.762 188.37 368.342 186.69 368.202 184.73H367.852C366.965 185.57 365.402 186.643 363.162 187.95C360.968 189.21 359.195 189.84 357.842 189.84ZM354.342 179.55C354.342 181.09 354.808 182.233 355.742 182.98C356.722 183.68 357.818 184.03 359.032 184.03C360.245 184.03 361.692 183.493 363.372 182.42C365.052 181.3 366.405 180.297 367.432 179.41L367.082 172.97C363.395 173.157 360.618 173.507 358.752 174.02C355.812 174.627 354.342 176.47 354.342 179.55ZM405.726 152.6C410.393 152.6 413.776 153.743 415.876 156.03C417.976 158.317 419.026 161.513 419.026 165.62C419.026 169.727 418.793 175.28 418.326 182.28L423.856 182.91C423.856 184.823 423.319 186.853 422.246 189H404.816L404.186 185.15C406.379 184.263 408.409 183.563 410.276 183.05C410.136 177.683 409.996 173.18 409.856 169.54C409.716 165.853 409.366 163.357 408.806 162.05C408.246 160.743 407.009 160.09 405.096 160.09C402.203 160.09 399.613 160.603 397.326 161.63C397.279 163.637 397.139 166.927 396.906 171.5C396.719 176.027 396.603 179.62 396.556 182.28L402.016 182.91C402.016 184.823 401.479 186.853 400.406 189H382.976L382.346 185.15C384.679 184.263 386.779 183.563 388.646 183.05C388.599 180.25 388.436 176.377 388.156 171.43C387.923 166.483 387.783 162.82 387.736 160.44C386.009 160.253 384.166 159.903 382.206 159.39L382.556 154.35C385.823 153.463 389.509 153.02 393.616 153.02C394.129 153.347 394.829 154.35 395.716 156.03C397.303 155.237 399.239 154.467 401.526 153.72C403.813 152.973 405.213 152.6 405.726 152.6Z"
            fill="white"
          />
          <path
            d="M27 270V117.6L24 93.6H163.2C179.4 93.6 191.8 95.6 200.4 99.6C209.2 103.6 215.3 109.6 218.7 117.6C222.1 125.4 223.8 135.2 223.8 147V216.3C223.8 228.3 222.1 238.3 218.7 246.3C215.5 254.1 209.5 260 200.7 264C192.1 268 179.6 270 163.2 270H27ZM66.6 241.2H160.8C176.2 241.2 184 234.1 184.2 219.9V143.4C184.2 137.6 182.5 132.7 179.1 128.7C175.7 124.5 169.6 122.4 160.8 122.4H66.6V241.2Z"
            fill="#E34343"
          />
        </svg>
        <div className=" w-full z-10 flex gap-12 my-5 flex-col  justify-center items-center ">
          <h3 className="lg:text-4xl text-3xl text-center  w-[20rem] md:w-[30rem]  text-white font-bold">
            I'm <span className="text-red-500">Deepan</span> Becoming FullStack
            developer{" "}
          </h3>
          <h3 className="text-white/50 px-5 lg:w-1/3 text-center jonh-font font-medium  text-[12px] lg:text-sm">
            I'm computer science student with a strong passion for web
            development and programming.
          </h3>

          <button
            onClick={() => {
              scroll("project");
            }}
            className="shadow-md py-3 relative items-center text-md text-white font-bold px-8 pr-16 bg-red-500 rounded-lg"
          >
            Project's{" "}
            <span className="px-2 rounded-r-lg w-12 bg-gray-50/20 absolute flex items-center h-full justify-center top-0 bottom-0 right-0">
              <FaClipboardList className="text-white text-xl font-bold" />
            </span>
          </button>
        </div>

        {/* CONTACT-------- */}
      </div>
      <div className="hidden absolute top-10 left-0 z-0 lg:flex justify-center lg:justify-end right-0">
        <img
          src={main}
          alt=""
          className="w-[500px] lg:opacity-100 opacity-30 "
        />
      </div>

      <div className="flex gap-12 items-center absolute left-0 justify-center lg:justify-start lg:px-20 right-0 bottom-10">
        <div
          onClick={() => scroll("contact")}
          className="text-white/40 hover:text-red-500 cursor-pointer flex flex-col items-center"
        >
          <IoMdMail className="text-white hover:text-red-500 text-2xl font-semibold" />
          <h3 className=" text-sm font-semibold">Mail</h3>
        </div>
        <div
          onClick={() => {
            open("https://www.linkedin.com/in/deepan-raj-9615641bb/");
          }}
          className="text-white/40  hover:text-red-500 cursor-pointer flex flex-col items-center"
        >
          <BsLinkedin className="text-white hover:text-red-500 text-xl font-semibold" />
          <h3 className=" text-sm font-semibold">Linked In</h3>
        </div>
        <div
          onClick={() => open("https://github.com/deepan311")}
          className="text-white/40  hover:text-red-500 cursor-pointer flex flex-col items-center"
        >
          <FaGithub className="text-white hover:text-red-500 text-2xl font-semibold" />
          <h3 className=" text-sm font-semibold">GitHub</h3>
        </div>
      </div>
    </div>
  );
}

export default Home;

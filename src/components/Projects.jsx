import React from "react";
import Devshed from "../assets/devshed.jpg";
import Chat from "../assets/chat.jpg";
import Portfolio from "../assets/port.jpg";
import Bookstore from "../assets/bookstore.jpg";
import Anime from "../assets/anime-2.jpg";

const Projects = () => {
  return (
    <div name="projects" className="w-full md:h-screen text-gray-300  bg-[#0a192f] mt-12 ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600  ">
            Projects
          </p>
          <p className="py-4"> // Check out my projects</p>
        </div>

        {/* Cards Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* DevShed Project "Grid Item" */}
          <div
            style={{ backgroundImage: `url(${Devshed})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider ">
                DEVSHED
              </span>
              <div className="pt-8 text-center">
              <a href="https://devshed.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/fidanmova/Final_Project">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    {" "}
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Chat App Project "Grid Item" */}
          <div
            style={{ backgroundImage: `url(${Portfolio})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider ">
                Portfolio
              </span>
              <div className="pt-8 text-center">
              <a href="https://fidanportfolio.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/fidanmova/Portfolio-React">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    {" "}
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Portfolio on React  */}
          <div
            style={{ backgroundImage: `url(${Chat})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider ">
                Chat
              </span>
              <div className="pt-8 text-center">
                <a href="https://chat-j1bt.onrender.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/fidanmova/Mern-Chat-App">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    {" "}
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Bookstore -4 */}
          <div
            style={{ backgroundImage: `url(${Bookstore})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider ">
                Bookstore
              </span>
              <div className="pt-8 text-center">
              <a href="https://github.com/fidanmova/BookStore-backend">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/fidanmova/BookStore-backend">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    {" "}
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Anime*/}
          <div
            style={{ backgroundImage: `url(${Anime})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider ">
                Anime
              </span>
              <div className="pt-8 text-center">
                <a href="https://anime-app-gamma.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/fidanmova/Anime-App">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    {" "}
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Project-6 */}
          <div
            // style={{ backgroundImage: `url(${Portfolio})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider ">
                Lorem
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    {" "}
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
  );
};

export default Projects;

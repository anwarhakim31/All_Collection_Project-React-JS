import React from "react";
import image from "../assets/home-img.png";
import { Link } from "react-scroll";

export const Home = () => {
  return (
    <section id="home" className="pt-28  lg:pt-20">
      <div className="container">
        <div className="flex flex-wrap ">
          <div className="home-content w-full self-center px-4 lg:w-1/2">
            <h1 className="text-primary font-semibold lg:text-xl">
              Halo Semua 🖐
              <span className="font-medium block text-4xl text-dark mt-1 lg:text-6xl">
                Saya Anwar Hakim
              </span>
            </h1>
            <h2 className="font-medium text-slate-700 lg:mt-4 lg:text-2xl">
              Frontend{" "}
              <span className="text-primary font-medium">Web Developer</span>
            </h2>
            <p className="my-5">
              Saya Mahasiswa Universitas Indraprasta PGRI semester 8
            </p>
            <Link
              to="home"
              className="bg-primary py-2 px-8 rounded-full text-white font-semibold text-base shadow-md shadow-slate-500 hover:opacity-80 transition"
            >
              Hubungi Saya
            </Link>
          </div>
          <div className="home-img w-full self-end lg:w-1/2 ">
            <div className="mt-10 relative lg:right-0">
              <img
                src={image}
                alt="Home Image"
                className="max-w-full mx-auto "
              />
              <div className="absolute -bottom-4 -z-10  right-0 ">
                <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  width={500}
                  height={500}
                >
                  <path
                    fill="#14b8a6"
                    d="M33.7,-15.2C40.8,10.9,41.8,34.8,27.5,47.5C13.2,60.2,-16.3,61.6,-35.5,47.9C-54.7,34.2,-63.6,5.3,-55.9,-21.5C-48.3,-48.3,-24.1,-73.1,-5.4,-71.3C13.3,-69.6,26.6,-41.3,33.7,-15.2Z"
                    transform="translate(100 100) scale(1.3)"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

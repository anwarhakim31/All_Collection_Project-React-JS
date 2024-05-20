import React from "react";
import { Link } from "react-scroll";

export const Footer = () => {
  return (
    <footer className="py-12  bg-sky-950">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3  gap-12">
          <div className="logo">
            <Link
              to="home"
              className="text-white font-semibold text-2xl cursor-pointer"
            >
              Anwar Hakim.
            </Link>
            <h3 className="font-bold mt-4 text-slate-300">Hubungi Kami</h3>
            <p className="w-full text-slate-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              cupiditate.
            </p>
          </div>

          <div className="Tautan lg:justify-self-center">
            <h2 className="text-white font-semibold text-lg ">Tautan</h2>
            <div className="flex flex-col mt-4">
              <Link to="home" className="w-full text-slate-300 ">
                Home
              </Link>
              <Link to="about" className="w-full text-slate-300 ">
                Tentang Saya
              </Link>
              <Link to="client" className="w-full text-slate-300 ">
                Client
              </Link>
              <Link to="project" className="w-full text-slate-300 ">
                Project
              </Link>
              <Link to="blog" className="w-full text-slate-300  ">
                Blog
              </Link>
              <Link to="contact" className="w-full text-slate-300 ">
                Contact
              </Link>
            </div>
          </div>
          <div className="Kategori lg:justify-self-center">
            <h2 className="text-white font-semibold text-lg ">
              Katergori Tulisan
            </h2>

            <p className="w-full text-slate-300 mt-4">Full Stack</p>
            <p className="w-full text-slate-300">Frontend Web Developer</p>
            <p className="w-full text-slate-300">Backend Web Developer</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

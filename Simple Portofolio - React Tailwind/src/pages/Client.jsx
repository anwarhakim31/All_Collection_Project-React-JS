import React from "react";
import Tokopedia from "../assets/client/Tokopedia.svg";
import Gojek from "../assets/client/Gojek_logo_2019.svg";
import tiket from "../assets/client/Tiket.com_(2017).svg";

export const Client = () => {
  return (
    <section id="client" className="py-24 bg-sky-950">
      <div className="container">
        <div className="header text-center mb-16">
          <h3 className="font-bold text-primary text-lg">Client</h3>
          <h1 className="font-bold text-white text-4xl">
            Yang Pernah Bekerjasama
          </h1>
          <p className="max-w-xl mx-auto mt-4 text-slate-100">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            tenetur blanditiis officia minus fuga perspiciatis expedita. Facere
            provident voluptatibus similique?
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          <a
            href=""
            className="max-w-[120px] mx-4 my-4 grayscale opacity-60 transition-all duration-300 ease-in-out hover:grayscale-0 hover:opacity-100"
          >
            <img src={Tokopedia} alt="Tokopedia" />
          </a>
          <a
            href=""
            className="max-w-[120px] mx-4 my-4 grayscale opacity-60 transition-all duration-300 ease-in-out hover:grayscale-0 hover:opacity-100"
          >
            <img src={Gojek} alt="Tokopedia" />
          </a>
          <a
            href=""
            className="max-w-[120px] mx-4 my-4 grayscale opacity-60 transition-all duration-300 ease-in-out hover:grayscale-0 hover:opacity-100"
          >
            <img src={tiket} alt="Tokopedia" />
          </a>
          <a
            href=""
            className="max-w-[120px] mx-4 my-4 grayscale opacity-60 transition-all duration-300 ease-in-out hover:grayscale-0 hover:opacity-100"
          >
            <img src={Tokopedia} alt="Tokopedia" />
          </a>
        </div>
      </div>
    </section>
  );
};

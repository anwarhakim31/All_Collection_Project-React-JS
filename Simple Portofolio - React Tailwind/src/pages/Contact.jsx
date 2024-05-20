import React from "react";

export const Contact = () => {
  return (
    <section id="contact" className="pb-20">
      <div className="container">
        <div className="header text-center mb-16">
          <h3 className="font-bold text-primary text-lg">Contact</h3>
          <h1 className="font-bold text-dark text-4xl">Hubungi Kami</h1>
          <p className="max-w-xl mx-auto mt-4 text-slate-700">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            tenetur blanditiis officia minus fuga perspiciatis expedita. Facere
            provident voluptatibus similique?
          </p>
        </div>
        <form className="max-w-xl w-full mx-auto">
          <div className="mb-4">
            <label
              htmlFor="nama"
              className="font-semibold text-primary mb-2 block"
            >
              Nama :
            </label>
            <input
              id="nama"
              type="text"
              className="px-4 py-2 w-full bg-slate-400 outline-offset-2 outline-teal-500 rounded-sm shadow-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="font-semibold text-primary mb-2 block"
            >
              Email :
            </label>
            <input
              id="email"
              type="email"
              className="px-4 py-2 w-full bg-slate-400 outline-offset-2 outline-teal-500 rounded-sm shadow-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="pesan"
              className="font-semibold text-primary mb-2 block"
            >
              Pesan :
            </label>
            <textarea
              id="pesan"
              className="px-4 py-2 w-full bg-slate-400 outline-offset-2 outline-teal-500 rounded-sm shadow-md h-48"
            />
          </div>
          <button
            type="submit"
            className="text-center w-full bg-primary text-white rounded-full py-2"
          >
            Kirim
          </button>
        </form>
      </div>
    </section>
  );
};

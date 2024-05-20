import React from "react";

export const Blog = () => {
  return (
    <section id="blog" className="pt-36 pb-20">
      <div className="container">
        <div className="header text-center mb-16">
          <h3 className="font-bold text-primary text-lg">Blog</h3>
          <h1 className="font-bold text-dark text-4xl">Tulisan Terkini</h1>
          <p className="max-w-xl mx-auto mt-4 text-slate-700">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            tenetur blanditiis officia minus fuga perspiciatis expedita. Facere
            provident voluptatibus similique?
          </p>
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-4">
          <div className="card rounded-lg bg-white lg:w-1/2 xl:w-1/3 overflow-hidden">
            <img
              className="w-full"
              src="https://source.unsplash.com/random/360x200?keyboard"
              alt=""
            />
            <div className="content mt-4 p-4 ">
              <h5 className="text-primary font-semibold text-xl">
                Mechanical keyboard
              </h5>
              <p className="line-clamp-4 mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                dolores qui quae nesciunt, expedita voluptates similique
                deleniti modi! Magnam ducimus saepe quaerat quae animi, nihil
                illo praesentium ad eveniet laboriosam, iusto, amet veritatis
                officiis quasi nam quam debitis cupiditate eum sit nobis
                perferendis voluptate. Maxime sit reiciendis atque aliquid
                mollitia.
              </p>
              <button className="mt-8 px-8 py-2 rounded-full bg-primary text-white">
                Preview
              </button>
            </div>
          </div>
          <div className="card rounded-lg bg-white lg:w-1/2 xl:w-1/3 overflow-hidden">
            <img
              className="w-full"
              src="https://source.unsplash.com/random/360x200?Frontend+Web"
              alt=""
            />
            <div className="content mt-4 p-4">
              <h5 className="text-primary font-semibold text-xl ">
                Frontend Web Developer
              </h5>
              <p className="line-clamp-4 mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                dolores qui quae nesciunt, expedita voluptates similique
                deleniti modi! Magnam ducimus saepe quaerat quae animi, nihil
                illo praesentium ad eveniet laboriosam, iusto, amet veritatis
                officiis quasi nam quam debitis cupiditate eum sit nobis
                perferendis voluptate. Maxime sit reiciendis atque aliquid
                mollitia.
              </p>
              <button className="mt-8 px-8 py-2 rounded-full bg-primary text-white">
                Preview
              </button>
            </div>
          </div>
          <div className="card rounded-lg bg-white lg:w-1/2 xl:w-1/3 overflow-hidden">
            <img
              className="w-full"
              src="https://source.unsplash.com/random/360x200?React+JS"
              alt=""
            />
            <div className="content mt-4 p-4">
              <h5 className="text-primary font-semibold text-xl">
                The Strong Of React JS
              </h5>
              <p className="line-clamp-4 mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                dolores qui quae nesciunt, expedita voluptates similique
                deleniti modi! Magnam ducimus saepe quaerat quae animi, nihil
                illo praesentium ad eveniet laboriosam, iusto, amet veritatis
                officiis quasi nam quam debitis cupiditate eum sit nobis
                perferendis voluptate. Maxime sit reiciendis atque aliquid
                mollitia.
              </p>
              <button className="mt-8 px-8 py-2 rounded-full bg-primary text-white">
                Preview
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

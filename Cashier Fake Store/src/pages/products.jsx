import React, { useEffect, useRef, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import getData from "../services/product.service";
import { getUsername } from "../services/auth.service";
import { useLogin } from "../hooks/useLogin";
import { TableCard } from "../components/Fragments/TableCard";
import { Navbar } from "../components/Layout/Navbar";

const Product = [
  {
    id: 1,
    name: "Shoes",
    price: 1000000,
    url: "/images/shoes1.png",
    body: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
            repellat consequatur tempore sapiente repellendus dolores quo, nobis
            earum. Rem fuga commodi illum facere nesciunt illo doloremque
            veritatis ex nulla corrupti?`,
  },
  {
    id: 2,
    name: "Shoes",
    price: 1000000,
    url: "/images/shoes1.png",
    body: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
          `,
  },
  {
    id: 3,
    name: "Sempak",
    price: 500000,
    url: "/images/shoes1.png",
    body: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
          lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam`,
  },
];

const productsPage = () => {
  const [products, setProducts] = useState([]);
  const username = useLogin();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex justify-center py-5">
        <div className="flex flex-wrap w-3/4">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header
                  url={product.image}
                  alt={product.name}
                  id={product.id}
                />
                <CardProduct.Body title={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer price={product.price} id={product.id} />
              </CardProduct>
            ))}
        </div>
        <div className="w-1/4 border-l-2">
          <h1 className="text-2xl font-bold text-blue-800 ml-2 mb-4">
            Cart List
          </h1>
          <TableCard products={products} />
        </div>
      </div>
    </>
  );
};

export default productsPage;

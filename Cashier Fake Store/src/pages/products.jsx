import React, { useEffect, useRef, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import getData from "../services/product.service";

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

const email = localStorage.getItem("email");

const Logout = () => {
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  window.location.href = "/login";
};

const productsPage = () => {
  const [cart, setcart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setcart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setProducts(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const total = cart.reduce((acc, item) => {
        const product = products.find((pro) => pro.id === item.id);

        return acc + item.Qty * product.price;
      }, 0);

      setTotalPrice(total);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  });

  const handleToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setcart(
        cart.map((item) =>
          item.id === id ? { ...item, Qty: item.Qty + 1 } : item
        )
      );
    } else {
      setcart((prevState) => [...prevState, { id, Qty: 1 }]);
    }
  };

  return (
    <>
      <header className="flex bg-blue-800 py-4 px-8 items-center justify-end">
        <h3 className="text-white">{email}</h3>
        <button className="ml-4 bg-white  py-2 px-8 rounded" onClick={Logout}>
          Logout
        </button>
      </header>
      <div className="flex justify-center py-5">
        <div className="flex flex-wrap w-3/4">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header url={product.image} alt={product.name} />
                <CardProduct.Body title={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  price={product.price}
                  handleToCart={handleToCart}
                  id={product.id}
                />
              </CardProduct>
            ))}
        </div>
        <div className="w-1/4 border-l-2">
          <h1 className="text-2xl font-bold text-blue-800 ml-2 mb-4">
            Cart List
          </h1>
          <table className="text-left table-auto border-separate border-spacing-x-2">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody className="relative  full">
              {products.length > 0 &&
                cart.map((item) => {
                  const product = products.find((p) => p.id === item.id);
                  return (
                    <tr key={item.id}>
                      <td className=" line-clamp-1">{product.title}</td>
                      <td>
                        Rp
                        {product.price.toLocaleString("id-ID", {
                          styles: "currency",
                          currency: "IDR",
                        })}
                      </td>
                      <td>{item.Qty}</td>
                      <td>
                        Rp
                        {(item.Qty * product.price).toLocaleString("id-ID", {
                          styles: "currency",
                          currency: "IDR",
                        })}
                      </td>
                    </tr>
                  );
                })}
              <tr ref={totalPriceRef}>
                <td colSpan={3} className="font-bold">
                  Price
                </td>
                <td className="font-bold">
                  {totalPrice.toLocaleString("id-ID", {
                    styles: "currency",
                    currency: "IDR",
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default productsPage;

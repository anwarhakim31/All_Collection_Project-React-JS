import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

export const TableCard = (props) => {
  const { products } = props;

  const cart = useSelector((state) => state.cart.data);
  const [totalPrice, setTotalPrice] = useState("");

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

  return (
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
  );
};

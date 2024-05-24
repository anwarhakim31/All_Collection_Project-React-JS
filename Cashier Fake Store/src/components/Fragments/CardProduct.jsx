import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

function CardProduct(props) {
  const { children } = props;
  return (
    <div className="w-full max-w-xs flex flex-col mx-2 my-2 justify-between p-4  bg-sky-500 rounded shadow-md shadow-teal-100">
      {children}
    </div>
  );
}

const Body = (props) => {
  const { children, title } = props;
  return (
    <>
      <h5 className="mt-4 text-xl font-bold text-white line-clamp-2 h-full">
        {title}
      </h5>
      <p className="mt-1 h-full text-sm text-white line-clamp-3">{children}</p>
    </>
  );
};

const Footer = (props) => {
  const { price, id } = props;
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between mt-8 items-center flex-wrap gap-4">
      <span className="text-white font-bold">
        {price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
      </span>
      <button
        className="bg-white text-sky-500 font-bold py-2 px-4 rounded"
        onClick={() => dispatch(addToCart({ id, Qty: 1 }))}
      >
        Add to cart
      </button>
    </div>
  );
};

const Header = (props) => {
  const { url, shoes, id } = props;
  return (
    <Link to={`/product/${id}`}>
      <img src={url} alt={shoes} className="w-full h-80" />
    </Link>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;

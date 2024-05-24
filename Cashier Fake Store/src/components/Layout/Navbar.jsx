import { useSelector } from "react-redux";
import { useLogin } from "../../hooks/useLogin";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const username = useLogin();
  const [totalCart, setTotalCart] = useState("");
  const cart = useSelector((state) => state.cart.data);

  useEffect(() => {
    const jumlah = cart.reduce((acc, item) => {
      return acc + item.Qty;
    }, 0);

    setTotalCart(jumlah);
  }, [cart]);

  const Logout = () => {
    localStorage.removeItem("token");

    window.location.href = "/login";
  };

  return (
    <header className="flex bg-blue-800 py-4 px-8 items-center justify-end">
      <h3 className="text-white">{username}</h3>
      <button className="ml-4 bg-white  py-2 px-8 rounded" onClick={Logout}>
        Logout
      </button>
      <p className="rounded-full w-8 h-8 grid place-items-center bg-white text-red-600 font-bold mx-4">
        {totalCart}
      </p>
    </header>
  );
};

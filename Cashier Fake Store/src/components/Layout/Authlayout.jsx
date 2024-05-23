import React from "react";
import { Link } from "react-router-dom";

function Authlayout(props) {
  const { children, title, info, type } = props;
  return (
    <section className="w-screen min-h-screen flex justify-center items-center">
      <div className="w-full  max-w-md rounded-lg bg-slate-200 shadow-md p-5">
        <h1 className="text-center text-3xl font-bold mb-2 text-blue text-teal-500">
          {title}
        </h1>
        <p className="text-center text-slate-700 block text-sm font-bold mb-8">
          {info}
        </p>
        {children}
        <p className="text-center text-slate-700 block text-sm font-bold mt-8">
          {type === "login"
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          {type === "login" && (
            <Link
              className="text-blue-500 hover:text-blue-700"
              to={"/Register"}
            >
              Register
            </Link>
          )}
          {type === "register" && (
            <Link className="text-blue-500 hover:text-blue-700" to={"/Login"}>
              Login
            </Link>
          )}
        </p>
      </div>
    </section>
  );
}

export default Authlayout;

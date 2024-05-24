import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";

function Authlayout(props) {
  const { children, title, info, type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  const handleDarkMode = () => {
    const newDarkModeValue = !isDarkMode;
    setIsDarkMode(newDarkModeValue);
    localStorage.setItem("darkmode", JSON.stringify(newDarkModeValue));
  };

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkmode");
    if (savedDarkMode !== null) {
      setIsDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);

  return (
    <section
      className={`w-screen min-h-screen flex justify-center items-center  ${
        isDarkMode && "bg-slate-900"
      }`}
    >
      <div className="w-full  max-w-md rounded-lg bg-slate-200 shadow-md p-5">
        <button
          className="absolute top-4 right-4 bg-blue-800 text-white p-4 rounded-sm"
          onClick={handleDarkMode}
        >
          {isDarkMode ? "Light" : "Dark"}
        </button>
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

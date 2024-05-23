import React from "react";

const Button = (props) => {
  const { children, className } = props;
  return (
    <button
      type="submit"
      className={`w-full cursor-pointer ${className} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
    >
      {children}
    </button>
  );
};

export default Button;

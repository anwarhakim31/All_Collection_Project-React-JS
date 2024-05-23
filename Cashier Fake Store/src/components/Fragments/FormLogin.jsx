import React, { useEffect, useRef } from "react";
import InputForm from "../Elements/input";
import Button from "../Elements/Button/Button";

const FormLogin = (props) => {
  const { handleSubmit, loginFailed } = props;

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit} className="relative">
      {loginFailed && (
        <span className="text-red-600  absolute py-4 -top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          loginFailed
        </span>
      )}
      <InputForm
        type="text"
        name="username"
        id="username"
        label="Username"
        placeholder="Enter your username"
        ref={usernameRef}
      />
      <InputForm
        type="password"
        name="password"
        id="passwords"
        label="Password"
        placeholder="Enter your password"
      />
      <Button className="bg-blue-500">Login</Button>
    </form>
  );
};

export default FormLogin;

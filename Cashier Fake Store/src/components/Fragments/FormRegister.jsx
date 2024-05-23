import React from "react";
import InputForm from "../Elements/input";
import Button from "../Elements/Button/Button";

function FormRegister() {
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(event.target);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputForm
        type="text"
        name="username"
        id="usernames"
        label="Username"
        placeholder="Enter your username"
      />
      <InputForm
        type="email"
        name="email"
        id="email"
        label="email"
        placeholder="Enter your email"
      />
      <InputForm
        type="password"
        name="password"
        id="passwords"
        label="Password"
        placeholder="*****"
      />
      <InputForm
        type="password"
        name="Confirm password"
        id="cpassword"
        label="Confirm Password"
        placeholder="*****"
      />

      <Button className="bg-blue-500">Register</Button>
    </form>
  );
}

export default FormRegister;

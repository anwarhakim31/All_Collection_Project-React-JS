import React from "react";
import Authlayout from "../components/Layout/Authlayout";
import FormRegister from "../components/Fragments/FormRegister";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <Authlayout
      title="Register"
      info="Welcome, Create your Account"
      type="register"
    >
      <FormRegister />
    </Authlayout>
  );
};

export default RegisterPage;

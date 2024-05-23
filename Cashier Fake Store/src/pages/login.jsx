import Authlayout from "../components/Layout/Authlayout";
import FormLogin from "../components/Fragments/FormLogin";
import { login } from "../services/auth.service";
import { data } from "autoprefixer";
import { useState } from "react";

const LoginPage = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    // localStorage.setItem("email", email);
    // localStorage.setItem("password", password);

    console.log(username);

    const data = {
      username: username,
      password: password,
    };

    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };

  return (
    <Authlayout
      title="Login"
      info="Welcome, Please enter your Details"
      type="login"
    >
      <FormLogin loginFailed={loginFailed} handleSubmit={handleSubmit} />
    </Authlayout>
  );
};

export default LoginPage;

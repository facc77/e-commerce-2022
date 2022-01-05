import React from "react";
import LoginForm from "../../components/Forms/LoginForm";
import SectionBar from "../../components/SectionBar";

const LoginScreen = () => {
  return (
    <>
      <SectionBar page="Mi cuenta" />
      <LoginForm />
    </>
  );
};

export default LoginScreen;

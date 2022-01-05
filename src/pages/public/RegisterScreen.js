import React from "react";
import RegisterForm from "../../components/Forms/RegisterForm";
import SectionBar from "../../components/SectionBar";

const RegisterScreen = () => {
  return (
    <>
      <SectionBar page="Registro" />
      <RegisterForm />
    </>
  );
};

export default RegisterScreen;

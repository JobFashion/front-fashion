import React from 'react';
import { Link } from 'react-router-dom';

// import { Register as RegisterComponent } from '../components/ui/Register';
// import RegisterForm from '../components/ui/RegisterForm';
import RegisterFormik from '../components/ui/RegisterFormik';
import Header from '../components/layout/Header';

export default function Register() {
  return (
    <>
      <Header subtitle="SÉ PARTE DE FASHION LIKE" />
      <h2 className="text-[22px] font-semibold text-center mt-14 md:hidden">Registro</h2>
      {/* <RegisterComponent /> */}
      {/* <RegisterForm /> */}
      <RegisterFormik />
      <small className="block mt-4 text-xs text-center md:hidden mb-12">
        <Link to="/" className="hover:opacity-75 transition-opacity">
          Volver
        </Link>
      </small>
    </>
  );
}

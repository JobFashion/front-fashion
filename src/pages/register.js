import React from 'react';
import { Link } from 'react-router-dom';
import RegisterFormik from '../components/ui/RegisterFormik';
import Header from '../components/layout/Header';

export default function Register() {
  return (
    <>
      <Header subtitle="SÉ PARTE DE FASHION LIKE" />
      <h2 className="text-[22px] font-semibold text-center mt-14 md:hidden">Registro</h2>
      <RegisterFormik />
      <div className="text-center mt-6 md:mt-8 font-medium text-xs md:text-sm space-y-3 md:space-y-5 mb-10">
        {/* <small className="block mt-4 text-xs text-center md:hidden mb-12">
      </small> */}
        <p className="md:hidden">
          <Link to="/" className="hover:opacity-75 transition-opacity">
            Volver
          </Link>
        </p>
        <p>
          ¿Tienes una cuenta?
          <Link to="/login" className="text-main-rosa md:font-semibold ml-1 hover:opacity-75 transition-opacity">
            Inicia Sesion aquí.
          </Link>
        </p>
      </div>
    </>
  );
}

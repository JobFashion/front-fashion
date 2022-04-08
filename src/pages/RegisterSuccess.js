import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/layout/Header';

//TODO: No debe ser una pagina puede ser un componente a mostrar si resulta exitoso el registro
export default function RegisterSuccess() {
  return (
    <>
      <Header />
      <div className="relative container mx-auto h-full">
        <div className="max-w-2xl mx-auto bg-[#FFF5DA] mt-20 pt-10 pb-6 px-10 border-[3px] space-y-8 border-[#FFBC0F] text-center">
          <h2 className="text-3xl font-bold">¡Tu registro ha sido exitoso!</h2>
          <p className="text-lg font-medium">
            Te hemos enviado un link de verificación
            <br className="hidden md:inline-flex" /> a tu email para que puedas
            <br className="hidden md:inline-flex" /> ingresar a tu cuenta.
          </p>

          <div className="inline-flex justify-center">
            <Link
              to="/login"
              className="w-full md:w-auto px-10 py-2 h-[50px] text-lg font-semibold text-[#E063A3] uppercase rounded-2xl md:rounded-[20px] md:py-1 md:h-[40px] border-2 border-[#E063A3] hover:opacity-75 active:scale-95 transition-all"
            >
              Iniciar Sesión
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 z-10 items-end hidden md:flex">
          <img
            src="./images/low-register-success-2.png"
            width="286"
            alt="fashion chacket"
          />
        </div>
        <div className="absolute bottom-0 right-0 z-10 items-end hidden md:flex">
          <img
            src="./images/low-register-success-1.png"
            width="230"
            alt="fashion woman"
          />
        </div>
      </div>
    </>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/icons/logo.svg';

function Header({ subtitle }) {
  return (
    <>
      <div className="flex items-center flex-col md:flex-row justify-between">
        <div className="w-[156px] mt-[62px] md:w-[123px] md:mt-8">
          <Link to="/">
            <img src={logo} alt="firulasTop" width="156px" />
          </Link>
        </div>
        <h1 className="hidden md:block text-[20px] text-[#1B1616] font-extrabold uppercase opacity-30 tracking-widest">
          OLVIDA LAS REGLAS. SI TE GUSTA, ÚSALO.
        </h1>
      </div>
      {subtitle && (
        <h2 className="hidden md:block text-4xl uppercase font-bold text-[#1B1616] text-center mt-12">
          {subtitle}
        </h2>
      )}
    </>
  );
}

export default Header;

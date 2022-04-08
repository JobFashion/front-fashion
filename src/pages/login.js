import { useState } from 'react';
import { Link } from 'react-router-dom';
import { authUser } from '../services/auth';

import Header from '../components/layout/Header';
import warning from '../assets/icons/warning.svg';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    authUser({ email, password }, 'login')
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header subtitle="no te pierdas el look del día" />
      <h2 className="text-[22px] font-semibold text-center mt-14 md:hidden">
        Iniciar sesión
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-xs w-full mx-auto space-y-8 mt-12 md:mt-24"
      >
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 h-[45px] font-normal rounded-2xl md:rounded-lg border border-[#887675] focus:outline-none focus:ring-2 focus:ring-[#E063A3] focus:border-[#E063A3]"
        />

        <div>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 h-[45px] font-normal rounded-2xl md:rounded-lg border border-[#F0281D] focus:outline-none focus:ring-2 focus:ring-[#E063A3] focus:border-[#E063A3]"
          />
          <p className="ml-2 mt-1 text-xs font-light text-[#F0281D] flex items-center gap-1">
            <img src={warning} alt="incorrecto" />
            <span>Contraseña Incorrecta</span>
          </p>
        </div>

        <div className="inline-flex justify-center">
          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3 h-[50px] text-lg font-semibold text-white uppercase rounded-2xl md:rounded-[20px] md:py-1 md:h-[40px] bg-[#E063A3] hover:opacity-75 active:scale-95 transition-all"
          >
            Iniciar Sesión
          </button>
        </div>
      </form>
      <div className="text-center mt-6 md:mt-8 font-medium text-xs md:text-sm space-y-3 md:space-y-5">
        <p>
          ¿Olvidaste tu contraseña?
          <Link to="/recovery" className="text-[#E063A3] md:font-semibold ml-1">
            Ingresá aquí.
          </Link>
        </p>
        <p>
          ¿No tienes una cuenta?
          <Link to="/register" className="text-[#E063A3] md:font-semibold ml-1">
            Registrate aquí.
          </Link>
        </p>
      </div>
    </>
  );
}

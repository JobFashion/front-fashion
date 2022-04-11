import { Link } from 'react-router-dom';
import  logo from '../assets/icons/logo.svg';

export default function Landing () {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-4">
      <Link to={'/'} className="mt-7 mb-6">
      <img src={logo} alt="logofashion" width="156px" />
      </Link>

      <div className="order-1 lg:order-2">
        <h1 className="max-w-[170px] text-center text-[22px] leading-8 uppercase font-bold mx-auto mb-5">
          ¡Te damos la bienvenida!
        </h1>
        <p className="text-sm leading-5 font-medium text-center mx-6 mb-8">
          Somos la red social sobre moda más popular del momento. Estamos para brindarte
          los mejores looks para que te veas siempre{' '}
          <span className="text-[#860B3D] font-bold">genial</span>.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 order-2 lg:order-1">
        <button className="bg-[#E063A3] rounded-[20px] py-[6px] px-6 uppercase font-semibold text-white">
          Registrarse
        </button>
        <button className="rounded-[20px] py-[6px] px-6 uppercase font-semibold text-[#E063A3] border border-[#E063A3]">
          Iniciar Sesion
        </button>
      
      </div>
    </div>
  );
}


import { NavLink } from 'react-router-dom';
import IconHeart from '../icons/IconHeart';
import IconHome from '../icons/IconHome';
import IconNew from '../icons/IconNew';
import IconNotification from '../icons/IconNotification';
import IconStore from '../icons/IconStore';

function FooterMenuMobile() {
  return (
    <div className="flex md:hidden fixed bottom-0 w-full z-20 h-12 bg-[#F3EAE8]">
      <div className="footerMobile flex justify-between items-center w-full gap-2 px-4">
        <NavLink to="/home" className="text-[#887675] flex flex-col items-center w-1/5">
          <IconHome />
          <span className="text-[10px]">Home</span>
        </NavLink>
        <NavLink to="/shop" className="text-[#887675] flex flex-col items-center w-1/5">
          <IconStore />
          <span className="text-[10px]">Comprar</span>
        </NavLink>
        <NavLink to="/new" className="text-[#887675] flex flex-col items-center w-1/5">
          <IconNew />
          <span className="text-[10px]">Crear</span>
        </NavLink>
        <NavLink to="/favorites" className="text-[#887675] flex flex-col items-center w-1/5">
          <IconHeart />
          <span className="text-[10px]">Guardado</span>
        </NavLink>
        <NavLink to="/notifications" className="text-[#887675] flex flex-col items-center w-1/5">
          <IconNotification />
          <span className="text-[10px]">Notificaciones</span>
        </NavLink>
      </div>
    </div>
  );
}

export default FooterMenuMobile;

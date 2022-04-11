import { Link } from 'react-router-dom';
import IconFacebook from '../icons/IconFacebook';
import IconLinkedin from '../icons/IconLinkedin';

function Footer() {
  return (
    <footer className="relative bg-[#860B3D] text-white py-5 hidden md:block z-10">
      <div className="container mx-auto flex justify-between items-center px-8 md:px-4">
        <nav>
          <ul className="flex gap-4">
            <li className="relative font-semibold text-xs uppercase after:absolute after:h-3 after:w-[1px] after:top-[2px] after:-right-2 after:bg-white">
              <a href="#ss" className="hover:opacity-75 py-2 transition-opacity">
                contacto
              </a>
            </li>
            <li className="relative font-semibold text-xs uppercase after:absolute after:h-3 after:w-[1px] after:top-[2px] after:-right-2 after:bg-white">
              <a href="#ss" className="hover:opacity-75 py-2 transition-opacity">
                terminos y condiciones
              </a>
            </li>
            <li className="relative font-semibold text-xs uppercase after:absolute after:h-3 after:w-[1px] after:top-[2px] after:-right-2 after:bg-white">
              <a href="#ss" className="hover:opacity-75 py-2 transition-opacity">
                privacidad
              </a>
            </li>
            <li className="relative font-semibold text-xs uppercase">
              <a href="#ss" className="hover:opacity-75 py-2 transition-opacity">
                ¿Quienes somos?
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center justify-end gap-4">
          <p className="relative font-semibold text-xs uppercase">© 2022. fashion like</p>
          <Link to="/" className="hover:opacity-75 transition-opacity">
            <IconFacebook />
          </Link>
          <Link to="/" className="hover:opacity-75 transition-opacity">
            <IconLinkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import { Link } from 'react-router-dom';
import IconFacebook from '../icons/IconFacebook';
import IconLinkedin from '../icons/IconLinkedin';

function Footer() {
  return (
    <footer className="relative bg-[#860B3D] text-white py-3 mt-auto md:py-5 z-10 h-[72px]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-8 md:px-4">
        <nav className="hidden md:block">
          <ul className="flex gap-4">
            <li className="relative font-semibold text-xs uppercase after:absolute after:h-3 after:w-[1px] after:top-[2px] after:-right-2 after:bg-white">
              <Link to="/contact" className="hover:opacity-75 py-2 transition-opacity">
                contacto
              </Link>
            </li>
            <li className="relative font-semibold text-xs uppercase after:absolute after:h-3 after:w-[1px] after:top-[2px] after:-right-2 after:bg-white">
              <Link to="/terms" className="hover:opacity-75 py-2 transition-opacity">
                terminos y condiciones
              </Link>
            </li>
            <li className="relative font-semibold text-xs uppercase after:absolute after:h-3 after:w-[1px] after:top-[2px] after:-right-2 after:bg-white">
              <Link to="/privacy" className="hover:opacity-75 py-2 transition-opacity">
                privacidad
              </Link>
            </li>
            <li className="relative font-semibold text-xs uppercase">
              <Link to="/about" className="hover:opacity-75 py-2 transition-opacity">
                ¿Quienes somos?
              </Link>
            </li>
          </ul>
        </nav>
        <div className="hidden md:flex items-center justify-end gap-4">
          <p className="relative font-semibold text-xs uppercase">© 2021-{new Date().getFullYear()}. fashion like</p>
          <Link to="/" className="hover:opacity-75 transition-opacity">
            <IconFacebook />
          </Link>
          <Link to="/" className="hover:opacity-75 transition-opacity">
            <IconLinkedin />
          </Link>
        </div>
        {/** for mobile */}
        <nav className="block md:hidden  w-full">
          <ul className="flex items-center justify-between">
            <li className="relative font-semibold text-[10px] uppercase">
              <Link to="/privacy" className="hover:opacity-75 py-2 transition-opacity">
                privacidad
              </Link>
            </li>
            <li className="relative font-semibold text-[10px] uppercase">
              <Link to="/contact" className="hover:opacity-75 py-2 transition-opacity">
                contacto
              </Link>
            </li>
          </ul>
        </nav>
        <div className="md:hidden flex flex-col gap-1">
          <div className="flex justify-center space-x-4 items-center">
            <Link to="/" className="hover:opacity-75 transition-opacity">
              <IconFacebook />
            </Link>
            <Link to="/" className="hover:opacity-75 transition-opacity">
              <IconLinkedin />
            </Link>
          </div>
          <p className="relative font-semibold text-[8px] uppercase">© 2021-{new Date().getFullYear()}. fashion like</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

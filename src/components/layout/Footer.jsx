import { Link } from 'react-router-dom';
import IconFacebook from '../icons/IconFacebook';
import IconLinkedin from '../icons/IconLinkedin';

function Footer() {
  return (
    <footer className="relative bg-[#860B3D] text-white py-6 hidden md:block z-10">
      <div className="container mx-auto flex justify-between items-center px-8 md:px-4">
        <nav>
          <ul className="flex gap-4">
            <li className="relative font-semibold text-xs uppercase before:absolute before:h-3 before:my-auto before:inset-0 before:border-r before:-right-2 before:border-white">
              <a href="#ss">contacto</a>
            </li>
            <li className="relative font-semibold text-xs uppercase before:absolute before:h-3 before:my-auto before:inset-0 before:border-r before:-right-2 before:border-white">
              <a href="#ss">terminos y condiciones</a>
            </li>
            <li className="relative font-semibold text-xs uppercase before:absolute before:h-3 before:my-auto before:inset-0 before:border-r before:-right-2 before:border-white">
              <a href="#ss">privacidad</a>
            </li>
            <li className="relative font-semibold text-xs uppercase">
              <a href="#ss">¿Quienes somos?</a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center justify-end gap-4">
          <p className="relative font-semibold text-xs uppercase">© 2022. fashion like</p>
          <Link to="/">
            <IconFacebook />
          </Link>
          <Link to="/">
            <IconLinkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

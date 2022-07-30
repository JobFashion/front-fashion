import { Link } from 'react-router-dom';

import HeaderCard from './HeaderCard';
import IconFacebook from '../../../components/icons/IconFacebook';
import IconLinkedin from '../../../components/icons/IconLinkedin';

import { users } from '../../../services/dataMock';

function SideFooter() {
  return (
    <div className="sticky px-14 top-4 bottom-0">
      <h4 className="text-sm px-4 mb-14">Sugerencias para ti</h4>
      {users.map((item, idx) => {
        return <HeaderCard key={idx} {...item} fnc={true} />;
      })}
      {/* footer */}
      <div className="px-4">
        <ul className="flex space-x-4 mt-24 text-xs uppercase font-light flex-wrap">
          <li>Contacto</li>
          <li>Terminos y Condiciones</li>
          <li>Privacidad</li>
          <li>Quienes Somos</li>
        </ul>
        <div className="flex justify-between items-center mt-5 text-secondary-rosa">
          <p className="font-medium text-xs uppercase">© 2022. fashion like</p>
          <div className="flex justify-center space-x-4 items-center">
            <Link to="/" className="hover:opacity-75 transition-opacity">
              <IconFacebook />
            </Link>
            <Link to="/" className="hover:opacity-75 transition-opacity">
              <IconLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SideFooter;

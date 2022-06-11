import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout, reset } from '../../store/auth/authSlice';

import logo from '../../assets/icons/logo.svg';
import IconHome from '../icons/IconHome';
import IconNotification from '../icons/IconNotification';
import IconStore from '../icons/IconStore';
import IconHeart from '../icons/IconHeart';
import IconNew from '../icons/IconNew';

import ItemLink from './components/ItemLink';
import ProfileDropdown from './components/ProfileDropdown';

const menuData = [
  {
    route: '/home',
    text: 'Home',
    icon: <IconHome />,
  },
  {
    route: '/buy',
    text: 'Comprar',
    icon: <IconStore />,
  },
  {
    route: '/new',
    text: 'Crear',
    icon: <IconNew />,
  },
  {
    route: '/favorites',
    text: 'Favoritos',
    icon: <IconHeart />,
  },
  {
    route: '/notifications',
    text: 'Notificaciones',
    icon: <IconNotification />,
  },
];

function HeaderPrivate() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.auth);
  // console.log(user);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  return (
    <header className="bg-white mb-12 h-28">
      <div className="container mx-auto px-4 flex h-full items-center justify-between">
        <Link to="/home" className="hover:opacity-75 transition-opacity">
          <img src={logo} alt="firulasTop" width="123px" />
        </Link>
        <ul className="flex h-full headers-link">
          {menuData.map((item, idx) => (
            <ItemLink key={idx} {...item} />
          ))}
          <li className="relative h-full flex items-center">
            <ProfileDropdown action={onLogout} />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default HeaderPrivate;

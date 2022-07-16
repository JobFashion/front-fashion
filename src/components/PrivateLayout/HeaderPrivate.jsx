import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout, reset } from '../../store/auth/authSlice';

import logo from '../../assets/icons/logo.svg';
import logo_mobile from '../../assets/icons/logo_mobile.svg';

import ProfileDropdown from './components/ProfileDropdown';
import MenuHeader from './components/MenuHeader';
import Search from './components/Search';

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
    <header
      className="bg-white h-12 md:h-28 mb-24 fixed top-0 w-full z-20"
      style={{ filter: 'drop-shadow(0px 4px 36px rgba(232, 23, 138, 0.10))' }}
    >
      <div className="max-w-7xl mx-auto px-4 flex h-full items-center justify-between">
        <Link to="/home" className="hover:opacity-75 transition-opacity">
          <img src={logo} alt="firulasTop" width="123px" className="hidden md:flex" />
          <img src={logo_mobile} alt="firulasTop" width="123px" className="flex md:hidden" />
        </Link>
        <div className="flex items-center h-full">
          <Search />
          <MenuHeader />
          <div className="relative h-full flex items-center">
            <ProfileDropdown action={onLogout} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderPrivate;

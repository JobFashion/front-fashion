import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, reset } from '../../store/auth/authSlice';

function HeaderPrivate() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  return (
    <header className="bg-slate-200 py-4 mb-12">
      <div className="container mx-auto px-4 flex items-center justify-between ">
        <nav className="flex gap-4">
          <Link to="/home" className="hover:opacity-75 transition-opacity">
            Inicio
          </Link>
          <Link to="/profile" className="hover:opacity-75 transition-opacity">
            Perfil
          </Link>
        </nav>
        <div>
          Hola, <i className="font-black">{user.user.name}</i>
          <button className="ml-4 hover:opacity-75 transition-opacity" onClick={onLogout}>
            Salir
          </button>
        </div>
      </div>
    </header>
  );
}

export default HeaderPrivate;

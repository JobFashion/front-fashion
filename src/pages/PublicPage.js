import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PublicPage() {
  const { user } = useSelector((state) => state.auth);
  //TODO: redirigir a una ruta guardada
  return !user ? <Outlet /> : <Navigate to="/home" />;
}

export default PublicPage;

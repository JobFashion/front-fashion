import { Outlet } from 'react-router-dom';
import HeaderPrivate from './HeaderPrivate';
import Footer from '../layout/Footer';

function PrivateLayout() {
  return (
    <div className="flex flex-col bg-[#F2F2F2] h-screen">
      <HeaderPrivate />
      <div className="container mx-auto px-4 flex flex-col flex-1 text-[#5a5454]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default PrivateLayout;

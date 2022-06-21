import { Outlet } from 'react-router-dom';
import Footer from './Footer';

function Layout() {
  return (
    <>
      <div className="flex flex-col h-screen relative">
        <div className="container mx-auto flex flex-col flex-1 px-6 md:px-4">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;

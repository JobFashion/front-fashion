import { Outlet } from 'react-router-dom';
import FooterMenuMobile from './FooterMenuMobile';
import HeaderPrivate from './HeaderPrivate';

function PrivateLayout() {
  return (
    <div className="flex flex-col h-full min-h-screen bg-[#F2F2F2]">
      <HeaderPrivate />
      <FooterMenuMobile />
      <main className="container mx-auto md:px-4 pt-12 md:mt-28 flex flex-col flex-1 text-[#5a5454] max-w-5xl mb-12">
        <Outlet />
      </main>
    </div>
  );
}

export default PrivateLayout;

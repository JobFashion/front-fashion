import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';

import IconProfile from '../../icons/IconProfile';
import IconUser from '../../icons/IconUser';
import IconCog from '../../icons/IconCog';
import IconReload from '../../icons/IconReload';
import IconLogout from '../../icons/IconLogout';

function ProfileDropdown({ action }) {
  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="pt-3 px-5">
            <span className="bg-[#E9E8E8] border border-transparent rounded-full flex items-center justify-center p-2 h-10 w-10 hover:border-black hover:bg-[rgba(217, 216, 216, 0.75)] transition-colors">
              <IconProfile />
            </span>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-6 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item>
                <Link
                  to="/profile"
                  className="hover:bg-[#E9E8E8] text-[#887675] group flex w-full items-center rounded-md px-2 py-2 text-xs"
                >
                  <IconUser className="mr-2 h-5 w-5" aria-hidden="true" /> Perfil
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link
                  to="/profile"
                  className="hover:bg-[#E9E8E8] text-[#887675] group flex w-full items-center rounded-md px-2 py-2 text-xs"
                >
                  <IconCog className="mr-2 h-5 w-5" aria-hidden="true" />
                  Ajustes
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link
                  to="/profile"
                  className="hover:bg-[#E9E8E8] text-[#887675] group flex w-full items-center rounded-md px-2 py-2 text-xs"
                >
                  <IconReload className="mr-2 h-5 w-5" aria-hidden="true" />
                  Cambiar Cuenta
                </Link>
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                <button
                  onClick={action}
                  className="hover:bg-[#E9E8E8] text-[#887675] group flex w-full items-center rounded-md px-2 py-2 text-xs"
                >
                  <IconLogout className="mr-2 h-5 w-5" aria-hidden="true" />
                  Salir
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}
export default ProfileDropdown;

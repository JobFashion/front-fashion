import { NavLink } from 'react-router-dom';

function ItemLink({ route, icon, text }) {
  return (
    <li className="relative">
      <NavLink to={route} className="flex h-full pt-3 px-5">
        <div className="border-b-[3px] border-transparent flex flex-col justify-center items-center text-[#887675] transition-colors">
          <span className="mb-2 h-5 w-5 text-center">{icon}</span>
          <span className="font-semibold text-xs">{text}</span>
        </div>
      </NavLink>
    </li>
  );
}

export default ItemLink;

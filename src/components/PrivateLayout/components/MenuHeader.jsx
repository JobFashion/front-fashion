import ItemLink from './ItemLink';
import { menuData } from '../../../config/menus';

function MenuHeader() {
  return (
    <ul className="h-full headers-link hidden md:flex gap-3 items-center md:gap-0 md:items-stretch">
      {menuData.map((item, idx) => (
        <ItemLink key={idx} {...item} />
      ))}
    </ul>
  );
}

export default MenuHeader;

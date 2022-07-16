import IconHome from '../components/icons/IconHome';
import IconNotification from '../components/icons/IconNotification';
import IconStore from '../components/icons/IconStore';
import IconHeart from '../components/icons/IconHeart';
import IconNew from '../components/icons/IconNew';

export const menuData = [
  {
    route: '/home',
    text: 'Home',
    icon: <IconHome />,
  },
  {
    route: '/shop',
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

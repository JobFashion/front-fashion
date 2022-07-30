import { Link } from 'react-router-dom';

function HeaderCard({ id, name, avatar, followers, fnc = false }) {
  const subtitle =
    followers.length > 1
      ? `${followers[0]} y ${followers.length - 1} más siguen esta cuenta'`
      : followers.length === 1
      ? `${followers[0]} sigue esta cuenta`
      : 'Nuevo en Fashion Like';
  return (
    <div className="flex px-4 py-2 w-full">
      <span className="rounded-full overflow-hidden">
        <Link to={`/profile/${id}`}>
          <img src={avatar} className="object-cover h-10 w-10" alt={`Perfil ${name}`} />
        </Link>
      </span>
      <div className="ml-2 flex flex-col justify-center flex-1">
        <h3 className="font-semibold text-xs">{name}</h3>
        <small className="font-light text-[8px]">{subtitle}</small>
      </div>
      {fnc && (
        <a href="#s" className="text-xs self-center hover:text-main-rosa text-third-link">
          Seguir
        </a>
      )}
    </div>
  );
}

export default HeaderCard;

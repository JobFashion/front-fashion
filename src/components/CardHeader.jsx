import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/es';

dayjs.extend(relativeTime);
dayjs.locale('es');

function CardHeader({ name, identifier, avatar, created }) {
  return (
    <div className="flex px-4 py-2">
      <span className="rounded-full overflow-hidden">
        <Link to={`/profile/${identifier}`}>
          <img src={avatar} className="object-cover h-10 w-10" alt="" />
        </Link>
      </span>
      <div className="ml-2 flex flex-col justify-center">
        <Link to={`/profile/${identifier}`}>
          <h3 className="font-semibold text-sm">{name}</h3>
        </Link>
        <small className="font-light text-xs">{dayjs(created).fromNow()}</small>
      </div>
    </div>
  );
}

export default CardHeader;

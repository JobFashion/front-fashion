import { useState } from 'react';
import IconLike from './icons/IconLike';

function ActionsCard({ activeComment, showComment }) {
  const [like, setLike] = useState(109);
  const [myLike, setMyLike] = useState(false);

  const daleLike = () => {
    if (myLike) {
      setMyLike(false);
      setLike((prev) => prev - 1);
    } else {
      setMyLike(true);
      setLike((prev) => prev + 1);
    }
  };

  return (
    <div className="px-4 py-2">
      <span className="flex opacity-75 text-xs mb-1">
        <IconLike className="w-4 h-4 mr-2" /> {like}
      </span>
      <div className="flex justify-between items-center text-xs py-2">
        <button className={`flex hover:text-pink-500 ${myLike && 'liked text-pink-500'}`} onClick={daleLike}>
          <IconLike className="w-5 h-5 mr-2" /> Me gusta
        </button>
        <button className={`flex hover:text-pink-500 ${activeComment && 'text-pink-500'}`} onClick={showComment}>
          <IconLike className="w-5 h-5 mr-2" /> Comentar
        </button>
        <button className="flex hover:text-pink-500">
          <IconLike className="w-5 h-5 mr-2" /> Compartir
        </button>
      </div>
    </div>
  );
}

export default ActionsCard;

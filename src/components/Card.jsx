import { useState } from 'react';
import ActionsCard from './ActionsCard';
import CardComment from './CardComment';
import CardHeader from './CardHeader';

function Card({ item }) {
  const [listComment, setListComment] = useState(false);
  const showComment = () => {
    setListComment((prev) => !prev);
  };
  return (
    <div className="bg-white border-b-2 border-slate-500 w-full">
      <CardHeader
        name={item?.user?.name}
        identifier={item.user?._id}
        avatar={item.user?.avatar}
        created={item.createdAt}
      />
      <p className="font-normal text-xs px-4 pt-1 pb-3">{item.description}</p>
      <div className="max-h-[450px] overflow-hidden">
        <img src={item.images[0]} alt="" className="object-cover w-full h-full" />
      </div>
      <ActionsCard activeComment={listComment} showComment={showComment} />
      <CardComment active={listComment} />
    </div>
  );
}

export default Card;

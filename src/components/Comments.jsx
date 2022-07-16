import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// import { comment } from '../store/apiServices';

function Comments({ post }) {
  const [comments, setComments] = useState(post?.comments);
  const commentsRef = useRef();

  return (
    <div className="pt-6 relative top-0 overflow-hidden">
      <div
        className="absolute h-[4px] w-full bg-white top-[-4px]"
        style={{ filter: 'drop-shadow(0px 4px 22px rgba(0, 0, 0, 0.67))' }}
      ></div>
      <div className="flex flex-col">
        {/* comment */}
        {comments?.map((item, idx) => (
          <CommentItem key={idx} item={item} />
        ))}
        <div ref={commentsRef} />
        {/* form new comment */}
        <CommentForm setComments={setComments} post={post} />
      </div>
    </div>
  );
}

function CommentForm({ setComments, post }) {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('user'));
  const [comment, setComment] = useState('');
  const handleComment = async () => {
    const newComments = await dispatch(comment(`${user?.user?.name}: ${comment}`, post._id));
    setComment('');
    setComments(newComments);
    // commentsRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="px-4">
      <form className="flex border-t border-slate-200 py-4 ">
        <figure className="h-10 w-10 overflow-hidden rounded-full">
          <img
            src="https://cdn.pixabay.com/photo/2021/03/03/08/56/woman-6064819__340.jpg"
            alt=""
            className="w-full h-full object-fill"
          />
        </figure>
        <div className="ml-2 mt-2 flex-1">
          <textarea
            type="text"
            placeholder="Agregar un comentario..."
            className="text-xs w-full h-full py-1 focus:outline-0 resize"
            onChange={(e) => setComment(e.target.value)}
          >
            {comment}
          </textarea>
        </div>
        <div className="ml-2 mt-2">
          <button type="submit" className="text-xs px-2" disabled={!comment.length} onClick={handleComment}>
            Publicar
          </button>
        </div>
      </form>
    </div>
  );
}

function CommentItem({ item }) {
  return (
    <div className="flex flex-row px-4 pb-3">
      <div className="flex-grow-0 rounded-full overflow-hidden h-10 w-10">
        <Link to={`/profile/${item.postUserId}`}>
          <img src={item.user.avatar} className="object-cover h-full w-full" alt="" />
        </Link>
      </div>
      <div className="pl-2 flex-1 flex flex-col w-full">
        <div>
          <Link to={`/profile/${item.postUserId}`}>
            <h3 className="font-semibold text-sm bg-pink-400 bg-opacity-40 rounded-3xl px-1 inline-block">
              {item.user.name}
            </h3>
          </Link>
          <small className="font-light text-xs ml-1">{item.createdAt}</small>
        </div>
        <p className="font-normal text-xs pt-1">{item.content}</p>
      </div>
    </div>
  );
}

export default Comments;

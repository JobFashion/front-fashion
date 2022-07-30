import { Link } from 'react-router-dom';

function CardComment({ active }) {
  return (
    <div className={`pt-6 relative top-0 overflow-hidden ${active ? 'block' : 'hidden'}`}>
      <div
        className="absolute h-[4px] w-full bg-white top-[-4px]"
        style={{ filter: 'drop-shadow(0px 4px 22px rgba(0, 0, 0, 0.67))' }}
      ></div>
      <div className="flex flex-col">
        {/* comment */}
        {[1, 2, 3].map((item, idx) => (
          <div key={idx}>
            {/* <CardHeader name="" identifier="" avatar="" created="" /> */}
            <div className="flex flex-row px-4 pb-3">
              <div className="flex-grow-0 rounded-full overflow-hidden h-10 w-10">
                <Link to={`/profile/a1232`}>
                  <img
                    src="https://cdn.pixabay.com/photo/2021/03/03/08/56/woman-6064819__340.jpg"
                    className="object-cover h-full w-full"
                    alt=""
                  />
                </Link>
              </div>
              <div className="pl-2 flex-1 flex flex-col w-full">
                <div>
                  <Link to={`/profile/23423423`}>
                    <h3 className="font-semibold text-sm bg-secondary-comentario rounded-3xl px-2 inline-block">
                      Maca-Ricnoll
                    </h3>
                  </Link>
                  <small className="font-light text-xs ml-1">hace 5 min</small>
                </div>
                <p className="font-normal text-xs pt-1">
                  ¿Quién dice que no puedes usar unos Vans con un traje? Solo debes combinar bien el tono de los zapatos
                  con.
                </p>
              </div>
            </div>
          </div>
        ))}
        {/* form new comment */}
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
              ></textarea>
            </div>
            <div className="ml-2 mt-2">
              <button type="submit" className="text-xs  px-2">
                Publicar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CardComment;

import { Link } from 'react-router-dom';

function Profile() {
  return (
    <>
      {/* header profile */}
      <section className="flex w-full px-8 mt-8 md:mt-0 md:px-14 mx-auto">
        <figure className="rounded-full overflow-hidden h-24 w-24 md:h-52 md:w-52">
          <img
            src="https://media.canalnet.tv/2021/08/lali-espo-974x550.jpg"
            className="h-24 w-24 md:h-52 md:w-52 object-cover"
            alt=""
          />
        </figure>
        <div className="ml-6 md:ml-32 flex-1 w-full flex flex-col justify-center">
          <h1 className="mb-4 md:mb-12 text-2xl">
            Lorena.G{' '}
            <button className="text-xs ml-10 md:ml-20 align-middle text-[#2D33C8D9] hover:text-pink-500">Seguir</button>{' '}
          </h1>
          <div className="flex flex-col gap-3 md:flex-row md:items-center justify-between text-base">
            <span>
              <b>2</b> publicaciones
            </span>
            <span>
              <b>55</b> seguidores
            </span>
            <span>
              <b>130</b> seguidos
            </span>
          </div>
        </div>
      </section>
      {/* separator */}
      <hr className="my-10 md:my-20" />
      {/* images profile */}
      <section className="grid grid-cols-2 md:grid-cols-3 gap-7 md:gap-20 mb-24 mx-auto">
        {[1, 2, 3, 4, 5, 6].map((item, idx) => (
          <Link
            to="/"
            key={idx}
            className="active:scale-[98%] transform drop-shadow-md transition-all hover:drop-shadow-2xl"
          >
            <figure className="h-[150px] md:h-auto w-[150px] md:max-h-80 md:min-w-[300px] md:w-full overflow-hidden">
              <img
                src="https://www.cutypaste.com/wp-content/uploads/2019/01/terracota36271819222.jpg"
                alt=""
                className="object-cover h-full w-full"
              />
            </figure>
          </Link>
        ))}
      </section>
    </>
  );
}

export default Profile;

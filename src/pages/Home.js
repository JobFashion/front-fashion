import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import IconFacebook from '../components/icons/IconFacebook';
import IconLinkedin from '../components/icons/IconLinkedin';
import { users } from '../services/dataMock';
import { getPosts } from '../store/post/postSlice';

function Home() {
  const { loading, posts } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  // console.log(loading, posts, error);
  if (loading) {
    return <div className="block text-center mt-12">Cargando...</div>;
  }

  return (
    <div className="flex gap-4">
      <div className="w-full md:w-2/5">
        {posts.length > 0 ? posts.map((item) => <Card key={item._id} item={item} />) : 'cargando...'}
      </div>
      <div className="relative hidden md:block pt-24 w-3/5">
        <SideFooter />
      </div>
    </div>
  );
}

function SideFooter() {
  return (
    <div className="sticky px-14 top-4 bottom-0">
      <h4 className="text-sm px-4 mb-14">Sugerencias para ti</h4>
      {users.map((item, idx) => {
        return <HeaderCard key={idx} {...item} fnc={true} />;
      })}
      {/* footer */}
      <div className="px-4">
        <ul className="flex space-x-4 mt-24 text-xs uppercase font-light flex-wrap">
          <li>Contacto</li>
          <li>Terminos y Condiciones</li>
          <li>Privacidad</li>
          <li>Quienes Somos</li>
        </ul>
        <div className="flex justify-between items-center mt-5 text-[#F49CC0]">
          <p className="font-medium text-xs uppercase">© 2022. fashion like</p>
          <div className="flex justify-center space-x-4 items-center">
            <Link to="/" className="hover:opacity-75 transition-opacity">
              <IconFacebook />
            </Link>
            <Link to="/" className="hover:opacity-75 transition-opacity">
              <IconLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

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
        <a href="#s" className="text-xs self-center hover:text-pink-500 text-[#2D33C8D9]">
          Seguir
        </a>
      )}
    </div>
  );
}

export default Home;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../../components/Card';
import SideFooter from './components/SideFooter';

import { getPosts } from '../../store/post/postSlice';

function Home() {
  const { loading, posts } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

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

export default Home;

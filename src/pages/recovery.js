import { useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../components/icons/Spinner';

import Header from '../components/layout/Header';
import InputForm from '../components/ui/InputForm';

export default function Recovery() {
  // const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState('');
  const [isSubmitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setErrors('Este servicio aun no esta disponible');
    }, 1500);
  };

  return (
    <>
      <Header />
      <h2 className="text-[22px] font-semibold text-center mt-14">Recuperación de contraseña</h2>
      <p className="max-w-xs md:max-w-none mx-auto text-sm mt-6 text-center">
        Te enviaremos un link a tu email para que puedas cambiar tu contraseña e iniciar sesión.
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-xs w-full mx-auto space-y-8 md:space-y-12 mt-6 md:mt-12"
      >
        <InputForm name="email" placeholder="Email" value={email} setValue={setEmail} errors={errors} />
        <div className="inline-flex justify-center">
          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full md:w-auto px-8 py-3 h-[50px] text-lg font-semibold text-white uppercase rounded-2xl md:rounded-[20px] md:py-1 md:h-[40px] bg-main-rosa hover:opacity-75 active:scale-95 transition-all disabled:opacity-50 disabled:pointer-events-none select-none"
          >
            <Spinner disabled={isSubmitting} />
            <span>CONFIRMAR</span>
          </button>
        </div>
      </form>
      <div className="text-center mt-6 md:mt-8 font-medium text-xs md:text-sm space-y-3 md:space-y-5">
        <p>
          <Link to="/login" className="ml-1 hover:opacity-75 transition-opacity">
            Volver
          </Link>
        </p>
      </div>
    </>
  );
}

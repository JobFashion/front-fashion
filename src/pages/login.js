import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authUser } from '../services/auth';

import Header from '../components/layout/Header';
import InputForm from '../components/ui/InputForm';

// TODO: pasar a formik
export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');
  const [isSubmitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    authUser({ email, password }, 'login')
      .then((resp) => resp.json())
      .then((data) => {
        setSubmitting(false);
        if (data?.status === 400) {
          setErrors(data.message || data.errors);
          return;
        }
        setErrors(false);
        console.log(data);
        navigate('/');
      })
      .catch((err) => console.log(err))
      .finally(() => {});
  };

  return (
    <>
      <Header subtitle="no te pierdas el look del día" />
      <h2 className="text-[22px] font-semibold text-center mt-14 md:hidden">
        Iniciar sesión
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-xs w-full mx-auto space-y-8 md:space-y-12 mt-12 md:mt-24"
      >
        <InputForm
          name="email"
          placeholder="Email"
          value={email}
          setValue={setEmail}
          errors={errors}
          required
        />
        <InputForm
          name="password"
          placeholder="Contraseña"
          value={password}
          required
          setValue={setPassword}
          errors={errors}
        />

        <div className="inline-flex justify-center">
          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full md:w-auto px-8 py-3 h-[50px] text-lg font-semibold text-white uppercase rounded-2xl md:rounded-[20px] md:py-1 md:h-[40px] bg-[#E063A3] hover:opacity-75 active:scale-95 transition-all disabled:opacity-50 disabled:pointer-events-none select-none"
          >
            Iniciar Sesión
          </button>
        </div>
      </form>
      <div className="text-center mt-6 md:mt-8 font-medium text-xs md:text-sm space-y-3 md:space-y-5">
        <p>
          ¿Olvidaste tu contraseña?
          <Link to="/recovery" className="text-[#E063A3] md:font-semibold ml-1">
            Ingresá aquí.
          </Link>
        </p>
        <p>
          ¿No tienes una cuenta?
          <Link to="/register" className="text-[#E063A3] md:font-semibold ml-1">
            Registrate aquí.
          </Link>
        </p>
      </div>
    </>
  );
}

import { useEffect } from 'react';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login, reset } from '../store/auth/authSlice';

import Header from '../components/layout/Header';
import InputForm from '../components/ui/InputForm';
import Spinner from '../components/icons/Spinner';

const validate = (values) => {
  const errors = {};
  // similares
  const forEmpty = 'Necesitamos que completes este campo';

  if (!values.email) {
    errors.email = forEmpty;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Debes ingresar un email válido';
  }

  if (!values.password) {
    errors.password = forEmpty;
  }

  return errors;
};

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });

  useEffect(() => {
    if (isError) {
      if (!Array.isArray(isError)) {
        formik.setFieldError('email', message);
        formik.setFieldError('password', message);
      }
    }
    if (isSuccess || user) {
      navigate('/home');
    }

    dispatch(reset());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  return (
    <>
      <Header subtitle="no te pierdas el look del día" />
      <h2 className="text-[22px] font-semibold text-center mt-14 md:hidden">Iniciar sesión</h2>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col max-w-xs w-full mx-auto space-y-8 md:space-y-12 mt-12 md:mt-24"
      >
        <InputForm name="email" placeholder="Email" formikInput={formik} />
        <InputForm name="password" placeholder="Contraseña" formikInput={formik} />

        <div className="inline-flex justify-center">
          <button
            disabled={!formik.isValid || isLoading}
            type="submit"
            className="w-full md:w-auto px-8 py-3 h-[50px] text-lg font-semibold text-white uppercase rounded-2xl md:rounded-[20px] md:py-1 md:h-[40px] bg-main-rosa hover:opacity-75 active:scale-95 transition-all disabled:opacity-50 disabled:pointer-events-none select-none"
          >
            <Spinner disabled={isLoading} />
            <span>Iniciar Sesión</span>
          </button>
        </div>
      </form>
      <div className="text-center mt-6 md:mt-8 mb-10 font-medium text-xs md:text-sm space-y-3 md:space-y-5">
        <p>
          ¿Olvidaste tu contraseña?
          <Link to="/recovery" className="text-main-rosa md:font-semibold ml-1 hover:opacity-75 transition-opacity">
            Ingresá aquí.
          </Link>
        </p>
        <p>
          ¿No tienes una cuenta?
          <Link to="/register" className="text-main-rosa md:font-semibold ml-1 hover:opacity-75 transition-opacity">
            Registrate aquí.
          </Link>
        </p>
      </div>
    </>
  );
}

import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { register, reset } from '../../store/auth/authSlice';

import InputForm from './InputForm';
import Spinner from '../icons/Spinner';
import { useEffect } from 'react';

function getAge(dateFromInput) {
  const today = new Date();
  const birthDate = new Date(dateFromInput);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
  return age;
}

const validate = (values) => {
  const errors = {};
  // similares
  const forEmpty = 'Necesitamos que completes este campo';

  const stringAlpha = /^[a-zA-Z ]+$/; ///[A-Za-z\s]*/
  if (!values.name) {
    errors.name = forEmpty;
  } else if (values.name.length > 25 || values.name.length < 3) {
    errors.name = 'Debe contener entre 3 y 15 caracteres';
  } else if (!stringAlpha.test(values.name)) {
    errors.name = 'Debe contener solo caracteres alfabéticos';
  }

  if (!values.surname) {
    errors.surname = forEmpty;
  } else if (values.surname.length > 25 || values.surname.length < 3) {
    errors.surname = 'Debe contener entre 3 y 15 caracteres';
  } else if (!stringAlpha.test(values.surname)) {
    errors.surname = 'Debe contener solo caracteres alfabéticos';
  }

  if (!values.email) {
    errors.email = forEmpty;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Debes ingresar un email válido';
  }

  if (!values.birthDate) {
    errors.birthDate = forEmpty;
  } else if (getAge(values.birthDate) < 18) {
    errors.birthDate = 'Debes ser mayor de edad para registrarte';
  } else if (getAge(values.birthDate) > 81) {
    errors.birthDate = 'Se requiere una edad menor o igual a 80 años';
  }

  const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/gm; ///(?=.*[0-9])/;
  if (!values.password) {
    errors.password = forEmpty;
  } else if (values.password.length < 8) {
    errors.password = 'La contraseña debe tener al menos 8 caracteres';
  } else if (!passRegex.test(values.password)) {
    errors.password = 'Mínimo 8 caracteres, al menos una letra y un número';
  }

  if (values.password && values.repassword) {
    if (values.password !== values.repassword) {
      errors.repassword = 'Las contraseñas no coinciden';
    }
  }

  return errors;
};

function RegisterForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      birthDate: '',
      email: '',
      password: '',
      repassword: '',
    },
    validate,
    onSubmit: (values) => {
      const { repassword, ...dataBody } = values;
      dispatch(register(dataBody));
    },
  });

  useEffect(() => {
    if (isError) {
      if (!Array.isArray(isError)) {
        formik.setFieldError('email', message);
      }
    }
    if (isSuccess || user) {
      navigate('/home');
    }

    dispatch(reset());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  //TODO: Agregar el cargando y mostrar el componente Popup 5 seg que el registro fue completo y redig
  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col max-w-xs md:max-w-xl w-full mx-auto space-y-8 mt-8 md:space-y-12 md:mt-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7 gap-x-10 md:gap-y-12">
          <InputForm name="name" placeholder="Nombre" formikInput={formik} />
          <InputForm name="surname" placeholder="Apellido" formikInput={formik} />
          <InputForm name="email" placeholder="Email" formikInput={formik} />
          <InputForm
            name="birthDate"
            placeholder="Fecha de Nacimiento"
            formikInput={formik}
          />
          <InputForm name="password" placeholder="Contraseña" formikInput={formik} />
          <InputForm
            name="repassword"
            placeholder="Confirmar contraseña"
            formikInput={formik}
            formikCheck
          />
        </div>
        <div className="inline-flex justify-center">
          <button
            disabled={isLoading || !formik.isValid}
            type="submit"
            className="w-full md:w-auto px-8 py-3 h-[50px] text-lg font-semibold text-white uppercase rounded-2xl md:rounded-[20px] md:py-0 md:h-[40px] bg-[#E063A3] hover:opacity-75 active:scale-95 transition-all disabled:opacity-50 disabled:pointer-events-none select-none"
          >
            <Spinner disabled={isLoading} />
            <span>Crear Cuenta</span>
          </button>
        </div>
      </form>
    </>
  );
}

export default RegisterForm;

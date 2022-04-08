import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import { authUser } from '../../services/auth';
import InputForm from './InputForm';

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = 'El campo es necesario';
  } else if (values.name.length > 15) {
    errors.name = 'Debe contener menos de 15 caracteres';
  }

  if (!values.surname) {
    errors.surname = 'El campo es necesario';
  } else if (values.surname.length > 15) {
    errors.surname = 'Debe contener menos de 15 caracteres';
  }

  if (!values.birthDate) {
    errors.birthDate = 'El campo es necesario';
  }

  const passwordRegex = /(?=.*[0-9])/;
  if (!values.password) {
    errors.password = 'El campo es necesario';
  } else if (values.length < 6) {
    errors.password = 'La contraseña debe tener 6 caracteres.';
  } else if (!passwordRegex.test(values.password)) {
    errors.password = 'Contraseña invalida. Debe contener un número.';
  }

  if (!values.email) {
    errors.email = 'El campo es necesario';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'El email es invalido';
  }

  if (values.password && values.repassword) {
    if (values.password !== values.repassword) {
      errors.repassword = 'La Contraseña no coincide';
    }
  }

  return errors;
};

function RegisterForm() {
  const navigate = useNavigate();

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
    onSubmit: (values, formikBag) => {
      const { repassword, ...dataBody } = values;
      formikBag.setSubmitting(true);
      console.log('data ', dataBody);
      authUser(dataBody, 'register')
        .then((resp) => resp.json())
        .then((data) => {
          formikBag.setSubmitting(false);
          if (data?.status === 400 && data.message) {
            if (data.message) {
              formikBag.setFieldError('email', data.message);
              return;
            }
            console.log(data.errors);
            return;
          }
          console.log(data);
          navigate('/success');
        })
        .catch((err) => console.log(err));
    },
  });

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
          />
        </div>
        <div className="inline-flex justify-center">
          <button
            disabled={formik.isSubmitting}
            type="submit"
            className="w-full md:w-auto px-8 py-3 h-[50px] text-lg font-semibold text-white uppercase rounded-2xl md:rounded-[20px] md:py-1 md:h-[40px] bg-[#E063A3] hover:opacity-75 active:scale-95 transition-all disabled:opacity-50 disabled:pointer-events-none select-none"
          >
            Crear Cuenta
          </button>
        </div>
      </form>
    </>
  );
}

export default RegisterForm;

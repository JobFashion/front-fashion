import { useNavigate } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Swal from 'sweetalert2';

import { icons } from '../../utils/assetsLoader';
import { REGEX_MAIL, getAge } from '../../utils/utils';
import { InvalidError } from '../shared/errors/InvalidError';
import { authUser } from '../../services/auth';

export function Register() {
  const navigate = useNavigate();

  const initialValues = {
    name: '',
    surname: '',
    email: '',
    password: '',
    verifyPassword: '',
    birthDate: '',
  };

  const successAlert = () => {
    let timerInterval;
    Swal.fire({
      title: '¡Te has registrado correctamente!',
      html: 'En unos instantes ingresarás a nuestro sitio web',
      timer: 2000,
      timerProgressBar: true,
      color: '#1B1616',
      background: '#FFEFC6',
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector('b');
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        navigate('/');
      }
    });
  };

  const errorAlert = () => {
    Swal.fire({
      icon: 'error',
      title: 'Algo ha salido mal',
      text: 'Intenta nuevamente',
    });

    Swal.fire({
      title: 'Algo ha salido mal, intenta nuevamente',
      text: 'Serás redirigido a la página principal',
      icon: 'error',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Entendido',
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/');
      }
    });
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);

    try {
      const { name, surname, email, birthDate, password } = values;

      const payload = {
        name,
        surname,
        email,
        perfilURL: 'null',
        birthDate,
        password,
      };

      authUser(payload)
        .then((res) => {
          if (res.status === 201) {
            successAlert();
          } else {
            errorAlert();
          }
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (err) {
      console.error(err);
    }
  };

  const styles = {
    field: 'w-full mb-1 flex flex-col',
    input:
      'h-11 w-full border border-[#887675] px-3 py-1 pb-2 rounded-2xl focus:outline-none mb-[1px]',
    button: 'mb-3 bg-[#E063A3] text-white uppercase font-semibold w-full py-3 rounded-xl',
    passwordInput: ' bg-no-repeat bg-[center_right_1rem]',
    form: 'flex flex-col max-w-xs w-full mx-auto space-y-6 md:space-y-8 mt-12 md:mt-24',
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={(values) => {
        const errors = {};

        if (!values.name) errors.name = 'Necesitamos que completes este campo';
        if (!values.surname) errors.surname = 'Necesitamos que completes este campo';
        if (!values.email) errors.email = 'Necesitamos que completes este campo';
        if (!values.password) errors.password = 'Necesitamos que completes este campo';
        if (!values.verifyPassword)
          errors.verifyPassword = 'Necesitamos que completes este campo';
        if (!values.birthDate) errors.birthDate = 'Necesitamos que completes este campo';

        if (!REGEX_MAIL.test(values.email))
          errors.email = 'Debes ingresar un email válido';
        if (values.verifyPassword !== values.password)
          errors.verifyPassword = 'Las contraseñas no coinciden';

        if (values.password.length <= 7)
          errors.password = 'Mínimo 8 caracteres, al menos una letra y un número';
        if (!/\d/.test(values.password) || !/[a-zA-Z]/.test(values.password))
          errors.password = 'Mínimo 8 caracteres, al menos una letra y un número';

        if (/[^A-Za-z]/.test(values.name))
          errors.name = 'No puede contener caracteres especiales o alfanuméricos';
        if (/[^A-Za-z]/.test(values.surname))
          errors.surname = 'No puede contener caracteres especiales o alfanuméricos';

        if (getAge(values.birthDate) < 18)
          errors.birthDate = 'Debes ser mayor de edad para registrarte';

        return errors;
      }}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors, values }) => {
        const check =
          !errors.name &&
          !errors.surname &&
          !errors.email &&
          !errors.password &&
          !errors.verifyPassword &&
          !errors.birthDate &&
          values.birthDate &&
          values.email &&
          values.name &&
          values.password &&
          values.surname &&
          values.verifyPassword;

        const passwordChecker =
          !errors.verifyPassword && values.verifyPassword && values.password
            ? icons.ok
            : values.verifyPassword && values.password && errors.verifyPassword
            ? icons.notOk
            : null;

        return (
          <Form className={styles.form}>
            <div className={styles.field + ' mt-2.5'}>
              <Field
                style={{ borderColor: errors.name ? 'red' : '#887675' }}
                className={styles.input}
                type="text"
                name="name"
                placeholder="Nombre"
              />
              <ErrorMessage name="name" component={InvalidError} />
            </div>

            <div className={styles.field}>
              <Field
                style={{ borderColor: errors.surname ? 'red' : '#887675' }}
                className={styles.input}
                type="text"
                name="surname"
                placeholder="Apellido"
              />
              <ErrorMessage name="surname" component={InvalidError} />
            </div>

            <div className={styles.field}>
              <Field
                style={{ borderColor: errors.birthDate ? 'red' : '#887675' }}
                className={styles.input + ' text-gray-400 birthDateRegister'}
                type="date"
                name="birthDate"
              />
              <ErrorMessage name="birthDate" component={InvalidError} />
            </div>

            <div className={styles.field}>
              <Field
                style={{ borderColor: errors.email ? 'red' : '#887675' }}
                className={styles.input}
                type="email"
                name="email"
                placeholder="Email"
              />
              <ErrorMessage name="email" component={InvalidError} />
            </div>

            <div className={styles.field}>
              <Field
                style={{
                  borderColor: errors.password ? 'red' : '#887675',
                  backgroundImage: `url(${passwordChecker})`,
                }}
                className={styles.input + styles.passwordInput}
                type="password"
                name="password"
                placeholder="Contraseña"
              />
              <ErrorMessage name="password" component={InvalidError} />
            </div>

            <div className={styles.field + ' mb-0'}>
              <Field
                style={{
                  borderColor: errors.verifyPassword ? 'red' : '#887675',
                  backgroundImage: `url(${passwordChecker})`,
                }}
                className={styles.input + styles.passwordInput}
                type="password"
                name="verifyPassword"
                placeholder="Confirmar contraseña"
              />
              <ErrorMessage name="verifyPassword" component={InvalidError} />
            </div>

            <button
              style={{ opacity: check ? 1 : 0.4 }}
              className={styles.button}
              type="submit"
              disabled={isSubmitting}
            >
              Registrarme
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

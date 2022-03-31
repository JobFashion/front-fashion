import { ErrorMessage, Field, Form, Formik } from 'formik';
// import { icons } from '../../utils/assetsLoader'
import { useRegister } from './hook/useRegister';
import Error from './VerifyComponents';

// const uriOk = `url(${icons.ok})`
// const uriNotOk = `url(${icons.notOk})`
const uriOk = '';
const uriNotOk = '';

export default function Register() {
  const { INITIAL_VALUES, handleSubmit, handleValidate, validateChecks, inputStyle } = useRegister();

  return (
    <Formik initialValues={INITIAL_VALUES} validate={handleValidate} onSubmit={handleSubmit}>
      {({ isSubmitting, errors, values }) => {
        const { check } = validateChecks({ errors, values })

        return (
          <Form className="w-[95%] flex flex-col items-center justify-center">
            <div className="w-full h-[4.3rem] mt-2.5 mb-1 flex flex-col">
              <Field
                style={{ borderColor: errors.name ? 'red' : 'black' }}
                className={inputStyle}
                type="text"
                name="name"
                placeholder="Nombre"
              />
              <ErrorMessage name="name" component={Error} />
            </div>

            <div className="w-full h-[4.3rem] mb-1 flex flex-col">
              <Field
                style={{ borderColor: errors.surname ? 'red' : 'black' }}
                className={inputStyle}
                type="text"
                name="surname"
                placeholder="Apellido"
              />
              <ErrorMessage name="surname" component={Error} />
            </div>

            <div className="w-full h-[4.3rem] mb-1 flex flex-col">
              <Field
                style={{ borderColor: errors.birthDate ? 'red' : 'black' }}
                className={inputStyle + ' text-gray-400 birthDateRegister'}
                type="date"
                name="birthDate"
              />
              <ErrorMessage name="birthDate" component={Error} />
            </div>

            <div className="w-full h-[4.3rem] mb-1 flex flex-col">
              <Field
                style={{ borderColor: errors.email ? 'red' : 'black' }}
                className={inputStyle}
                type="email"
                name="email"
                placeholder="Email"
              />
              <ErrorMessage name="email" component={Error} />
            </div>

            <div className="w-full h-[4.3rem] mb-1 flex flex-col">
              <Field
                style={{
                  borderColor: errors.password ? 'red' : 'black',
                  backgroundImage:
                    !errors.verifyPassword && values.verifyPassword && values.password
                      ? uriOk
                      : values.verifyPassword && values.password && errors.verifyPassword
                        ? uriNotOk
                        : null
                }}
                className={inputStyle + ' bg-no-repeat bg-[center_right_1rem]'}
                type="password"
                name="password"
                placeholder="Contraseña"
              />
              <ErrorMessage name="password" component={Error} />
            </div>

            <div className="w-full h-[4.3rem] flex flex-col">
              <Field
                style={{
                  borderColor: errors.verifyPassword ? 'red' : 'black',
                  backgroundImage:
                    !errors.verifyPassword && values.verifyPassword && values.password
                      ? uriOk
                      : values.verifyPassword && values.password && errors.verifyPassword
                        ? uriNotOk
                        : null
                }}
                className={inputStyle + ' bg-no-repeat bg-[center_right_1rem]'}
                type="password"
                name="verifyPassword"
                placeholder="Confirmar contraseña"
              />
              <ErrorMessage name="verifyPassword" component={Error} />
            </div>

            <button
              style={{ opacity: check ? 1 : 0.4 }}
              className="mb-3 bg-[#E063A3] text-white uppercase font-semibold w-full py-3 rounded-xl"
              type="submit"
              disabled={isSubmitting}
            >
              Registrarme
            </button>
          </Form>
        )
      }}
    </Formik>
  )
}

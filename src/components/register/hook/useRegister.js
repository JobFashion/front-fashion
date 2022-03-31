import { getAge } from '../../../utils/utils';
const REGEX_MAIL = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const useRegister = () => {
  const validateChecks = ({ errors, values }) => {
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
      values.verifyPassword

    return { check }
  }

  const INITIAL_VALUES = {
    name: '',
    surname: '',
    email: '',
    password: '',
    verifyPassword: '',
    birthDate: ''
  }

  const handleValidate = (values) => {
    const errors = {}

    if (!values.name) errors.name = 'Necesitamos que completes este campo'
    if (!values.surname) errors.surname = 'Necesitamos que completes este campo'
    if (!values.email) errors.email = 'Necesitamos que completes este campo'
    if (!values.password) errors.password = 'Necesitamos que completes este campo'
    if (!values.verifyPassword) errors.verifyPassword = 'Necesitamos que completes este campo'
    if (!values.birthDate) errors.birthDate = 'Necesitamos que completes este campo'

    if (!REGEX_MAIL.test(values.email)) errors.email = 'Debes ingresar un email válido'
    if (values.verifyPassword !== values.password) {
      errors.verifyPassword = 'Las contraseñas no coinciden'
    }

    if (values.password.length <= 7) {
      errors.password = 'Mínimo 8 caracteres, al menos una letra y un número'
    }
    if (!/\d/.test(values.password) || !/[a-zA-Z]/.test(values.password)) {
      errors.password = 'Mínimo 8 caracteres, al menos una letra y un número'
    }

    if (/[^A-Za-z]/.test(values.name)) {
      errors.name = 'No puede contener caracteres especiales o alfanuméricos'
    }
    if (/[^A-Za-z]/.test(values.surname)) {
      errors.surname = 'No puede contener caracteres especiales o alfanuméricos'
    }

    if (getAge(values.birthDate) < 18) { errors.birthDate = 'Debes ser mayor de edad para registrarte' }

    return errors
  }

  const handleSubmit = (values, { setSubmitting, setErrors }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      setSubmitting(false)
    }, 400)
  }
  const inputStyle = 'h-11 w-full border border-black px-3 pt-1 pb-2 rounded-2xl focus:outline-[#E063A3] mb-[1px]'

  return { handleSubmit, INITIAL_VALUES, handleValidate, validateChecks, inputStyle }
}

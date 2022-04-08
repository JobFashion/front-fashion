import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { authUser } from '../../services/auth';
import InputForm from './InputForm';

function RegisterForm() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');

  const [errors, setErrors] = useState('');
  const [isSubmitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    if (password !== repassword) return;
    authUser({ name, surname, birthDate, email, password }, 'register')
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
      .catch((err) => console.log(err));
  };
  // console.log(errors);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col max-w-xs md:max-w-xl w-full mx-auto space-y-8 mt-8 md:space-y-12 md:mt-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7 gap-x-10 md:gap-y-12">
        <InputForm
          name="name"
          placeholder="Nombre"
          value={name}
          setValue={setName}
          errors={errors}
        />
        <InputForm
          name="surname"
          placeholder="Apellido"
          value={surname}
          setValue={setSurname}
          errors={errors}
        />
        <InputForm
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          setValue={setEmail}
          errors={errors}
        />
        <InputForm
          name="birthDate"
          type="date"
          placeholder="Fecha de Nacimiento"
          value={birthDate}
          setValue={setBirthDate}
          errors={errors}
        />
        <InputForm
          type="password"
          name="password"
          placeholder="Contraseña"
          value={password}
          setValue={setPassword}
          errors={errors}
        />
        <InputForm
          type="password"
          name="repassword"
          placeholder="Confirmar contraseña"
          value={repassword}
          setValue={setRepassword}
          errors={password !== repassword ? 'El password debe coincidir' : ''}
        />
      </div>
      <div className="inline-flex justify-center">
        <button
          disabled={isSubmitting}
          type="submit"
          className="w-full md:w-auto px-8 py-3 h-[50px] text-lg font-semibold text-white uppercase rounded-2xl md:rounded-[20px] md:py-1 md:h-[40px] bg-[#E063A3] hover:opacity-75 active:scale-95 transition-all disabled:opacity-50 disabled:pointer-events-none select-none"
        >
          Crear Cuenta
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;

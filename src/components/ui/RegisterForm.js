import { useState } from 'react';
import { authUser } from '../../services/auth';
import warning from '../../assets/icons/warning.svg';

function Input({ name, placeholder, value, setValue }) {
  return (
    <div className="relative">
      <label forHtml={name} className="hidden absolute -top-5 left-2 text-xs md:block">
        {placeholder}
      </label>
      <input
        type={name === 'email' ? 'email' : 'text'}
        name={name}
        id={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        className="w-full px-4 py-3 h-[45px] font-normal rounded-2xl md:rounded-lg border border-[#887675] focus:outline-none focus:ring-2 focus:ring-[#E063A3] focus:border-[#E063A3]"
      />
      <p className="absolute -bottom-[18px] md:-bottom-5 ml-2 text-[10px] font-light text-[#F0281D] flex items-center gap-1">
        <img src={warning} alt="incorrecto" className="inline-flex md:hidden" />
        <span>Este campo es obligatorio para el registro</span>
      </p>
    </div>
  );
}

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    authUser({ email, password }, 'register')
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col max-w-xs md:max-w-xl w-full mx-auto space-y-8 mt-8 md:space-y-12 md:mt-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7 gap-x-10 md:gap-y-12">
        <Input name="email" placeholder="Email" value="" setValue />
        <Input name="email" placeholder="Email" value="" setValue />
        <Input name="email" placeholder="Email" value="" setValue />
        <Input name="email" placeholder="Email" value="" setValue />
        <Input name="email" placeholder="Email" value="" setValue />
        <Input name="email" placeholder="Email" value="" setValue />
      </div>
      <div className="inline-flex justify-center">
        <button
          type="submit"
          className="w-full md:w-auto px-8 py-3 h-[50px] text-lg font-semibold text-white uppercase rounded-2xl md:rounded-[20px] md:py-1 md:h-[40px] bg-[#E063A3] hover:opacity-75 active:scale-95 transition-all"
        >
          Crear Cuenta
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;

import { useState } from 'react';
import warning from '../../assets/icons/warning.svg';
import ok from '../../assets/icons/ok.svg';
import not_ok from '../../assets/icons/not_ok.svg';
import IconEye from '../icons/IconEye';
import IconEyeOff from '../icons/IconEyeOff';

function InputForm({ name, placeholder, value, setValue, required, errors, formikInput = false, formikCheck }) {
  const [show, setShow] = useState(false);

  const type = {
    email: 'email',
    password: show ? 'text' : 'password',
    repassword: show ? 'text' : 'password',
    birthDate: 'date',
  };

  if (formikInput) {
    const iconRePass = () => {
      if (!formikInput.errors.repassword && formikInput.values.repassword && formikInput.values.password) {
        return ok;
      } else if (formikInput.errors.repassword && formikInput.values.repassword && formikInput.values.password) {
        return not_ok;
      } else {
        return null;
      }
    };

    return (
      <div className="relative">
        <label htmlFor={name} className="hidden absolute -top-5 left-2 text-xs md:block">
          {placeholder}
        </label>

        <div className="relative">
          <input
            id={name}
            type={type[name] ? type[name] : 'text'}
            required={required}
            placeholder={placeholder}
            {...formikInput.getFieldProps(name)}
            className={`w-full px-4 py-3 h-[45px] font-normal rounded-2xl md:rounded-lg border ${
              formikInput.touched[name] && formikInput.errors[name] ? 'border-third-rojo' : 'border-secondary-sombra'
            } focus:outline-none focus:ring-2  focus:ring-main-rosa focus:border-main-rosa placeholder:text-slate-400`}
          />
          {formikCheck && iconRePass() && (
            <div className="absolute top-4 right-3">
              <img src={iconRePass()} alt="todo not ok" />
            </div>
          )}
        </div>
        {name === 'password' && (
          <span
            className="absolute top-[10px] right-3 cursor-pointer text-main-rosa hover:opacity-75 transition-opacity select-none"
            onClick={() => setShow(!show)}
          >
            {show ? <IconEyeOff /> : <IconEye />}
          </span>
        )}
        {formikInput.touched[name] && formikInput.errors[name] ? (
          <p className="absolute -bottom-[18px] md:-bottom-5 left-2 text-[10px] font-light text-third-rojo flex items-center gap-1 w-full">
            <img src={warning} alt="incorrecto" className="inline-flex md:hidden" />
            <span className="overflow-hidden overflow-ellipsis whitespace-nowrap">{formikInput.errors[name]}</span>
          </p>
        ) : null}
      </div>
    );
  }

  const handleError = () => {
    if (Array.isArray(errors) && errors.length > 0) {
      const textError = errors.find((item) => item.param === name);
      return textError?.msg || '';
    } else {
      return errors;
    }
  };
  const err = handleError() || '';

  return (
    <div className="relative">
      <label htmlFor={name} className="hidden absolute -top-5 left-2 text-xs md:block">
        {placeholder}
      </label>
      <input
        type={type[name] ? type[name] : 'text'}
        id={name}
        name={name}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        className={`w-full px-4 py-3 h-[45px] font-normal rounded-2xl md:rounded-lg border ${
          err ? 'border-third-rojo' : 'border-secondary-sombra'
        } focus:outline-none focus:ring-2  focus:ring-main-rosa focus:border-main-rosa`}
      />
      {err && (
        <p className="absolute -bottom-[18px] md:-bottom-5 left-2 text-[10px] font-light text-thrborder-third-rojo flex items-center gap-1 w-full">
          <img src={warning} alt="incorrecto" className="inline-flex md:hidden" />
          <span className="overflow-hidden overflow-ellipsis whitespace-nowrap">
            {err ? err : 'Este campo es obligatorio'}
          </span>
          {/* *Contraseña o correo incorrectos, por favor verifique y vuelva a ingresar */}
        </p>
      )}
    </div>
  );
}

export default InputForm;

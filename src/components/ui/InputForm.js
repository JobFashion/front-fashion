import warning from '../../assets/icons/warning.svg';
import ok from '../../assets/icons/ok.svg';
import not_ok from '../../assets/icons/not_ok.svg';

function InputForm({
  name,
  placeholder,
  value,
  setValue,
  required,
  errors,
  formikInput = false,
  formikCheck,
}) {
  const type = {
    email: 'email',
    password: 'password',
    repassword: 'password',
    birthDate: 'date',
  };

  if (formikInput) {
    const iconRePass = () => {
      if (
        !formikInput.errors.repassword &&
        formikInput.values.repassword &&
        formikInput.values.password
      ) {
        return ok;
      } else if (
        formikInput.errors.repassword &&
        formikInput.values.repassword &&
        formikInput.values.password
      ) {
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
              formikInput.touched[name] && formikInput.errors[name]
                ? 'border-[#F0281D]'
                : 'border-[#887675]'
            } focus:outline-none focus:ring-2  focus:ring-[#E063A3] focus:border-[#E063A3] placeholder:text-slate-400`}
          />
          {formikCheck && iconRePass() && (
            <div className="absolute top-4 right-3">
              <img src={iconRePass()} alt="todo not ok" />
            </div>
          )}
        </div>

        {formikInput.touched[name] && formikInput.errors[name] ? (
          <p className="absolute -bottom-[18px] md:-bottom-5 left-2 text-[10px] font-light text-[#F0281D] flex items-center gap-1 w-full">
            <img src={warning} alt="incorrecto" className="inline-flex md:hidden" />
            <span className="overflow-hidden overflow-ellipsis whitespace-nowrap">
              {formikInput.errors[name]}
            </span>
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
          err ? 'border-[#F0281D]' : 'border-[#887675]'
        } focus:outline-none focus:ring-2  focus:ring-[#E063A3] focus:border-[#E063A3]`}
      />
      {err && (
        <p className="absolute -bottom-[18px] md:-bottom-5 left-2 text-[10px] font-light text-[#F0281D] flex items-center gap-1 w-full">
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

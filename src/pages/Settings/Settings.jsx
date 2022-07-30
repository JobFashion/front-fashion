import Spinner from '../../components/icons/Spinner';
import InputForm from '../../components/ui/InputForm';

function Settings() {
  const isLoading = false;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form');
  };
  return (
    <section className="bg-white flex relative overflow-y-hidden">
      <div className="w-72 hidden md:block border-r border-secondary-gris-claro pt-20 pb-14 absolute top-0 left-0 md:relative bg-white z-10 h-full overflow-y-auto">
        <ul className="flex flex-col space-y-8">
          <li className="">
            <a
              href="#s"
              className="flex  text-black font-medium border-l-2 border-black pl-8 pr-4 py-2 w-full hover:text-black transition-colors"
            >
              Editar perfil
            </a>
          </li>
          <li>
            <a
              href="#s"
              className="flex pl-8 pr-4 py-2 w-full text-secondary-sombra hover:text-black transition-colors"
            >
              Cambiar contraseña
            </a>
          </li>
          <li>
            <a
              href="#s"
              className="flex pl-8 pr-4 py-2 w-full text-secondary-sombra hover:text-black transition-colors"
            >
              Notificaciones por Email
            </a>
          </li>
          <li>
            <a
              href="#s"
              className="flex pl-8 pr-4 py-2 w-full text-secondary-sombra hover:text-black transition-colors"
            >
              Notificaciones push
            </a>
          </li>
          <li>
            <a
              href="#s"
              className="flex pl-8 pr-4 py-2 w-full text-secondary-sombra hover:text-black transition-colors"
            >
              Administrar contactos
            </a>
          </li>
          <li>
            <a
              href="#s"
              className="flex pl-8 pr-4 py-2 w-full text-secondary-sombra hover:text-black transition-colors"
            >
              Privacidad y seguridad
            </a>
          </li>
          <li>
            <a
              href="#s"
              className="flex pl-8 pr-4 py-2 w-full text-secondary-sombra hover:text-black transition-colors"
            >
              Actividad de inicio de sesión
            </a>
          </li>
          <li>
            <a
              href="#s"
              className="flex pl-8 pr-4 py-2 w-full text-secondary-sombra hover:text-black transition-colors"
            >
              Ayuda
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-1 pt-20 pb-14">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col max-w-xs w-full mx-auto px-4 sm:px-0 md:ml-40 space-y-8 md:space-y-12"
        >
          <InputForm name="name" placeholder="Nombre" />
          <InputForm name="email" placeholder="Email" />
          <InputForm name="phone" placeholder="Numero de teléfono" />
          <InputForm name="gender" placeholder="Género" />
          <div className="inline-flex justify-center">
            <button
              disabled={isLoading}
              type="submit"
              className="w-full md:w-auto px-8 py-3 h-[50px] text-lg font-semibold text-white uppercase rounded-2xl md:rounded-[20px] md:py-1 md:h-[40px] bg-main-rosa hover:opacity-75 active:scale-95 transition-all disabled:opacity-50 disabled:pointer-events-none select-none"
            >
              <Spinner disabled={isLoading} />
              <span>Enviar</span>
            </button>
          </div>
          <p className="text-xs text-secondary-texto-ayuda">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tenetur, tempora dolorem quasi
            voluptates sapiente sit, molestiae illo saepe ipsum quae perferendis adipisci sint nam incidunt, quia
            voluptatum recusandae aut.
          </p>
        </form>
      </div>
    </section>
  );
}

export default Settings;

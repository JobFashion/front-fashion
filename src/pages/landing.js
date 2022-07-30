import { Link } from 'react-router-dom';
import logo from '../assets/icons/logo.svg';
import Footer from '../components/layout/Footer';

function ButtonsAuth(props) {
  return (
    <div className="hidden md:flex gap-4" {...props}>
      <Link
        to="/register"
        className="bg-main-rosa rounded-[20px] py-[6px] text-center px-6 uppercase font-semibold text-white border border-main-rosa"
      >
        Crear Cuenta
      </Link>
      <Link
        to="/login"
        className="rounded-[20px] py-[6px] px-6 uppercase font-semibold text-main-rosa border border-main-rosa"
      >
        Iniciar Sesion
      </Link>
    </div>
  );
}

export default function Landing() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="relative flex flex-col flex-1">
          <div className="container mx-auto px-6 md:px-4 flex items-center flex-col md:flex-row justify-between">
            <div className="w-[156px] mt-[62px] md:w-[123px] md:mt-8">
              <Link to="/">
                <img src={logo} alt="firulasTop" width="156px" />
              </Link>
            </div>
            <ButtonsAuth />
          </div>

          <div className="min-h-[575px] md:min-h-0 flex flex-col items-start md:justify-center px-6 pt-8 md:pt-16">
            <div className="mx-auto">
              <h1 className="max-w-[170px] md:max-w-xl text-center text-[22px] md:text-4xl leading-8 uppercase font-bold mx-auto mb-5 md:mb-7">
                ¡Te damos la bienvenida!
              </h1>
              <p className="text-sm md:text-lg leading-5 font-medium text-center md:mx-6 mb-8 max-w-xl mx-auto">
                Somos la red social sobre moda más popular del momento. Estamos para brindarte los mejores looks para
                que te veas siempre <span className="text-secondary-bordo font-bold">genial</span>.
              </p>
            </div>
            <ButtonsAuth className="flex flex-col md:hidden gap-4 mx-auto" />
          </div>

          {/* line desktop */}
          <div className="hidden md:flex absolute -bottom-16 left-0 right-0 z-10 items-end justify-items-stretch md:w-full images-responsive">
            <img
              src="./images/low-landing-left-1.png"
              className="z-20 absolute bottom-0 left-0 "
              alt="fashion woman"
              width={340}
              loading="lazy"
            />
            <img
              src="./images/low-landing-left-2.png"
              alt="fashion man"
              className="z-0 absolute bottom-0 left-[15%] -ml-[126px]"
              width={252}
              loading="lazy"
            />
            <img
              src="./images/low-landing-left-3.png"
              alt="fashion woman"
              className="z-10 absolute bottom-0 left-[25%] -ml-[156px]"
              width={366}
              loading="lazy"
            />
            <img
              src="./images/low-landing-left-4.png"
              alt="fashion woman"
              className="z-0 absolute bottom-0 left-[38%] -ml-[203px]"
              width={407}
              loading="lazy"
            />
            <img
              src="./images/low-landing-center-desk.png"
              alt="fashion woman"
              className="z-20 absolute bottom-0 left-1/2 -ml-[132px] right-1/2"
              width={264}
              loading="lazy"
            />
            <img
              src="./images/low-landing-right-1.png"
              alt="fashion woman"
              className="z-0 absolute bottom-0 right-[38%] -mr-[139px]"
              width={278}
              loading="lazy"
            />
            <img
              src="./images/low-landing-right-2.png"
              alt="fashion woman"
              className="z-10 absolute bottom-0 right-[25%] -mr-[143px]"
              width={287}
              loading="lazy"
            />
            <img
              src="./images/low-landing-right-3.png"
              alt="fashion woman"
              className="z-20 absolute bottom-0 right-[15%] -mr-[118px]"
              width={237}
              loading="lazy"
            />
            <img
              src="./images/low-landing-right-4.png"
              alt="fashion woman"
              className="z-0 absolute bottom-0 right-0"
              width={180}
              loading="lazy"
            />
          </div>

          {/* images for mobile */}
          <div className="flex md:hidden absolute -bottom-8 left-0 right-0 z-10 items-end justify-items-stretch md:w-full">
            <img
              src="./images/low-landing-1-mobile.png"
              className="z-10 absolute bottom-0 left-0"
              alt="fashion woman"
              width={201}
              loading="lazy"
            />
            <img
              src="./images/low-landing-2-mobile.png"
              alt="fashion man"
              className="z-0 absolute bottom-0 left-[37%] -ml-[110px]"
              width={219}
              loading="lazy"
            />
            <img
              src="./images/low-landing-3-mobile.png"
              alt="fashion woman"
              className="z-20 absolute bottom-0 right-[37%] -mr-[79px]"
              width={158}
              loading="lazy"
            />
            <img
              src="./images/low-landing-4-mobile.png"
              alt="fashion woman"
              className="z-0 absolute bottom-0 right-0"
              width={127}
              loading="lazy"
            />
          </div>

          {/* line subtitle */}
          <div className="absolute left-0 right-0 bottom-0 z-20 flex items-center justify-center h-[55px] md:h-12 text-xs md:text-xl font-black text-white text-center tracking-[0.25em] bg-opacity-70 bg-black">
            <span className="w-52 md:w-auto">OLVIDA LAS REGLAS. SI TE GUSTA, ÚSALO.</span>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

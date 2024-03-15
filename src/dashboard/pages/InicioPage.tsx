import { useEffect, useState } from 'react';
import { Button } from "../../components/ui/button"
import hero from "../../assets/hero.webp"
import { TestimonialSection } from '../../components/pages/inicio/TestimonialCarousel';
import { Footer } from '../../components/pages/Footer';
import { LatestMovies } from '../../components/pages/inicio/CustomSplide';
import { SectionAboutUs } from '../../components/SectionAboutUs';
import { SectionPricing } from '../../components/SectionPricing';
import { SeparatorSectionUp } from '../../components/SeparationItems';
import { SectionFooterHero } from '../../components/SectionFooterHero';

export const InicioPage = () => {

  const palabras = ["FireTV", "SmartTV", "Windows", "Roku", "AndroidTV", "Mac", "iPhone", "iPad"];

  const clasesAnimacion = [
    //'fadeIn',
    //'fadeOut',
    //'colorChange',
    //'flash'
    'glow',
    //'typewriter'
  ];

  //const [palabraActual, setPalabraActual] = useState("Dispositivo");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [palabraActual, setPalabraActual] = useState(palabras[currentIndex]);
  const [claseAnimacion, setClaseAnimacion] = useState(clasesAnimacion[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % palabras.length);
    }, 3500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    setPalabraActual(palabras[currentIndex]);

    // Cambiar la clase de animación al cambiar de palabra
    const nuevaClaseAnimacion = clasesAnimacion[currentIndex % clasesAnimacion.length];
    setClaseAnimacion(nuevaClaseAnimacion);
  }, [currentIndex]);

  return (
    <div className="flex-col md:flex">
      <div className="relative w-full bg-black h-[590px]">
        <img className="w-full h-full object-cover" src={hero} alt="Hero" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div
            className="w-full h-full bg-black bg-opacity-50 text-white text-center p-4 rounded"
            style={{ backdropFilter: 'blur(0px)' }}
          >
            <div className="w-full h-full flex flex-col items-center justify-center">
              <h2 className="hero-text lg:text-[3.5em] text-[2.5em]">El mejor contenido para su <span className={`hero-animated ${claseAnimacion}`}>{palabraActual}</span></h2>
              <div className="mt-[-12px]">
                <h2 className="hero-text lg:text-[3.5em] text-[2.5em]">
                ¡Adquiera su servicio ahora!
                </h2>
              </div>
              <div className="my-6 flex md:flex-row flex-col gap-3">
                <a href='#paquetes'>
                  <Button className='blue-primary text-white hover:bg-black rounded-full px-8 py-6'>COMPRAR AHORA</Button>
                </a>
                <a href='http://demo.spacetv.com.mx' target='_blank'>
                  <Button className='bg-red-500 text-white hover:bg-black rounded-full px-8 py-6'>SOLICITAR DEMO</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex-1 space-y-4 px-6 sm:px-16 md:px-32 lg:px-48 mt-[-48px] mb-12">
          <SectionFooterHero />
        </div>
        <LatestMovies />
        <div className="space-y-4 px-6 sm:px-16 md:px-32 lg:px-48 mt-[-48px]">
          {/* <SectionHelp /> */}
          <SectionAboutUs />
          <SectionPricing /> 
        </div>
        <SeparatorSectionUp color='blueprimary'/>
        <TestimonialSection />
        <Footer/>
      </div>
    </div>
  )
}

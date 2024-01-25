import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

interface CustomSplideProps {
    id: string;
    images: any[];
    extraClass?: string;
    perPage?: number;
  }
  
  export function CustomSplide({ id, images, extraClass, perPage }: CustomSplideProps) {
    return (
      <Splide
        id={id}
        className={extraClass}
        options={{
          type: 'loop',
          perPage: perPage,
          perMove: 1,
          pagination: false,
          autoplay: true, // Utilizar directamente la opción autoplay
        interval: 2000, // Puedes ajustar el intervalo entre diapositivas aquí
          speed: 1000,
        }}
      >
        {images.map((image, index) => (
          <SplideSlide key={index} id={`${id}-slide${index}`}>
            <img src={`http://158.69.225.52:25461${image.url.slice(1)}`} alt={`Image ${index + 1}`} />
          </SplideSlide>
        ))}
      </Splide>
    );
  }
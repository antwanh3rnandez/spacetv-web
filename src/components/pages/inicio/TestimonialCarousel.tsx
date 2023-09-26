import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Testimonial from './Testimonial';
import { TestimonialType } from '../../../interfaces/Testimoniales.interface';
import { useEffect, useState } from 'react';

type TestimonialCarouselProps = {
  testimonials: TestimonialType[];
};

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {

  const [slidePercentage, setSlidePercentage] = useState(33.33);

  const updateSlidePercentage = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 900) {
      setSlidePercentage(100);
    } else {
      setSlidePercentage(33.33);
    }
  };

  useEffect(() => {
    updateSlidePercentage();
    window.addEventListener('resize', updateSlidePercentage);
    return () => {
      window.removeEventListener('resize', updateSlidePercentage);
    };
  }, []);

  return (
    <div className="w-full h-[100%] flex items-center justify-center">
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        showStatus={false}
        centerMode={true}
        centerSlidePercentage={slidePercentage}
        autoPlay={true}
        className='w-full h-[100%]'
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-[100%] h-[100%] flex items-center justify-center">
            <Testimonial testimonial={testimonial} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;

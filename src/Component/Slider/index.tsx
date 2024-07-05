import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import '../../MyCSS.css';

type ISwiper = {
  slidesPerView?: number;
  className?: string;
  slides: {
    image?: string;

    label?: string;
    description?: string;
  }[];
};

const Swipe = (props: ISwiper) => {
  const { slides, className, slidesPerView } = props;
  const swiperProps = {
    loop: true,
    cssMode: true,
    slidesPerView: slidesPerView,
    navigation: true,
    pagination: false,
    mousewheel: true,
    keyboard: true,
    modules: [Navigation, Pagination, Mousewheel, Keyboard],
    className: 'mySwiper',
    breakpoints: {
      1024: {
        slidesPerView: slidesPerView,
      },
      768: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  };

  return (
    <div className={className}>
      <Swiper {...swiperProps}>
        {slides &&
          slides.map((slide, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={slide.image} alt={slide.image} />
                <div className="relpostion"> 
                  <div>{slide.label}</div>
                  {slide.description}
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default Swipe;

import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import '../../MyCSS.css';
import { useEffect, useState } from 'react';
import FeaturedData from '../../Module/Home/FeaturedData';

type ISwiper = {
  slidesPerView?: number;
  className?: string;
  slides?: {
    image?: string;
    label?: string;
    description?: string;
  }[];
  productArray?: {
    productImage?: string;
    productName?: string;
  }[];
  condition?:boolean
};

const Swipe = (props: ISwiper) => {
  const [currentImage, setCurrentImage] = useState<string>();
  const { slides, className, slidesPerView,productArray,condition } = props;
  const swiperProps = {
    loop: false,
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
  useEffect(() => {
    if (slides && slides.length > 0) {
      setCurrentImage(slides[0].image || '');
    }
  }, [slides]);

  const handleSlideChange = (image: string | undefined) => {
    if (image) {
      setCurrentImage(image);
    }
  };
  // console.log(currentImage);

  return (
    <div className={className}>
      {
        condition? (  <Swiper {...swiperProps}>
          {productArray &&
            productArray?.map((iteam, index) => {
              return (
                <SwiperSlide key={index}>
                  <div>
                    <FeaturedData
                      productName={iteam.productName}
                      image={iteam.productImage}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>):(
<>
{<img src={currentImage} alt={currentImage} />}
      <Swiper {...swiperProps}>
        {slides &&
          slides.map((slide, index) => {
            // console.log(slide);

            return (
              <SwiperSlide
                key={index}
                onClick={() => handleSlideChange(slide.image)}
              >
                <img src={slide.image} alt={slide.image} />
                <div className="relpostion">
                  <div>{slide.label}</div>
                  {slide.description}
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper></>
        )
      }
     
    </div>
  );
};

export default Swipe;

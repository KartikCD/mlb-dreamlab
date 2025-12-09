import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const ImageCarousel = () => {
  return (
    <div className="relative group">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        className="rounded-lg overflow-hidden"
      >
        {/* {carouselImages.map((image) => ( */}
        <SwiperSlide key={1}>
          <img
            src="/images/aboutimage1.JPG"
            className="w-full h-[500px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide key={2}>
          <img
            src="/images/aboutimage2.JPG"
            className="w-full h-[500px] object-cover"
          />
        </SwiperSlide>
        {/* ))} */}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="swiper-button-prev-custom absolute top-1/2 left-4 -translate-y-1/2 z-10 cursor-pointer p-2 bg-black/30 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-electric-blue">
        <ChevronLeft size={28} />
      </div>
      <div className="swiper-button-next-custom absolute top-1/2 right-4 -translate-y-1/2 z-10 cursor-pointer p-2 bg-black/30 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-electric-blue">
        <ChevronRight size={28} />
      </div>
    </div>
  );
};

export default ImageCarousel;

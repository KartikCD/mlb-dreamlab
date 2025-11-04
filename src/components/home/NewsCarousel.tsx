import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { newsData } from '../../data/newsData';
import NewsCard from '../news/NewsCard';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const NewsCarousel = () => {
  return (
    <div className="relative mt-16">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: '.news-carousel-next',
          prevEl: '.news-carousel-prev',
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="!pb-4" // Add padding bottom for potential pagination or shadow
      >
        {newsData.map((article, index) => (
          <SwiperSlide key={article.id} className="h-auto">
            <NewsCard article={article} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom Navigation */}
      <div className="absolute -top-20 right-0 flex items-center gap-4">
        <button className="carousel-arrow-button news-carousel-prev">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <button className="carousel-arrow-button news-carousel-next">
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default NewsCarousel;

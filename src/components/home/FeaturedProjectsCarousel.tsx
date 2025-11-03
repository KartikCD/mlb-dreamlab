import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperCore } from 'swiper';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

import { projectsData } from '../../data/projectData';
import Button from '../ui/Button';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

const FeaturedProjectsCarousel = () => {
  const navigate = useNavigate();
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePaginationClick = (index: number) => {
    if (swiperInstance) {
      swiperInstance.slideToLoop(index);
    }
  };

  return (
    <section className="relative h-screen w-full bg-background text-white">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: '.carousel-button-next',
          prevEl: '.carousel-button-prev',
        }}
        onSwiper={setSwiperInstance}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onClick={(swiper) => {
          const activeSlide = swiper.slides[swiper.activeIndex];
          const slug = activeSlide.getAttribute('data-slug');
          if (slug) {
            navigate(`/projects/${slug}`);
          }
        }}
        className="h-full w-full group"
      >
        {projectsData.map((project) => (
          <SwiperSlide key={project.id} data-slug={project.slug} className="cursor-pointer">
            <div className="relative h-full w-full">
              <img
                src={project.featuredImage}
                alt={project.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
              
              <div className="absolute inset-0 flex items-end p-8 md:p-16 lg:p-24">
                <motion.div
                  key={project.id} // Re-trigger animation on slide change
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="max-w-3xl"
                >
                  <span className="text-sm uppercase tracking-widest text-champagne-gold font-semibold">{project.category}</span>
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter my-4 text-glow">
                    {project.title}
                  </h2>
                  <p className="text-lg md:text-xl text-text-secondary font-light leading-relaxed mb-8 max-w-prose">
                    {project.excerpt}
                  </p>
                  <div onClick={(e) => e.stopPropagation()}>
                    <Button asLink to={`/projects/${project.slug}`} variant="primary">
                      Read More <ArrowRight className="inline ml-2 w-5 h-5" />
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Controls */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="container mx-auto">
          <div className="flex items-center justify-between gap-4 sm:gap-8 border-t border-white/20">
            <button className="carousel-button-prev swiper-nav-button flex-shrink-0">
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex-grow flex justify-center items-center gap-4 sm:gap-8 overflow-x-auto">
              {projectsData.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => handlePaginationClick(index)}
                  className={`custom-pagination-item ${activeIndex === index ? 'active' : ''}`}
                >
                  {project.title}
                </button>
              ))}
            </div>

            <button className="carousel-button-next swiper-nav-button flex-shrink-0">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsCarousel;

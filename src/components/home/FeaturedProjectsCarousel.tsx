import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperCore } from "swiper";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, ArrowDown } from "lucide-react";

import { projectsData } from "../../data/projectData";
import Button from "../ui/Button";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

const FeaturedProjectsCarousel = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const listContainerRef = useRef<HTMLUListElement>(null);

  const handleProjectClick = (index: number) => {
    swiperInstance?.slideToLoop(index);
  };

  // Effect to scroll the project list on desktop to keep the active item in view
  useEffect(() => {
    if (listContainerRef.current) {
      const activeItem = listContainerRef.current.children[
        activeIndex
      ] as HTMLLIElement;
      if (activeItem) {
        const { offsetLeft, offsetWidth } = activeItem;
        // Center the active item in the scrollable list
        listContainerRef.current.scrollTo({
          left:
            offsetLeft -
            listContainerRef.current.offsetWidth / 2 +
            offsetWidth / 2,
          behavior: "smooth",
        });
      }
    }
  }, [activeIndex]);

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
          nextEl: ".carousel-arrow-next",
          prevEl: ".carousel-arrow-prev",
        }}
        onSwiper={setSwiperInstance}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full w-full group"
      >
        {projectsData.map((project) => (
          <SwiperSlide key={project.id} data-slug={project.slug}>
            <div className="relative h-full w-full">
              <img
                src={project.featuredImage}
                alt={project.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>

              <div className="absolute inset-0 flex items-end p-8 md:p-16 lg:p-24 lg:pb-40">
                <motion.div
                  key={project.id} // Re-trigger animation on slide change
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="max-w-3xl"
                >
                  {/* <span className="text-sm uppercase tracking-widest text-champagne-gold font-semibold">{project.category}</span> */}
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter my-4 text-glow">
                    {project.title}
                  </h2>
                  <p className="text-lg md:text-xl text-text-secondary font-light leading-relaxed mb-8 max-w-prose">
                    {project.excerpt}
                  </p>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Controls */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-8 md:p-12">
        <div className="container mx-auto">
          {/* Mobile & Tablet Controls */}
          <div className="flex items-center justify-between gap-8 lg:hidden">
            <button className="carousel-arrow-button carousel-arrow-prev flex-shrink-0">
              <ArrowLeft className="w-6 h-6" />
            </button>
            {projectsData.length > 0 && (
              <motion.div
                key={`mobile-${activeIndex}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <Button
                  asLink
                  to={`/projects/${projectsData[activeIndex].slug}`}
                  variant="primary"
                >
                  View Project <ArrowRight className="inline ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            )}
            <button className="carousel-arrow-button carousel-arrow-next flex-shrink-0">
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>

          {/* Desktop Controls */}
          <div className="hidden lg:flex items-center justify-between gap-6">
            <button className="carousel-arrow-button carousel-arrow-prev flex-shrink-0">
              <ArrowLeft className="w-6 h-6" />
            </button>

            <div className="flex-grow overflow-hidden">
              <ul
                ref={listContainerRef}
                className="flex items-center gap-10 overflow-x-auto scrollbar-hide py-4"
              >
                {projectsData.map((project, index) => (
                  <li key={project.id} className="relative flex-shrink-0">
                    <button
                      onClick={() => handleProjectClick(index)}
                      className={`transition-colors duration-300 group pb-4 ${
                        activeIndex === index
                          ? "text-white"
                          : "text-text-secondary hover:text-white"
                      }`}
                    >
                      <span className="text-sm font-semibold tracking-wider uppercase">
                        {project.title}
                      </span>
                      <div
                        className={`absolute bottom-0 left-0 h-0.5 bg-champagne-gold transition-all duration-500 ease-out ${
                          activeIndex === index
                            ? "w-full"
                            : "w-0 group-hover:w-1/2"
                        }`}
                      ></div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {projectsData.length > 0 && (
              <motion.div
                key={`desktop-${activeIndex}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex-shrink-0"
              >
                <Button
                  asLink
                  to={`/projects/${projectsData[activeIndex].slug}`}
                  variant="primary"
                >
                  View Project <ArrowRight className="inline ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            )}

            <button className="carousel-arrow-button carousel-arrow-next flex-shrink-0">
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-48 left-1/2 -translate-x-1/2 z-20"
      >
        <ArrowDown className="w-8 h-8 text-white/70 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default FeaturedProjectsCarousel;

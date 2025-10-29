import { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import { galleryImages } from '../../data/galleryData';

const PhotoGallery = () => {
  const [index, setIndex] = useState(-1);

  const slides = galleryImages.map(({ src, width, height, alt, caption }) => ({
    src,
    width,
    height,
    title: alt,
    description: caption,
  }));

  const getGridClass = (span?: 'col' | 'row' | 'large') => {
    switch (span) {
      case 'large':
        return 'md:col-span-2 md:row-span-2';
      case 'col':
        return 'md:col-span-2';
      case 'row':
        return 'md:row-span-2';
      default:
        return '';
    }
  };

  return (
    <>
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[250px] gap-4">
          {galleryImages.map((image, i) => (
            <motion.div
              key={image.id}
              className={`group relative overflow-hidden rounded-lg cursor-pointer ${getGridClass(image.span)}`}
              onClick={() => setIndex(i)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
        plugins={[Captions]}
        captions={{
            descriptionTextAlign: 'center',
            descriptionMaxLines: 3,
        }}
        styles={{
          container: { backgroundColor: 'rgba(15, 23, 42, 0.95)' },
          icon: { color: '#FFFFFF', filter: 'drop-shadow(0 0 5px rgba(0,0,0,0.5))' },
          captionsDescription: {
            fontFamily: 'sans-serif',
            color: '#A3A3A3',
            fontSize: '1rem',
            lineHeight: '1.5rem',
            fontWeight: '300',
            letterSpacing: '0.025em',
          }
        }}
        controller={{ closeOnBackdropClick: true }}
      />
    </>
  );
};

export default PhotoGallery;

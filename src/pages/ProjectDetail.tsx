import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { projectsData } from "../data/projectData";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

const getGridClass = (span?: "col" | "row" | "large") => {
  switch (span) {
    case "large":
      return "md:col-span-2 md:row-span-2";
    case "col":
      return "md:col-span-2";
    case "row":
      return "md:row-span-2";
    default:
      return "";
  }
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find((p) => p.slug === slug);
  const [index, setIndex] = useState(-1);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-6xl font-bold text-glow mb-4">404</h1>
        <p className="text-2xl text-text-secondary mb-8">Project not found.</p>
        <Link
          to="/projects"
          className="text-champagne-gold hover:underline flex items-center"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Projects
        </Link>
      </div>
    );
  }

  const slides = project.galleryImages.map(
    ({ src, width, height, alt, caption }) => ({
      src,
      width,
      height,
      title: alt,
      description: caption,
    })
  );

  return (
    <div className="bg-background text-text-primary min-h-screen">
      <div className="relative h-[60vh] md:h-[80vh]">
        <img
          src={project.featuredImage}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-6 pb-16 md:pb-24 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-glow mt-2">
                {project.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative pb-20">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-steel-gray-darker p-8 md:p-10 rounded-lg shadow-2xl card-glow-subtle -mt-16"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center">
                <User className="w-7 h-7 mb-2 text-champagne-gold" />
                <span className="text-sm uppercase text-text-secondary tracking-wider">
                  Client
                </span>
                <span className="font-bold text-lg">{project.client}</span>
              </div>
              <div className="flex flex-col items-center">
                <Calendar className="w-7 h-7 mb-2 text-champagne-gold" />
                <span className="text-sm uppercase text-text-secondary tracking-wider">
                  Year
                </span>
                <span className="font-bold text-lg">
                  {new Date(project.date).getFullYear()}
                </span>
              </div>
              <div className="flex flex-col items-center col-span-2 md:col-span-2">
                <Wrench className="w-7 h-7 mb-2 text-champagne-gold" />
                <span className="text-sm uppercase text-text-secondary tracking-wider">
                  Services
                </span>
                <span className="font-bold text-lg text-center">
                  {project.services.join(", ")}
                </span>
              </div>
            </div>
          </motion.div> */}

          <div className="mt-16">
            <div className="grid grid-cols-2 md:grid-cols-2 auto-rows-[250px] gap-4">
              {project.galleryImages.map((image, i) => (
                <motion.div
                  key={image.id}
                  className={`group relative overflow-hidden rounded-lg cursor-pointer`}
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

          <div className="mt-16 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center text-champagne-gold hover:text-white transition-colors duration-300 text-lg"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Return to All Projects
            </Link>
          </div>
        </div>
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
        plugins={[Captions]}
        captions={{
          descriptionTextAlign: "center",
          descriptionMaxLines: 3,
        }}
        styles={{
          container: { backgroundColor: "rgba(15, 23, 42, 0.95)" },
          icon: {
            color: "#FFFFFF",
            filter: "drop-shadow(0 0 5px rgba(0,0,0,0.5))",
          },
          captionsDescription: {
            fontFamily: "sans-serif",
            color: "#A3A3A3",
            fontSize: "1rem",
            lineHeight: "1.5rem",
            fontWeight: "300",
            letterSpacing: "0.025em",
          },
        }}
        controller={{ closeOnBackdropClick: true }}
      />
    </div>
  );
};

export default ProjectDetail;

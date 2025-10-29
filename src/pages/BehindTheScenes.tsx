import PageHeader from '../components/shared/PageHeader';
import PhotoGallery from '../components/gallery/PhotoGallery';

const BehindTheScenes = () => {
  return (
    <div className="bg-background min-h-screen">
      <PageHeader 
        title="Behind The Scenes" 
        subtitle="A glimpse into our creative process, life on set, and the magic that happens before the final cut." 
      />
      <PhotoGallery />
    </div>
  );
};

export default BehindTheScenes;

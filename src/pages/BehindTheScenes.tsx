import PageHeader from '../components/shared/PageHeader';

const BehindTheScenes = () => {
  return (
    <div className="bg-background min-h-screen">
      <PageHeader title="Behind The Scenes" subtitle="A glimpse into our creative process and life on set." />
       <div className="container mx-auto px-6 py-20">
        <p className="text-center text-text-secondary">A gallery and Instagram feed will be embedded here.</p>
      </div>
    </div>
  );
};

export default BehindTheScenes;

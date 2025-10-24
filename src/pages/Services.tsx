import PageHeader from '../components/shared/PageHeader';

const Services = () => {
  return (
    <div className="bg-background min-h-screen">
      <PageHeader title="Our Services" subtitle="A comprehensive suite of production services." />
       <div className="container mx-auto px-6 py-20">
        <p className="text-center text-text-secondary">A detailed list of services will be displayed here.</p>
      </div>
    </div>
  );
};

export default Services;

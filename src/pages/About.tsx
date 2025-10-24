import PageHeader from '../components/shared/PageHeader';

const About = () => {
  return (
    <div className="bg-background min-h-screen">
      <PageHeader title="About Us" subtitle="The story, vision, and team behind KKK DEAMLAB." />
       <div className="container mx-auto px-6 py-20">
        <p className="text-center text-text-secondary">Detailed information about the company and team will be here.</p>
      </div>
    </div>
  );
};

export default About;

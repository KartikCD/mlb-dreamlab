import PageHeader from '../components/shared/PageHeader';

const News = () => {
  return (
    <div className="bg-background min-h-screen">
      <PageHeader title="News & Updates" subtitle="The latest stories, awards, and press from our studio." />
       <div className="container mx-auto px-6 py-20">
        <p className="text-center text-text-secondary">Blog posts and news articles will be displayed here.</p>
      </div>
    </div>
  );
};

export default News;

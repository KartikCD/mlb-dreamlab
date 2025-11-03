import PageHeader from '../components/shared/PageHeader';
import { newsData } from '../data/newsData';
import NewsCard from '../components/news/NewsCard';

const News = () => {
  return (
    <div className="bg-background min-h-screen">
      <PageHeader 
        title="News & Updates" 
        subtitle="The latest stories, awards, and press from our studio." 
      />
       <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((article, index) => (
            <NewsCard key={article.id} article={article} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;

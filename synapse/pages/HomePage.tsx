
import React from 'react';
import Header from '../components/Header';
import WeeklyMoodCard from '../components/WeeklyMoodCard';
import FeelingTracker from '../components/FeelingTracker';
import InsightDonutChart from '../components/InsightDonutChart';
import ArticleCard from '../components/ArticleCard';
import { insightsData, articles } from '../constants';

const HomePage: React.FC = () => {
  return (
    <div className="overflow-y-auto space-y-6 p-6 bg-slate-50 pb-24">
      <Header />

      <WeeklyMoodCard />

      <FeelingTracker />

      <div className="grid grid-cols-2 gap-4">
        {insightsData.map((insight) => (
          <InsightDonutChart key={insight.title} insight={insight} />
        ))}
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-800 mb-4">Insights for you</h2>
        <div className="space-y-4">
            {articles.map((article) => (
                <ArticleCard key={article.title} article={article} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

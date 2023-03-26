import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";

import Loader from "../Components/Loader";
import NewsCard from "../Components/NewsCard";

function News() {
  const { allNews, loading, getNews } = useContext(AppContext);
  console.log(allNews);

  const news = async () => {
    await getNews();
  }

  useEffect(() => {
    news();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center w-screen min-h-screen p-4">
        <div className="m-auto">
          <div className="p-4 mx-10 mb-8 min-w-lg lg:mx-0 lg:max-w-xl">
            <Loader size='60' />
            </div>
          </div>
      </div>
    )
  } else {
    return (
      <div className="flex flex-col items-center w-screen min-h-screen p-4">
        <div className="m-auto">
          <div className="p-4 mx-10 mb-8 min-w-lg lg:mx-0 lg:max-w-xl">
            {allNews.map((news) => (
              <NewsCard
                key={news.id}
                id={news.id}
                imageUrl={news.image}
                heading={news.heading}
                content={news.content}
                author={news.author}
                timestamp={news.timestamp}
                votes={news.votes}
              />
            ))}
          </div>
        </div>
        </div>
    )
  }
}

export default News;
import { useContext } from "react";
import { AppContext } from "../App";

import Loader from "../Components/Loader";
import NewsCard from "../Components/NewsCard";

function News() {
  const { allNews, loading } = useContext(AppContext);
  // console.log("news comp :", allNews);
  if (!loading) {
    return (
      <div className="mt-12 lg:max-w-[30vw]">
        {allNews.map((news) => (
          <NewsCard 
            key={news.id}
            url={news.id}
            imageUrl={news.image}
            heading={news.heading}
            content={news.content}
            author={news.author}
            timestamp={news.timestamp}
            votes={news.votes}
          />
        ))}
      </div>
    )
  } else {
    return (
      <Loader size='60' />
    );
  }
}

export default News;
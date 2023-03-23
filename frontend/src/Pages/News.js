import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";

import Loader from "../Components/Loader";
import NewsCard from "../Components/NewsCard";

import {
  sampleImageLink,
  sampleNewsHeading,
  sampleNewsContent,
} from "../Utils/TestLinks";

function News() {
  const { allNews } = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);

  const fetchNewsMedia = async () => {
    let news = [];
    try {
      await Object.keys(allNews).map((key) => {
        fetch(allNews[key].media)
          .then((res) => res.json())
          .then((data) => {
            news.push({
              id: allNews[key].id,
              author: allNews[key].author,
              timestamp: allNews[key].timestamp,
              heading: data.headline,
              content: data.body,
              image: data.media,
              votes: allNews[key].votes,
            });
          });
      });
      setLoading(false);
      setNews(news);
    } catch (error) {
      console.log(error);
    }
    return news;
  };
  
  useEffect(() => {
    fetchNewsMedia();
  }, [allNews]);

  console.log("News:", news);

  // return (
    //   <div className="flex items-center w-screen min-h-screen p-4 -ml-16">
    //     <div className="m-auto">
    //       <div className="p-4 mx-10 mb-8 border-4 border-gray-900 border-dashed min-w-lg lg:mx-0 lg:max-w-xl">
    //         {
    //           news.map((item) => (
    //             <NewsCard heading={item.heading} content={item.content} image={item.image} key={item.id} />
    //           ))
    //         }
    //       </div>
    //     </div>
    //   </div>
    // );
  if (loading === false) {
    console.log('loading false')
    news.map((news) => {
      return (
        <div>
          {news}
        </div>
      )
    })
  }
}

export default News;

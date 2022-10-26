import React from 'react';
import NewsCard from '../Components/NewsCard';
import { sampleImageLink, sampleNewsHeading, sampleNewsContent } from '../Utils/TestLinks';


function News() {
  return (
    <>
      <div className="grid gap-8 p-4 my-5 lg:grid-cols-4 md:grid-cols-2">
        <div className="lg:col-span-3 outline-dashed">
          <NewsCard
            imageUrl={sampleImageLink}
            heading={sampleNewsHeading}
            content={sampleNewsContent}
            url="1"
          />
        </div>
        <div className="outline-dashed">
          <NewsCard
            imageUrl={sampleImageLink}
            heading={sampleNewsHeading}
            content={sampleNewsContent}
          />
        </div>
        <div className="outline-dashed">
          <NewsCard
            imageUrl={sampleImageLink}
            heading={sampleNewsHeading}
            content={sampleNewsContent}
            url="2"
          />
        </div>
        <div className="outline-dashed">
          <NewsCard
            imageUrl={sampleImageLink}
            heading={sampleNewsHeading}
            content={sampleNewsContent}
            url="3"
          />
        </div>
        <div className="outline-dashed">
          <NewsCard
            imageUrl={sampleImageLink}
            heading={sampleNewsHeading}
            content={sampleNewsContent}
          />
        </div>
        <div className="outline-dashed">
          <NewsCard
            imageUrl={sampleImageLink}
            heading={sampleNewsHeading}
            content={sampleNewsContent}
          />
        </div>
        <div className="outline-dashed">
          <NewsCard
            imageUrl={sampleImageLink}
            heading={sampleNewsHeading}
            content={sampleNewsContent}
          />
        </div>
        <div className="outline-dashed">
          <NewsCard
            imageUrl={sampleImageLink}
            heading={sampleNewsHeading}
            content={sampleNewsContent}
          />
        </div>
      </div>
    </>
  );
}

export default News
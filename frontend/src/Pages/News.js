import React from 'react';
import NewsCard from '../Components/NewsCard';
import { sampleImageLink, sampleNewsHeading, sampleNewsContent } from '../Utils/TestLinks';


function News() {
  return (
    <>
      <div className="grid p-4 m-5 lg:grid-cols-4 md:grid-cols-2 outline-dashed">
        <div className="lg:col-span-3">
          <NewsCard
            imageUrl={sampleImageLink}
            heading={sampleNewsHeading}
            content={sampleNewsContent}
            url="1"
          />
        </div>
        <div>
          <NewsCard
            imageUrl={sampleImageLink}
            heading={sampleNewsHeading}
            content={sampleNewsContent}
          />
        </div>
        <div>
          <NewsCard
            imageUrl={sampleImageLink}
            heading={sampleNewsHeading}
            content={sampleNewsContent}
            url="2"
          />
        </div>
        <div>
          <NewsCard
            imageUrl={sampleImageLink}
            heading={sampleNewsHeading}
            content={sampleNewsContent}
            url="3"
          />
        </div>
        <div>
          <NewsCard
            imageUrl={sampleImageLink}
            heading={sampleNewsHeading}
            content={sampleNewsContent}
          />
        </div>
        <div>
          <NewsCard
            imageUrl={sampleImageLink}
            heading={sampleNewsHeading}
            content={sampleNewsContent}
          />
        </div>
        <div>
          <NewsCard
            imageUrl={sampleImageLink}
            heading={sampleNewsHeading}
            content={sampleNewsContent}
          />
        </div>
        <div>
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
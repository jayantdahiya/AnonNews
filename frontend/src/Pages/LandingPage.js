import React from 'react'
import Dropdown from '../Components/Dropdown';
import NewsCard from '../Components/NewsCard'
import { sampleImageLink, sampleNewsHeading, sampleNewsContent } from '../Utils/TestLinks'

function LandingPage() {
  
  return (
    <>
      <div className="fixed right-2 top-3">
        <Dropdown />
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2">
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

export default LandingPage
import React from 'react'
import Dropdown from '../Components/Dropdown';
import NewsCard from '../Components/NewsCard'
import PopUp from '../Components/PopUp';
import { sampleImageLink, sampleNewsHeading, sampleNewsContent } from '../Utils/TestLinks';

import { ConnectButtonCustom } from '../Utils/ConnectButton';

function LandingPage() {
  return (
    <>
      {/* <div className="fixed left-16 top-3">
        <Dropdown />
      </div> */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2">
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
        <PopUp />
      </div>
    </>
  );
}

export default LandingPage
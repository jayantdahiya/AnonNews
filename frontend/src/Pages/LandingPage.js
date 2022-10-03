import React from 'react'
import Dropdown from '../Components/Dropdown';
import NewsCard from '../Components/NewsCard'
import PopUp from '../Components/PopUp';
import { sampleImageLink, sampleNewsHeading, sampleNewsContent } from '../Utils/TestLinks';

import {useConnectModal} from '@rainbow-me/rainbowkit';
import { ConnectButtonCustom } from '../Utils/ConnectButton';

function LandingPage() {
  const modalConfig = {
    modalSize : 'compact'
  }
  const {openConnectModal} = useConnectModal({modalSize: 'compact'});
  return (
    <>
      <div className="mt-2 mr-4 text-end">
        {/* {openConnectModal && (
          <button
            className="h-10 p-1 text-sm border border-gray-700"
            onClick={openConnectModal}
          >
            Connect Wallet
          </button>
        )} */}
        <ConnectButtonCustom />
      </div>
      {/* <div className="fixed right-2 top-3">
        <Dropdown />
      </div> */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2">
        <div className="lg:col-span-3">
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
        <PopUp />
      </div>
    </>
  );
}

export default LandingPage
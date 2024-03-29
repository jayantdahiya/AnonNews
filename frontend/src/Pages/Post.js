import React, { useState, useEffect } from 'react';

import { ethers } from 'ethers';
import contractABI from "../Utils/AnonNews.json";
import { AppContext } from '../App';
import Loader from '../Components/Loader';
import {client} from '../Utils/IPFSClient';

// import { sampleIPFSLink } from '../Utils/TestLinks';

function Post() {
  const { loading, setLoading } = React.useContext(AppContext);
  const [termsOfUse, setTermsOfUse] = useState(false);
  const [newsHeadline, setNewsHeadline] = useState();
  const [newsContent, setNewsContent] = useState();
  const [newsMedia, setNewsMedia] = useState();

  // Setting up smart contract
  const getContract = () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    let contract = new ethers.Contract(
      process.env.REACT_APP_CONTRACT_ADDRESS,
      contractABI.abi,
      signer
    );
    return contract;
  };
  // **********

  // Posting news handler
  const HandleNewsPost = async (e, newsHeadline, newsContent, newsMedia) => {
    e.preventDefault();
    setLoading(true);
    if (newsHeadline === "" && newsContent === "" && newsMedia === "") {
      console.log("Please fill all the fields");
    } else {
      console.log("uploading news...");
      await uploadNewsContent(newsHeadline, newsContent, newsMedia);
      console.log("news uploaded to ipfs!");
    }
  };
  // **********

  // Uploading news content to IPFS
  const uploadNewsContent = async (newsHeadline, newsContent, newsMedia) => {
    let newUrl;
    // uploading media to IPFS
    if (newsMedia) {
      try {
        const added = await client.add(newsMedia);
        console.log("Uploading news media file...");
        const url = `https://anonnews.infura-ipfs.io/ipfs/${added.path}`;
        newUrl = url.toString();
        console.log("Media url: ", newUrl);
      } catch (error) {
        console.log(error);
      }
    }
    let newsBody = {
      headline: newsHeadline,
      body: newsContent,
      media: newUrl,
    };
    let jsonString = JSON.stringify(newsBody);
    try {
      const added = await client.add(jsonString);
      const url = `https://anonnews.infura-ipfs.io/ipfs/${added.path}`;
      console.log("News content url: ", url);
      updateContract(url);
    } catch (error) {
      console.log(error);
    }
  };
  // **********

  // updating smart contract with IPFS link
  const updateContract = async (url) => {
    try {
      await getContract().postNews(url.toString());
      console.log("Contract updated!");
      setLoading(false);
      window.location.href = "/news";
      alert("News posted!");
    } catch (error) {
      console.log(error);
      alert("Error posting news!");
    }
  };
  // **********

  useEffect(() => {
    setLoading(false);
  }, [])
  
  if (loading) {
    return (
      <Loader size='60' />
    )
  } else {
    return (
      <div className="min-h-screen bg-base lg:w-[40vw] w-full">
        <div className="mt-10">
          <div className="flex items-center py-8 pr-4 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6">
            <div className="w-full mx-auto lg:max-w-3xl gap-y-4">
              <div className="relative block">
                <div className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                  Post your news here
                </div>
              </div>

              <div className="flex flex-col gap-6 p-2 mt-5">
                <div className="col-span-6">
                  <label className="block text-lg font-medium text-gray-900">
                    News Headline
                  </label>

                  <textarea
                    type="text"
                    rows="2"
                    className="w-full h-8 mt-1 text-sm text-gray-900 bg-transparent border-4 border-gray-900 border-dashed shadow-lg"
                    onChange={(e) => {
                      setNewsHeadline(e.target.value);
                    }}
                  />
                </div>

                <div className="col-span-6">
                  <label className="block text-lg font-medium text-gray-700">
                    News Content
                  </label>

                  <textarea
                    type="text"
                    rows="10"
                    className="w-full mt-1 text-sm text-gray-900 bg-transparent border-4 border-gray-900 border-dashed shadow-lg"
                    onChange={(e) => {
                      setNewsContent(e.target.value);
                    }}
                  />
                </div>

                <div className="col-span-6">
                  <label className="block text-lg font-medium text-gray-900">
                    News Media (Image)
                  </label>

                  <div className="relative items-center mt-1 border-4 border-gray-900 border-dashed shadow-lg min-h-[300px]">
                    <input
                      type="file"
                      multiple
                      className="relative z-50 block w-full h-full p-20 shadow-lg opacity-0 cursor-pointer"
                      onChange={(e) => {
                        setNewsMedia(e.target.files[0]);
                      }}
                    />
                    {newsMedia ? (
                      <div className="absolute top-0 left-0 right-0 p-10 m-auto text-sm">
                        <img
                          src={URL.createObjectURL(newsMedia)}
                          alt="newsMedia"
                          width="auto"
                          className="max-h-[200px]"
                        />
                        <div className="mx-auto font-light text-gray-900">
                          {newsMedia.name}
                        </div>
                      </div>
                    ) : (
                      <div className="absolute top-[30%] left-0 right-0 p-10 m-auto text-sm">
                        <div className="h-full m-auto text-center">
                          <div className="font-light text-gray-900">
                            Drop files here to upload
                            <br />
                            or
                          </div>
                          <div className="font-light text-gray-900">
                            Click to select files
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-span-6">
                  <label className="flex gap-4">
                    <input
                      type="checkbox"
                      className="w-5 h-5 bg-transparent border-4 border-gray-900 border-dashed rounded-md shadow-sm"
                      onClick={() => {
                        setTermsOfUse(!termsOfUse);
                      }}
                    />

                    <span className="text-lg text-gray-700">
                      I have read the{" "}
                      <a href="/terms" className="font-bold underline">
                        terms of use
                      </a>{" "}
                      and posting on this platform and I hereby agree to them.
                    </span>
                  </label>
                </div>

                <div className="flex w-full col-span-6 sm:items-center sm:gap-4">
                  <button
                    className="inline-block px-12 py-3 text-lg font-bold text-gray-900 transition border-2 border-gray-900 rounded-sm shadow-xl shrink-0 hover:bg-gray-900 hover:text-gray-100 focus:outline-none"
                    onClick={(e) => {
                      if (termsOfUse) {
                        HandleNewsPost(e, newsHeadline, newsContent, newsMedia);
                      } else {
                        alert("Please read and agree to the terms of use");
                      }
                    }}
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post
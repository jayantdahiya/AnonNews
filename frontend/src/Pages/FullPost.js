import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { AppContext } from '../App';

import { getContract } from '../Utils/Contract';

function NewsPost() {
  const { url } = useParams();
  const { allNews, address } = useContext(AppContext);

  // filter allNews to get the news with the same id as the url
  const newsPost = allNews.filter((item) => item.id === Number(url))[0];
  // console.log(newsPost);

  //voteNews function
  const voteNews = async (id) => {
    if(newsPost.author === address) {
      alert("You can't vote on your own news!");
      return;
    } else {
      try {
        await getContract().voteNews(id);
        window.location.href = "/news";
        alert("Voted for news! It'll reflect in some time 😊");
        console.log("Voted for news! It'll reflect in some time");
      } catch (error) {
        window.location.href = "/news";
        alert("Error voting for news!");
        console.log(error);
      }
    }
  };
// **********

  return (
    <div className="flex items-center mt-12">
      <div className="m-auto">
        <div className="flex-col max-w-lg">
          <div className="p-4 text-xl font-semibold text-center bordered-box lg:text-4xl shrink">
            {newsPost.heading}
          </div>
          <div className="py-2 my-4 max-h-[600px]">
            <img
              src={newsPost.image}
              alt=""
              className="object-cover w-full h-full lg:px-5"
            />
          </div>
          <div className="p-4 mb-4 bordered-box">
            <div className="flex flex-row shrink">
              <span className="mt-4 text-left text-gray-400 text-md">
                <span className="font-semibold text-gray-900">Date: </span>{" "}
                {newsPost.timestamp.toISOString().slice(0, 10)}
              </span>
              <span className="mt-4 ml-auto text-right text-gray-400 text-md">
                <span className="font-semibold text-gray-900">Author: </span>{" "}
                {newsPost.author.substring(0, 3) +
                  "..." +
                  newsPost.author.substring(38, 42)}
              </span>
            </div>
            <br />
            <div className="text-sm text-justify text-gray-700 lg:text-md">
              {newsPost.content}
            </div>
            <br />
            <div className="flex items-center justify-between">
              <span className="inline-flex font-semibold text-gray-400 text-md">
                <div className="text-gray-900">Votes:</div>&nbsp;
                {newsPost.votes}
              </span>
              <div>
                <div
                  className="p-3 font-semibold text-gray-200 bg-gray-900 border-2 border-gray-900 rounded-sm cursor-pointer w-fit hover:bg-gray-900 hover:text-gray-100"
                  onClick={
                    address
                      ? () => voteNews(newsPost.id)
                      : () => alert("Please connect your wallet!")
                  }
                >
                  Vote this news
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsPost
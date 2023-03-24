import React from 'react'
import { useNavigate } from 'react-router-dom';

function NewsCard({url, imageUrl, heading, content, author, timestamp, votes}) {
  const max_length = 200;
  console.log("NewsCard:", url, imageUrl, heading, content, author, timestamp, votes);
  const postContent = content.substring(0, max_length);
  const postAuthor = author.substring(0, 3) + "..." + author.substring(38, 42);

  const navigate = useNavigate();
  const handlePostCardClick = () => {
    if (url) {
      const postUrl = url;
      navigate(`/NewsPost/${postUrl}`);
    }
  }
  return (
    <div className="flex flex-col max-h-[800px] max-w-[90%] m-4 border-4 border-gray-900 border-dashed">
      <div className="pb-4 mt-4 text-xl font-light text-center border-b-4 border-gray-900 border-dashed lg:text-3xl">
        {heading}
      </div>
      <div className="py-4 text-3xl border-b-4 border-gray-700 border-dashed">
        <img
          src={imageUrl}
          alt=""
          className="object-cover max-h-[300px] w-[90%] mx-auto"
        />
      </div>
      <div className="p-4">
        <div className="flex">
          <span className="mt-4 text-xs text-left text-gray-400">
            <span className="text-gray-900">Author: </span> {postAuthor}
          </span>
          <span className="mt-4 ml-auto text-xs text-right text-gray-400">
            <span className="text-gray-900">Date: </span>{" "}
            {timestamp.toISOString().slice(0, 10)}
          </span>
        </div>
        <br />
        <div className="text-sm text-justify text-gray-500 lg:text-md">
          {postContent} ...
        </div>
        <span>
          <div>
            <span className="text-xs text-right text-gray-400">
              <span className="text-gray-900">Votes: </span> {votes}
            </span>
          </div>
          <div className="mt-3 text-right cursor-pointer text-md">
            <span
              className="text-black border-gray-900 border-dashed border-y-2"
              onClick={handlePostCardClick}
            >
              Read More
            </span>
          </div>
        </span>
      </div>
    </div>
  );
}

export default NewsCard
import React from 'react'

function NewsCard({imageUrl, heading, content}) {
  const max_length = 200;
  const trimmedString = content.length > max_length ? content.substring(0, max_length - 3) + "..." : content;
  return (
    <div className="flex flex-col max-h-fit max-w-[90%] m-4">
      <div className="text-3xl border-b-2 pb-3 pt-2 border-gray-400">
        <img
          src={imageUrl}
          alt=""
          className="object-cover h-48 w-[90%] mx-auto"
        />
      </div>
      <div className="mt-4 pb-4 border-gray-400 border-b-2 text-center">{heading}</div>
      <div className="p-4">
        <div className="text-gray-500 text-justify">{trimmedString}</div>
        <div className="flex">
          <span className="text-left text-gray-400 text-xs mt-4">
            Date: 01/01/1999
          </span>
        </div>
        <div className="text-md text-center mt-3">
          <span className="border-y-2 border-gray-500">More</span>
        </div>
      </div>
    </div>
  );
}

export default NewsCard
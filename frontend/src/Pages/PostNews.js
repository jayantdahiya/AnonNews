import React from 'react'
import postNewsBg from '../Utils/svg/postNewsBg.svg';
import getContract from '../Utils/getContract';

import Web3Strorage from 'web3.storage';

const client = new Web3Storage({
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweENDMUQyZTc4RUVkRDI4MDY2YmIyNzhlNDlkQTkzNTZDRWNmMjE0OTEiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzE4MjAyMzgyMjgsIm5hbWUiOiJhbm9uTmV3cyJ9.1DXQ3NwAVG1ayAjlmc0vltu6j69G3Bk4dm1hlqilqfU",
});

function PostNews() {
  const [termsOfUse, setTermsOfUse] = React.useState(false);
  const [newsHeadline, setNewsHeadline] = React.useState("");
  const [newsContent, setNewsContent] = React.useState("");
  const [newsMedia, setNewsMedia] = React.useState("");

  const contract = getContract();
  

  const handleNewsPost = () => {
    if (newsHeadline === "" || newsContent === "" || newsMedia === "") {
      alert("Please fill all the fields");
    }
    else {
      console.log(newsHeadline, newsContent, newsMedia)
    }
  }
  return (
    <section className="min-h-screen mt-3 bg-base">
      <div className="lg:grid lg:h-screen lg:grid-cols-12">
        <section className="relative flex items-end h-32 lg:col-span-5 lg:h-[95%] xl:col-span-6">
          <img
            alt="Night"
            src={postNewsBg}
            className="absolute inset-0 object-cover w-full h-full opacity-80 lg:h-screen"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Post your news here
            </h1>
          </div>
        </section>

        <main className="flex items-center justify-center py-8 pr-4 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6">
          <div className="w-full lg:max-w-3xl">
            <div className="relative block -mt-16 lg:hidden">
              <h1 className="mt-12 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Post your news here
              </h1>
            </div>

            <form className="grid grid-cols-6 gap-6 p-5 mt-5 outline-dashed">
              <div className="col-span-6">
                <label className="block text-sm font-medium text-gray-700">
                  News Headline
                </label>

                <textarea
                  type="text"
                  rows="2"
                  className="w-full h-8 mt-1 text-sm text-gray-700 bg-transparent border border-gray-700 rounded-md shadow-sm"
                  onChange={(e) => {
                    setNewsHeadline(e.target.value);
                  }}
                />
              </div>

              <div className="col-span-6">
                <label className="block text-sm font-medium text-gray-700">
                  News Content
                </label>

                <textarea
                  type="text"
                  rows="10"
                  className="w-full mt-1 text-sm text-gray-700 bg-transparent border border-gray-500 rounded-md shadow-sm"
                  onChange={(e) => {
                    setNewsContent(e.target.value);
                  }}
                />
              </div>

              <div className="col-span-6">
                <label className="block text-sm font-medium text-gray-700">
                  News Media (Image)
                </label>

                <div className="relative mt-1 border border-gray-500 border-dashed rounded-md">
                  <input
                    type="file"
                    multiple
                    className="relative z-50 block w-full h-full p-20 opacity-0 cursor-pointer"
                    onChange={(e) => {
                      setNewsMedia(e.target.files[0]);
                    }}
                  />
                  {newsMedia ? (
                    <div className="absolute top-0 left-0 right-0 p-10 m-auto text-sm text-center">
                      <img
                        src={URL.createObjectURL(newsMedia)}
                        alt="newsMedia"
                        className="w-1/2 h-1/2"
                      />
                      <div className="font-light text-gray-900">
                        {newsMedia.name}
                      </div>
                    </div>
                  ) : (
                    <div className="absolute top-0 left-0 right-0 p-10 m-auto text-sm text-center">
                      <div className="font-light text-gray-900">
                        Drop files anywhere to upload
                        <br />
                        or
                      </div>
                      <div className="font-light text-gray-900">
                        Click to select files
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="col-span-6">
                <label className="flex gap-4">
                  <input
                    type="checkbox"
                    className="w-5 h-5 bg-transparent border border-gray-900 rounded-md shadow-sm"
                    onClick={() => {
                      setTermsOfUse(!termsOfUse);
                    }}
                  />

                  <span className="text-sm text-gray-700">
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
                  className="inline-block px-12 py-3 font-light text-gray-900 transition border border-gray-900 rounded-sm text-md shrink-0 hover:bg-gray-900 hover:text-gray-100 focus:outline-none"
                  onClick={() => {
                    if (termsOfUse) {
                      handleNewsPost();
                    } else {
                      alert("Please read and agree to the terms of use");
                    }
                  }}
                >
                  Post
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}

export default PostNews
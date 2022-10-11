import React from 'react'

function NewNewsPost() {
  return (
    <section className="mt-3 bg-base">
      <div className="lg:grid lg:h-screen lg:grid-cols-12">
        <section className="relative flex items-end h-32 bg-gray-900 lg:col-span-5 lg:h-[95%] xl:col-span-6">
          <img
            alt="Night"
            src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 object-cover w-full h-full opacity-80"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <h1 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Post your news here
            </h1>

            <p className="mt-4 leading-relaxed text-white/90">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              nam dolorum aliquam, quibusdam aperiam voluptatum.
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative block -mt-16 lg:hidden">
              <h1 className="mt-12 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Post your news here
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
              </p>
            </div>

            <form className="grid grid-cols-6 gap-6 mt-8">
              <div className="col-span-6">
                <label className="block text-sm font-medium text-gray-700">
                  News Headline
                </label>

                <input
                  type="text"
                  className="w-full h-8 mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm"
                />
              </div>

              <div className="col-span-6">
                <label className="block text-sm font-medium text-gray-700">
                  News Content
                </label>

                <textarea
                  type="text"
                  rows="10"
                  className="w-full mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm"
                />
              </div>

              <div className="col-span-6">
                <label className="block text-sm font-medium text-gray-700">
                  News Media (Image)
                </label>

                <div className="relative mt-1 border border-gray-500 border-dashed">
                  <input
                    type="file"
                    multiple
                    className="cursor-pointer relative block opacity-0 w-full h-full p-20 z-50"
                  />
                  <div className="absolute top-0 left-0 right-0 p-10 m-auto text-sm text-center">
                    <div className="font-light text-gray-900">
                      Drop files anywhere to upload
                      <br />
                      or
                    </div>
                    <div className="font-light text-gray-900">Click to select files</div>
                  </div>
                </div>
              </div>

              <div className="col-span-6">
                <label className="flex gap-4">
                  <input
                    type="checkbox"
                    className="w-5 h-5 bg-white border-gray-900 rounded-md shadow-sm"
                  />

                  <span className="text-sm text-gray-700">
                    I have read the terms of use and posting on this platform
                    and I hereby agree to them.
                  </span>
                </label>
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button className="inline-block px-12 py-3 text-sm font-light text-gray-900 transition border border-gray-900 rounded-sm shrink-0 hover:bg-gray-900 hover:text-gray-100 focus:outline-none focus:ring active:text-blue-500">
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

export default NewNewsPost
import React from 'react'

function MissionPage() {
  return (
    <div className="min-h-screen h-fit">
      <section class="bg-base text-gray-900">
        {/* why section */}
        <div class="lg:w-[90vw] md:w-[80vw] px-4 mx-10 py-[20%] sm:px-6 lg:px-8 items-center text-center outline-dashed my-10">
          <div class="w-full">
            <h2 class="text-3xl font-bold sm:text-4xl">Why?</h2>

            <p class="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed text-justify font-light">
              The future of news is decentralized and uncensored. This means
              that anyone, anywhere can publish news without fear of censorship
              or retribution. This also means that news can be spread more
              widely and quickly, without the need for central control. This is
              the way that news should be:
              <span className="font-bold"> free and open.</span>
            </p>
          </div>
        </div>
        {/* what section */}
        <div class="lg:w-[90vw] md:w-[80vw] px-4 mx-10 py-[20%] sm:px-6 lg:px-8 items-center text-center outline-dashed mb-10 mt-3">
          <div class="text-center w-full">
            <h2 class="text-3xl font-bold sm:text-4xl">What?</h2>
            <div className="max-w-xl mx-auto mt-4 font-light text-justify sm:text-xl sm:leading-relaxed">
              A new kind of news platform is emerging, one that is decentralised
              and anonymous. This type of platform offers a unique way for
              people to get their news, without having to worry about censorship
              or government control. These platforms are often based on
              blockchain technology, which allows for a secure and decentralized
              way of handling data. This means that there is no central point of
              control, and no single entity can censor or control the content.
              <span className="font-bold">
                {" "}
                This makes for a more open and democratic way of getting news,
                and allows for a more diverse range of voices to be heard. {""}
              </span>
            </div>

            <div class="mt-8 flex flex-wrap justify-center gap-4">
              <a
                class="inline-flex rounded border border-gray-900 px-12 py-3 text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-gray-100 focus:outline-none focus:ring sm:w-auto"
                href="https://github.com/jayantdahiya/AnonNews"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
                <span className="ml-1">GitHub</span>
              </a>
            </div>
          </div>
        </div>
        {/* how section */}
        <div class="lg:w-[90vw] md:w-[80vw] mx-10 px-4 py-[20%] sm:px-6 lg:px-8 items-center text-center outline-dashed my-10">
          <div class="w-full">
            <h2 class="text-3xl font-bold sm:text-4xl">How?</h2>
          </div>
          <div className="flex items-center w-full p-4 mt-8">
            <div className="max-w-xl m-auto">
              <div className="w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  className="bi bi-boxes"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134 2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643 8 4.21l2.742-1.567L8 1.076 5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z" />
                </svg>
                <div className="mt-5 text-left text-md">
                  - Every article published on the site is stored as a block on
                  the blockchain.
                </div>
                <div className="mt-2 text-left text-md">
                  - Readers can view a transparent and tamper-proof record of
                  all the articles that have been published on the site.
                </div>
              </div>
              <div className="w-full mt-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  class="bi bi-currency-bitcoin"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 13v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.5v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.084c1.992 0 3.416-1.033 3.416-2.82 0-1.502-1.007-2.323-2.186-2.44v-.088c.97-.242 1.683-.974 1.683-2.19C11.997 3.93 10.847 3 9.092 3H9V1.75a.25.25 0 0 0-.25-.25h-1a.25.25 0 0 0-.25.25V3h-.573V1.75a.25.25 0 0 0-.25-.25H5.75a.25.25 0 0 0-.25.25V3l-1.998.011a.25.25 0 0 0-.25.25v.989c0 .137.11.25.248.25l.755-.005a.75.75 0 0 1 .745.75v5.505a.75.75 0 0 1-.75.75l-.748.011a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25L5.5 13zm1.427-8.513h1.719c.906 0 1.438.498 1.438 1.312 0 .871-.575 1.362-1.877 1.362h-1.28V4.487zm0 4.051h1.84c1.137 0 1.756.58 1.756 1.524 0 .953-.626 1.45-2.158 1.45H6.927V8.539z" />
                </svg>
                <div className="mt-5 text-left text-md">
                  - Cryptocurrency is a digital or virtual currency that uses
                  cryptography for security.
                </div>
                <div className="mt-2 text-left text-md">
                  - Cryptocurrencies are decentralized, meaning they are not
                  subject to government or financial institution control.
                </div>
              </div>
              <div className="w-full mt-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  class="bi bi-eye-slash-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                  <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                </svg>
                <div className="mt-5 text-left text-md">
                  - All users are anonymous and their identities are not stored
                  or tracked.
                </div>
                <div className="mt-2 text-left text-md">
                  - All data is stored in an encrypted format and can not be
                  accessed by anyone.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MissionPage
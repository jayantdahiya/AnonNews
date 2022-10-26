import React from 'react'

function TermsOfUse() {
  return (
    <div className="min-h-screen h-fit">
      <section class="bg-base text-gray-900">
        <div class="lg:w-[90vw] md:w-[80vw] px-4 mx-4 lg:mx-10 py-[20%] sm:px-6 lg:px-8 items-center text-center outline-dashed mb-10 mt-3">
          <div class="text-center w-full">
            <h2 class="text-xl font-bold lg:text-4xl">Terms of Use</h2>
            <div className="max-w-xl mx-auto mt-4 text-sm font-light text-justify lg:text-lg">
              By posting a news on our anonymous and decentralised news website,
              you agree to the following terms:
              <br />
              <br />
              <span className="font-bold">1. </span>The news you post must be
              true and accurate to the best of your knowledge.
              <br />
              <span className="font-bold">2. </span>The news you post must not
              be libelous or defamatory.
              <br />
              <span className="font-bold">3. </span>The news you post must not
              violate the privacy of any individual or organisation.
              <br />
              <span className="font-bold">4. </span>The news you post must not
              be commercial in nature.
              <br />
              <span className="font-bold">5. </span>The news you post must not
              promote any illegal activity.
              <br />
              <span className="font-bold">6. </span>The news you post must not
              be obscene or offensive.
              <br />
              <span className="font-bold">7. </span>The news you post must not
              be spam.
              <br />
              <span className="font-bold">8. </span>You must not post any news
              that you do not have the right to post.
              <br />
              <span className="font-bold">9. </span>You must not post any news
              that contains viruses or other malicious code.
              <br />
              <span className="font-bold">10. </span>We reserve the right to
              remove any news that violates these terms or that we deem to be
              inappropriate for our website.
            </div>
          </div>
        </div>
        <div class="lg:w-[90vw] md:w-[80vw] px-4 mx-4 lg:mx-10 py-[20%] sm:px-6 lg:px-8 items-center text-center outline-dashed my-10">
          <div class="w-full">
            <p class="mx-auto mt-4 max-w-xl text-justify font-light text-sm lg:text-lg">
              This platform is for posting news anonymously and decentralised.
              The use of this platform is free of charge. This platform is
              provided "as is", without warranty of any kind. In no event shall
              the platform provider be liable for any damages arising from the
              use of this platform. This platform may contain links to other
              websites, which are not under the control of the platform
              provider. The platform provider is not responsible for the content
              of any linked site. The platform provider is providing these links
              to you only as a convenience, and the inclusion of any link does
              not imply endorsement by the platform provider.
              <span className="font-bold">
                {" "}
                You are responsible for your own actions while on this platform.
              </span>
            </p>
          </div>
        </div>
        <div class="lg:w-[90vw] md:w-[80vw] mx-4 lg:mx-10 px-4 py-[20%] sm:px-6 lg:px-8 items-center text-center outline-dashed my-10">
          <div class="w-full">
            <h2 class="text-xl font-bold lg:text-4xl">
              Found a bug? Report it here
            </h2>
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
      </section>
    </div>
  );
}

export default TermsOfUse
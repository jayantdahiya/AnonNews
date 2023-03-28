import React from 'react'

function Landing() {
  return (
      <div className="p-10 space-y-3 text-center border-4 border-gray-900 border-dashed shadow-md">
      <div className="flex-col w-full text-2xl lg:text-4xl">
        <div className="font-semibold text-gray-600">The news you deserve</div>
        <div className="font-bold text-gray-900">-Uncensored & Anonymous</div>
      </div>
      <div className="flex flex-row justify-between pt-10 text-sm lg:text-lg lg:px-10 shrink">
        <a
          className="items-center p-3 text-gray-200 bg-gray-900 shadow-lg bordered-box hover:bg-transparent hover:text-gray-900 lg:p-4"
          href="/news"
        >
          View News
        </a>
        <a
          className="inline-flex items-center p-3 shadow-lg lg:p-4 bordered-box hover:bg-gray-900 hover:text-gray-200"
          href="https://github.com/jayantdahiya/AnonNews"
          target="_blank" rel="noreferrer"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="mr-2 bi bi-github hover:fill-gray-200"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </div>
          <p>Github</p>
        </a>
      </div>
    </div>
  );
}

export default Landing
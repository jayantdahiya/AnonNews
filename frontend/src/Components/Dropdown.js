import React from 'react'

function Dropdown() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [topVotedSelected, setTopVotedSelected] = React.useState(true);
    const [newestSelected, setNewestSelected] = React.useState(false);
    const handleSelect = () => {
        setIsOpen(!isOpen);
    }
    const handleTopVoted = () => {
        setTopVotedSelected(!topVotedSelected);
        setNewestSelected(false);
        setIsOpen(!isOpen);
    }
    const handleNewest = () => {
        setNewestSelected(!newestSelected);
        setTopVotedSelected(false);
        setIsOpen(!isOpen);
    }
  return (
    <div className="inline-flex items-stretch backdrop-blur-md bg-white/40 border border-gray-300 rounded-md">
      <span className="px-4 py-2 text-sm text-gray-700 rounded-l-md">Sort by</span>
      <div className="relative">
        <button
          type="button"
          onClick={handleSelect}
          className="inline-flex items-center justify-center h-full px-2 text-gray-700 border-l border-gray-300 hover:text-gray-700 rounded-r-md hover:bg-gray-50"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-up"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          )}
        </button>

        {isOpen ? (
          <div
            className="absolute right-0 z-10 w-56 mt-4 origin-top-right backdrop-blur-lg bg-white/30 border border-gray-700 rounded-md shadow-lg"
            role="menu"
          >
            <div className="p-2">
              {topVotedSelected ? (
                <span
                  className="block px-4 py-2 text-sm text-gray-700 rounded-lg  hover:bg-gray-50 hover:text-gray-700"
                  role="menuitem"
                  onClick={handleTopVoted}
                >
                  ✔️ Top Voted 🔥
                </span>
              ) : (
                <span
                  className="block px-4 py-2 text-sm text-gray-700 rounded-lg  hover:bg-gray-50 hover:text-gray-700"
                  role="menuitem"
                  onClick={handleTopVoted}
                >
                  Top Voted 🔥
                </span>
              )}

              {newestSelected ? (
                <span
                  className="block px-4 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                  role="menuitem"
                  onClick={handleNewest}
                >
                  ✔️ Most Recent 📅
                </span>
              ) : (
                <span
                  className="block px-4 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                  role="menuitem"
                  onClick={handleNewest}
                >
                  Most Recent 📅
                </span>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Dropdown
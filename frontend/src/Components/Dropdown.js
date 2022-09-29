import React from 'react'

function Dropdown() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [topVotedSelected, setTopVotedSelected] = React.useState(true);
    const [newestSelected, setNewestSelected] = React.useState(false);
    const handleSelect = () => {
        setIsOpen(!isOpen);
        setNewestSelected(!newestSelected);
        setTopVotedSelected(!topVotedSelected);
        console.log("topVotedSelected: ", topVotedSelected);
        console.log("newestSelected: ", newestSelected);
    }
  return (
    <div class="inline-flex items-stretch bg-[#1E2022] border border-[#F0F5F9] rounded-md h-8">
      <div class="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          class="inline-flex items-center justify-center h-full px-2 text-[#F0F5F9] hover:text-[#F0F5F9]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-filter"
            viewBox="0 0 16 16"
          >
            <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
          </svg>
        </button>

        {isOpen ? (
          <div
            class="absolute right-0 z-10 w-56 mt-4 origin-top-right backdrop-blur-md border border-gray-100 rounded-md shadow-lg"
            role="menu"
          >
            <div class="p-2">
              {topVotedSelected ? (
                <span
                  class="block px-4 py-2 text-sm text-gray-100 rounded-lg  hover:bg-gray-50 hover:text-gray-700"
                  role="menuitem"
                  onClick={handleSelect}
                >
                  ✔️ Top Voted 🔥
                </span>
              ) : (
                <span
                  class="block px-4 py-2 text-sm text-gray-100 rounded-lg  hover:bg-gray-50 hover:text-gray-700"
                  role="menuitem"
                  onClick={handleSelect}
                >
                  Top Voted 🔥
                </span>
              )}

              {newestSelected ? (
                <span
                  class="block px-4 py-2 text-sm text-gray-100 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                  role="menuitem"
                  onClick={handleSelect}
                >
                  ✔️ Most Recent 📅
                </span>
              ) : (
                <span
                  class="block px-4 py-2 text-sm text-gray-100 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                  role="menuitem"
                  onClick={handleSelect}
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
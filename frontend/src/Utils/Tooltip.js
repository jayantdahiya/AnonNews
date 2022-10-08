import React from 'react'

function Tooltip({message}) {
  return (
    <span className="absolute text-xs font-light border-gray-600 text-gray-900 backdrop-blur-md left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100">
      {message}
    </span>
  );
}

export default Tooltip
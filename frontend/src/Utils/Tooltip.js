import React from 'react'

function Tooltip({message}) {
  return (
    <span className="absolute text-xs font-medium text-white bg-gray-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100">
      {message}
    </span>
  );
}

export default Tooltip
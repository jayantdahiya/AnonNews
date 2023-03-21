import React from 'react'

function Loader({ size }) {
  return (
    <div className="flex justify-center w-full h-full">
      <div
        style={{ width: `${size}px`, height: `${size}px` }}
        className="m-auto animate-spin"
      >
        <div
          className="h-full w-full border-4 border-t-[#F5F2E8] border-gray-900
        rounded-[50%]"
        ></div>
      </div>
    </div>
  );
}

export default Loader
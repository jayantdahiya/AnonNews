import React from 'react'
import UploadSection from '../Utils/UploadSection'

function NewNewsPost() {
  return (
    <div className="h-screen mx-4 my-4 text-center min-w-[550px]">
      <div className='p-2 my-10 border-gray-700 border-y-2'>
        <span className='font-light text-gray-800'>Upload your news media (Image) </span>
        <br />
        <UploadSection />
      </div>
      <div className='p-2 my-10 border-gray-700 border-y-2'>
        <span className='font-light text-gray-800'>Enter your news title </span>
        <br />
        <input type="text" name="heading" />
      </div>
      <div className='p-2 my-10 border-gray-700 border-y-2'>
        <span className='font-light text-gray-800'>Enter your news content </span>
        <br />
        <textarea placeholder='News text' rows='10' className='w-full p-2 border border-gray-700 rounded-md' />
      </div>
    </div>
  )
}

export default NewNewsPost
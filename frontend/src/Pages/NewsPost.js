import React from 'react'
import { useParams } from 'react-router-dom';

function NewsPost() {
  const { url } = useParams();
  return (
    <div className='w-full h-screen'>{url}</div>
  )
}

export default NewsPost
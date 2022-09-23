import React from 'react'
import { useParams } from 'react-router-dom'

function NewsView() {
    const {id} = useParams();
  return (
    <div>NewsView{id}</div>
  )
}

export default NewsView
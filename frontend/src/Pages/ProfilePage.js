import React from 'react'
import {useParams} from 'react-router-dom';

function ProfilePage() {
  const {address} = useParams();
  return (
    <div>{address}</div>
  )
}

export default ProfilePage
import React from 'react'

export default function Page({ params }: { params: { slug: string } }) {
  return <div>My Profile: {params.slug}</div>
}
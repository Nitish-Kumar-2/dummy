import React from 'react'

export default async function page({params}) {
  const slug = (await params).slug
  return (
    <div>this is inner route : {slug}</div>
  )
}

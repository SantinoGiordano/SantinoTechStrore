'use client'
import { useParams } from 'next/navigation'
import React from 'react'



export default function Page(){
  const params = useParams();
  console.log(params.id)
  return (
    <div className='pt-96'>you are on page {params.id} </div>
    
  )
}


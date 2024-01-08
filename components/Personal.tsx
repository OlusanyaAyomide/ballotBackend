import React from 'react'
import prisma from '@/prisma/client'


export default async function Personal() {

  const getData=async ()=>{
      const personal = await prisma.securedSpace.count()
      const secured = await prisma.securedSpace.count({
        where:{
            isSuccess:true
        }
    })
    return {personal,secured}
  }
  const {personal,secured} = await getData()

  return (
    <div className='pt-10'>
        <h1 className="text-center font-bold text-xl">Personal Count</h1>
        <h1 className="text-center font-extrabold text-3xl mt-3">{personal}</h1>

        <h1 className="text-center mt-8 font-bold text-xl">Secured Count</h1>
        <h1 className="text-center font-extrabold text-3xl mt-3">{secured}</h1>
    </div>
  )
}

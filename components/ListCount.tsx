import React from 'react'
import prisma from '@/prisma/client'


export default async function ListCount() {

  const getData=async ()=>{
      const personal = await prisma.securedSpace.count({
      where:{
        OR:[
          {type:"personal"},
          {type:"both"},
        ]
      }
    })
    const group = await prisma.securedSpace.count({
      where:{
        OR:[
          {type:"group"},
          {type:"both"},
        ]
      }
    })
    return {personal,group}
  }
  const {personal,group} = await getData()

  return (
    <div className='pt-10'>
        <h1 className="text-center font-bold text-xl">Personal Count</h1>
        <h1 className="text-center font-extrabold text-3xl mt-3">{personal}</h1>

        <h1 className="text-center mt-8 font-bold text-xl">Group Count</h1>
        <h1 className="text-center font-extrabold text-3xl mt-3">{group}</h1>
    </div>
  )
}

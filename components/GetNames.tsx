import React from 'react'
import prisma from '@/prisma/client'

export default async function GetNames() {
    const users = await prisma.product.findMany()
   console.log(users) 
    return (
    <div className='mt-4 w-full max-w-[650px]'>
        {users.map((item,key)=>(
            <div key={key} className='mt-2 px-4 font-medium w-full border-b justify-between flex items-center py-2'>
                <span>{item.name}</span>
                <span>{item.id}</span>
                <span>{item.reviewedBy}</span>
                {/* <span>{}</span> */}
            </div>
        ))}
    </div>
  )
}

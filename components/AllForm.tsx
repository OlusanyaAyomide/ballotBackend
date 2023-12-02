'use client'
import React, { useState, useTransition } from 'react'
import GetNames from '@/components/GetNames'
import { useRouter } from 'next/navigation'
import { CreateEntry } from '@/actions/CreateEntry'

export default function AllForm({children}:{children:React.ReactNode}) {

  const router = useRouter()
  const [name,setName] = useState("")
  const [city,setCity] = useState("")
  const [reviewedBy,setReveiwedBy] = useState("")
  const [pending,startTransition] = useTransition()

  return (
    <div className='h-screen grid place-items-center'>
      <form 
      onSubmit={async(e)=>{
        e.preventDefault()
        startTransition(async ()=>{
            const res = await CreateEntry({city,name,reviewedBy})
            if(res){router.refresh()}
        } )
      }} 
      className='w-full mx-auto max-w-[600px] rounded-md'>
        <h1 className="text-center my-2 font-semibold text-base">MyTestForm</h1>
        <div className='w-full mb-3'>
          <span className="block mb-1">Name</span>
          <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" name="name" id="" className='rounded-md px-2 h-10 block w-full border outline-none '/>
        </div>
        <div className='w-full mb-3'>
          <span className="block mb-1">City</span>
          <input value={city} onChange={(e)=>{setCity(e.target.value)}} type="text" name="city" id="" className='rounded-md border outline-none px-2 h-10 block w-full'/>
        </div>
        <div className='w-full mb-3'>
          <span className="block mb-1">ReviewedBy</span>
          <input value={reviewedBy} onChange={(e)=>{setReveiwedBy(e.target.value)}} type="number" name="review" id="" className='rounded-md border outline-none px-2 h-10 block w-full'/>
        </div>
        <button className='justify-center w-full h-10 flex items-center bg-gray-700 text-white'>{pending?"Loading":"Submit"}</button>
      </form>
      {children}
    </div>
  )
}

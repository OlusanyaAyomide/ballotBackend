'use client'

import React,{useEffect,useState} from 'react'
import { useRouter } from 'next/navigation'


const PORT = 3000

export default function Refresher() {
    console.log("renderedd")
    const router = useRouter()

    return <button onClick={()=>{router.refresh()}}
    className='px-4 py-1 rounded-xl bg-blue-500 ml-8'>refresh</button>
}

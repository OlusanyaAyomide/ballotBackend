"use client"

import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import { usePathname,useRouter } from 'next/navigation'


export default function LayOutNav() {
    const path = usePathname()
    const router = useRouter()
    const [time,setTime] = useState(10)

    useEffect(()=>{
        setTimeout(() => {
            if(time === 1){
                router.refresh()
                setTime(10)
            }else{
                setTime((prev=>prev-1))
            }
        },1000);
    },[time])


    return (
        <div className = "flex items-center">
            <span className="text-gray-700 text-[13px] mr-2">Time untill refresh</span>
            <span className="font-medium text-[13px]">{time}</span>
        </div>
      )
}

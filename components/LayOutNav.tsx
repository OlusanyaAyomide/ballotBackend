"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function LayOutNav() {
    const path = usePathname()
    console.log(path)
    return (
    <>
        <Link href={"/hostel/personal"} className={`font-medium hover:underline ${path==="/hostel/personal"?"underline decoration-2 decoration-blue-500":""}`}>Personal</Link>
        <Link href={"/hostel/group"} className={`ml-3 font-medium hover:underline ${path==="/hostel/group"?"underline decoration-2 decoration-blue-500":""} `}>Champions</Link>
    </>
      )
}

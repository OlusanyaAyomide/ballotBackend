import LayoutStats from '@/components/LayoutStats'
import Refresher from '@/components/Refresher'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import LayOutNav from '@/components/LayOutNav'
export default function Layout({children}:{children:React.ReactNode}) {

  return (
    <div className='px-3 pt-10'>
        <div className="fixed z-40 top-0 right-0 w-full bg-gray-100 px-2 sm:px-3 shadow-sm py-2 flex justify-end">
            {/* <LayoutStats/> */}
            <div className="flex items-center">
              <LayOutNav/>
            </div>
            <Refresher/>
        </div>
        <div className="">
            {children}
        </div>
    </div>
  )
}

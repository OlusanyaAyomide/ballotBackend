import React from 'react'
import {Table,TableBody,TableCaption,TableCell,TableHead,TableHeader,TableRow} from "@/components/ui/table"
import { IHostelEntry, mockDatas } from '@/utils/constants'
import BedSpaceTable from '@/components/BedSpaceTable'
import prisma from '@/prisma/client'
import { Suspense } from 'react'
import Loader from '@/components/Loader'

export default async function Personal() {
  const getGroup = async ()=>{
    const spaces = await prisma.securedSpace.findMany({
      where:{
        OR:[
          {type:"group"},
          {type:"both"},
        ],
      },
      orderBy:{
        createdAt:"desc"
      }
    })
    await new Promise((resolve)=>setTimeout(resolve,1000))
    return spaces
  }
  const spaces = getGroup() as unknown as Promise<IHostelEntry[]>
  return (
    <div>
        <h1 className="text-center font-semibold text-base ">Personal Space</h1>
        <Suspense fallback={<Loader/>}>
          <BedSpaceTable spaces={spaces}/>
        </Suspense>

        
    </div>
  )
}


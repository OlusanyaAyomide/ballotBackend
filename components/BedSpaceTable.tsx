import React from 'react'
import {Table,TableBody,TableCaption,TableCell,TableHead,TableHeader,TableRow} from "@/components/ui/table"
import { IHostelEntry, mockDatas } from '@/utils/constants'
import MarkSuccess from './MarkSuccess'
import { dateOptions } from '@/utils/constants'


export default async  function BedSpaceTable({data}:{data:IHostelEntry[]}) {
    return (
        <div className="max-w-[calc(100vw-10px)] overflow-auto">
        <Table>
            <TableCaption>Personal bed space secured</TableCaption>
            <TableHeader  className='shadow-sm'>
                <TableRow>
                    <TableHead>SN</TableHead>
                    <TableHead>Hostel</TableHead>
                    <TableHead>Matric Number</TableHead>
                    <TableHead>phoneNum</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>securedBy</TableHead>
                    <TableHead>Gotten At</TableHead>
                    <TableHead>IS Secured</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data?.map((item,key)=>{
                    const date = new Date(item.createdAt)
                    const formattedDate: string = new Intl.DateTimeFormat('en-US', dateOptions).format(date)
                    return <TableRow key={key} className={`${key%2===0?"bg-gray-200/50":""}`}>
                        <TableCell className='w-fit'>
                            <div className='grid place-items-center w-[25px]  h-[25px] rounded-full bg-gray-800 text-white'>{key+1}</div>
                        </TableCell>
                        <TableCell className='font-medium'>
                            <span className='relative top-6'>{item.hostel} </span>
                        <div className="h-[30px] opacity-0"></div>
                        </TableCell>
                        <TableCell>{item.matricNum}</TableCell>
                        <TableCell>{item.phoneNum}</TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.securedBy}</TableCell>
                        <TableCell>{formattedDate}</TableCell>
                        <TableCell>
                            <MarkSuccess/>
                        </TableCell>
                    </TableRow>              
                    })}
            </TableBody>
        </Table>
    </div>
  )
}


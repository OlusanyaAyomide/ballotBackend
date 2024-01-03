import BedSpaceTable from '@/components/BedSpaceTable'
import prisma from '@/prisma/client'
import { Suspense } from 'react'
import Loader from '@/components/Loader'


export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function LayOutNav({params}) {
    const clientID = params.client
    const getGroup = async ()=>{
        const spaces = await prisma.securedSpace.findMany({
          where:{
            type:clientID
          },
          orderBy:{
            createdAt:"desc"
          }
        })
        return spaces
      }
      const spaces = await getGroup() as unknown as IHostelEntry[]
    return(
        <div>
            <Suspense fallback={<Loader/>}>
                <BedSpaceTable data={spaces}/>
            </Suspense>
        </div>
    )

}
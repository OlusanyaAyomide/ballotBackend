'use server'
import prisma from '@/prisma/client'

export async function CreateEntry({city,name,reviewedBy}:{city:string,name:string,reviewedBy:string}){
    console.log("here")
    if(!(name &&  city && reviewedBy)){return null}
    // console.log(name,city,reviewedBy)
    await prisma.product.create({
      data:{
        name:name.toString(),city:city.toString(),reviewedBy:Number(reviewedBy.toString())
      }
    })
    console.log("Created")
    return ({data:"created"})
  }
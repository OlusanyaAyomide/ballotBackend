import { NextResponse } from "next/server"
import { Socket, io } from "socket.io-client"
import Joi from "joi"
import prisma from '@/prisma/client'


export async function POST(req:Request){

    

    try{
        
        const body = await (req.json()) 

        const schema = Joi.object().keys({
            matricNum:Joi.string().required(),
            isSuccess:Joi.boolean().required()
        })

        const validation = schema.validate(body)
        if (validation.error) {
            const error = validation.error.message ? validation.error.message : validation.error.details[0].message
            return NextResponse.json(
                {data:error},
                {status:400}
            )
        }
        const isPresent = await prisma.securedSpace.findFirst({
            where:{
                matricNum:body.matricNum
            }
        })
        if(!isPresent){
            return NextResponse.json({message:"matric Number not secured"},{status:400})
        }
        const updateFunction = await prisma.securedSpace.updateMany({
            where:{
                matricNum:body.matricNum
            },
            data:{
                isSuccess:body.isSuccess
            }
        })

        return NextResponse.json(
                // {data:mockData},
            {Success:true,data:"Testing Space secured"},
            {status:200},
        ) 
    }

    catch(e){
        console.log(e)
        return NextResponse.json(
            {data:"unknown error occured"},
            {status:500}
        )
    }
}

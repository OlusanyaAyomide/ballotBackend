import { IHostelEntry } from "@/utils/constants"
import { NextResponse } from "next/server"
import Joi from "joi"
import prisma from '@/prisma/client'




export async function POST(req:Request){
    console.log("hitt")
    try{
    const body = await (req.json()) as IHostelEntry
    console.log(body)
    const schema = Joi.object().keys({
        matricNum:Joi.string().required(),
        phoneNum:Joi.string().required(),
        hostel:Joi.string().required(),
        name:Joi.string().required(),
        securedBy:Joi.string().required(),
        type:Joi.string().valid("personal","group" ,"both").required()
    })
    const validation = schema.validate(body)

    if (validation.error) {
        const error = validation.error.message ? validation.error.message : validation.error.details[0].message
        return NextResponse.json(
            {data:error},
            {status:400}
        )
    }

    const entry =await prisma.securedSpace.create({
        data:body
    })

    return NextResponse.json(
        // {data:mockData},
        {data:entry},
        {status:200},
    )
    }catch(e){
        console.log(e)
        return NextResponse.json(
            {data:"unknown error occured"},
            {status:500}
         )
    }

}



export async function GET(req:Request){
    // io.emit("refresh")
    // const socket = io("http://localhost:3001")

    // socket.connect()
    // socket.emit("refesher")
    const test = await fetch("http://localhost:3000/api/socket")
    return NextResponse.json(
        // {data:mockData},
        {data:"Sent from server"},
        {status:200},
    )
}

//    matricNum String
    // hostel String
    // phoneNum  String
    // name      String
    // securedBy String
    // type      String
    // isSuccess Boolean  @default(false)
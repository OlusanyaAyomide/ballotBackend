import { NextResponse } from "next/server"



export async function GET(req:Request){
    console.log("Get Triggered")
    
    return NextResponse.json(
        // {data:mockData},
        {Success:true,data:"Testing Space secured"},
        {status:200},
    )
}

export async function POST(req:Request){
    console.log("hitt")
    const body = await (req.json())
    console.log(body)

}
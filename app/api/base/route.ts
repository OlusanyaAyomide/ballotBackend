import { NextResponse } from "next/server"
import { Socket, io } from "socket.io-client"


export async function GET(req:Request){
    console.log("Get Triggered")
    
    return NextResponse.json(
        // {data:mockData},
        {Success:true,data:"Testing Space secured"},
        {status:200},
    )
}

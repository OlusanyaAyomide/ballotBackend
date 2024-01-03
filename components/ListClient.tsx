'use client'
import {usePathname} from "next/navigation"

export default function ListClient({children}:{children:React.ReactNode}){

    const path = usePathname()
    const regex = /\/hostel\/([^/]+)$/;
    const match = path.match(regex);
    const slug = match[1] || null
    console.log(slug)
    const isMe = slug === "all-entry"
    return (
        <div className="mt-4">
           <h1>Welcome {`${isMe?"Ayomide":slug}`}</h1> 
            {isMe?children:null}
        </div>
    )

}
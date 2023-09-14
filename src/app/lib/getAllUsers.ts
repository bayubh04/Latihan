import { NextResponse } from "next/server"


export default async function getAllUsers(){
    const res = await fetch('http://jsonplaceholder.typicode.com/users')
    if (!res.ok) {throw new Error ('Fetch Data Gagal')}
        
    
    console.log(res)
    return NextResponse.json({res,status:200})
} 
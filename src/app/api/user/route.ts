import { NextResponse } from "next/server"

export async function GET() {
    const data = await fetch("http://jsonplaceholder.typicode.com/users").then((val) => val.json()).then((e) => e)
    if(!data) return NextResponse.json({success: false})
    return NextResponse.json({data, message: "helo"})
}
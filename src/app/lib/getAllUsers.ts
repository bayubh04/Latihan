import { NextResponse } from "next/server"


export default async function getAllUsers() {
    const res = await fetch('http://jsonplaceholder.typicode.com/users')

    return await res.json()

} 
'use client'
import { useEffect, useState } from "react";
import getAllUsers from "../lib/getAllUsers";
import Link from "next/link";
export default function UsersPage() {
    const [data, setData] = useState<any[] | null>(null)
    useEffect(() => {
        getAllUsers().then((val) => {
            setData(val)
        })
    }, [])

    return <>
        <pre>
            {JSON.stringify(data, null, 2)}
        </pre>
    </>

}

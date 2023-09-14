import CobaDisini from "@/modules/coba/coba"
import { useEffect, useState } from "react"

export default async function dataCoba (){
 const data = await fetch("/api/user").then((e) => e.json()).then((val) => val)
    
   
    return<>

    <CobaDisini aset={data}/>
    
    </>
}
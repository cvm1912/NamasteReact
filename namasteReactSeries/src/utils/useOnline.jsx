import { useEffect, useState } from "react"

const useOnline = ()=>{
    const [onlineStatus,setOnlineStatus]=useState(true)
    useEffect(()=>{
        window.addEventListener("offline", ()=>{
            setOnlineStatus(false);
        })

          window.addEventListener("online", ()=>{
            setOnlineStatus(true);
        })
    },[])
    // check online 
    return onlineStatus; 
}

export default useOnline
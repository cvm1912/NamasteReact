import { useEffect, useState } from "react"
import { MENU_API } from './constant'

const useRestAurant = (id)=>{
    const [resInfo, setResInfo] = useState(null)
   
    useEffect(()=>{
        fetchData()
    },[])


    const fetchData = async () =>{
        const data = await fetch(MENU_API(id))
        const json = await data.json();
        setResInfo(json)
    }

    return resInfo;
}

export default useRestAurant
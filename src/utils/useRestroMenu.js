import { useEffect,useState } from "react";
import { hyd_restro_info_api } from "./constants";
const useRestroMenu=(resid)=>{
    const [resinfo,setresinfo]=useState(null)
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData=async()=>{
        const data=await fetch(hyd_restro_info_api+resid)
        const json=await data.json();
        setresinfo(json);
    }
    return resinfo
}
export default useRestroMenu;
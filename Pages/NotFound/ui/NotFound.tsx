import { ArrowBigDown} from "lucide-react";
import React from "react";

export const NotFound = () => {
    return(
        <div style={{padding:"2rem", display:"flex", justifyContent:"space-around", alignItems:"center", flexDirection:"column", gap:"1rem"}}>
            <h1>Page Not Found</h1>
            <ArrowBigDown style={{height:'2rem', width:'2rem'}}/>
            <h2 style={{margin:"1rem"}}><a style={{border:'1px solid #333', padding:"1rem", backgroundColor:'#000000', color:'#ffffff'}}href="/">Poshol Nahui</a></h2>
        </div>
    )
}
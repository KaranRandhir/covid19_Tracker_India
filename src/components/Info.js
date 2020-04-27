import React from "react"
import "./Info.css"

const Info = ({heading,data,image})=>{
    return(
        <div className="info-block">
        <div><strong>{heading}</strong></div>
        <div><img alt="error"src={image} style={{height:"8vh",width:"8vh"}}/></div>
        <div>{data}</div>
        </div>
    )
}

export default Info;
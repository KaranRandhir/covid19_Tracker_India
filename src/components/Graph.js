import { LineChart, Line, CartesianGrid, XAxis, YAxis,Tooltip,Legend } from 'recharts';
import React from "react"
 

const Graph = ({data,ykey,xkey})=>{
    return (
    <LineChart width={400} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey={ykey} stroke="#0388fc" activeDot={{ r: 6 }} dot={false} strokeWidth={1.5} />
    <Line type="monotone" dataKey="dailyrecovered" stroke="#82ca9d" activeDot={{ r: 6}} strokeWidth={1.5} dot={false}/>   
    <Line type="monotone" dataKey="dailydeceased" stroke="grey"  activeDot={{ r: 6 }}strokeWidth={1.5} dot={false}/>   

    <CartesianGrid stroke="#ccc" />
    <Tooltip/>
       <Legend />
    <XAxis dataKey={xkey}/>
    <YAxis domain={[0, 2000]}/>
  </LineChart>)
}

export default Graph ;
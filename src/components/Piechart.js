import {Pie,PieChart,Cell} from "recharts"
import React from "react"

const Chart = ({data})=>{
  const COLORS = ['#5fde5d', '#94938f',"#3284db"];
  return(
    <div style={{marginLeft:"5vh"}}>
      <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
      <div style={{height:"1vh",width:"1vh",background:"#3284db"}}>
        </div>
        <div style={{marginLeft:"1vh"}}>
          confirmed
        </div>
      </div>
      <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
      <div style={{height:"1vh",width:"1vh",background:"#94938f"}}>
        </div>
        <div style={{marginLeft:"1vh"}}>
          deceased
        </div>
      </div>
      <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
      <div style={{height:"1vh",width:"1vh",background:"#5fde5d"}}>
        </div>
        <div style={{marginLeft:"1vh"}}>
          recovered
        </div>
      </div>
      
    <PieChart width={300} height={300}>
   
   
  <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label >

         	{
          	data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} key={index}/>)
          }
          </Pie>
  
</PieChart>
 </div>
)


}

export default Chart;
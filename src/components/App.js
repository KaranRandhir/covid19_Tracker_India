import React from "react"
import covidapi from "../api/covidapi"
import "./App.css"
import Particles from 'react-particles-js'; 

import covidimg from "../images/covidimg.png"
const particlesOptions = {
    particles: {
      number: {
        value: 150,
        density: {
          enable: true,
          value_area: 1000
        }
      }
    }
  };
class App extends React.Component{
    state={data : null}
    
    async componentDidMount() {
        const response = await covidapi.get("/data.json")
        this.setState({data:response.data.statewise})
        console.log(response.data.statewise)

    }
    
    renderTable= ()=> {
       return( this.state.data.map((state) => {
            return (
                <tr key={state.statecode}>
                <td className="text">{state.state}</td>
                <td className="text">{state.confirmed}</td>
                <td className="text">{state.active}</td>
                <td className="text">{state.recovered}</td>
                <td className="text">{state.deaths}</td>
             </tr>
  )
            }
            
            )
       )
        
    }
    render() {
            if (this.state.data===null){
                return <div>loading</div>
            }
        
            return (
                
                <div className="container">
                <img src={covidimg} className="pic" alt="Smiley face"/>
                <img src={covidimg} className="pic1" alt="Smiley face"/>
                <Particles className= "particles" params={particlesOptions} />
                
                    <h1 className="heading" align="center">COVID-19</h1>
                    <h1 className="text" align = "center">INDIA TRACKER</h1>
                <table align="center"  >
                   <tbody>
                   <tr >
                <td className="text" ><font>State</font></td>
                <td className="text" ><font color="red">confirmed</font></td>
                <td className="text" ><font >active</font></td>
                <td className="text" ><font >recovered</font></td>
                <td className="text"><font color="red">deaths</font></td>
             </tr>
                      {this.renderTable()}
                   </tbody>
                </table>
                
             </div>
             
            )
    }
}

export default App ;
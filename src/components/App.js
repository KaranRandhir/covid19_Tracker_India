import React from "react"
import covidapi from "../api/covidapi"
import "./App.css"
import Info from "./Info"
import Chart from "./Piechart"
import api2 from "../api/api2"

import Graph from "./Graph"
import active from "../images/active.png"
import total from "../images/total.png"
import deceased from "../images/deceased.png"
import recovered from "../images/recovered.png"
import phone from "../images/phone.png"
import tollfree from "../images/toll-free.png"
import email from "../images/email.png"

class App extends React.Component{
    state={data : null, statewise: null, piechart:[],contacts:[],centralHelpline:null,email:null,notifications:[]}
    
    async componentDidMount() {
        const response = await covidapi.get("/data.json")
        const response2=await api2.get("/contacts")
        const response3=await api2.get("/notifications")
        
        this.setState({data:response.data.statewise,statewise:response.data.cases_time_series,
        piechart:[{name:"recovered",value:Number(response.data.statewise[0]["recovered"])},
        {name:"deaths",value:Number(response.data.statewise[0]["deaths"])},
        {name:"active",value:Number(response.data.statewise[0]["active"])}
    ],contacts:response2.data.data.contacts.regional,centralHelpline:response2.data.data.contacts.primary.number,
email:response2.data.data.contacts.primary.email,
notifications:response3.data.data.notifications})
    console.log(this.state.notifications)        

    }
    
    renderTable= ()=> {
       return( this.state.data.map((state) => {
            return (
                
                <tr key={state.state}>
                    <td data-label="State"><span className="state">{state.state}</span></td>
                    <td data-label="Confirmed" className="confirmed"><span>{state.confirmed}</span></td>
                    <td data-label="Active" className="present"><span>{state.active}</span></td>
                    <td data-label="Recovered" className="recovered"><span>{state.recovered}</span></td>
                    <td data-label="Deaths" className="deaths"><span>{state.deaths}</span></td>
                </tr>
  )
            }
            
            )
       )
        
    }
    renderHelplines= ()=> {
        return( this.state.contacts.map((contact) => {
             return (
                 
                 <tr>
                     <td data-label="State"><span className="state">{contact.loc}</span></td>
                     <td data-label="Helpline" className="confirmed"><span>{contact.number}</span></td>
                    
                 </tr>
   )
             }
             
             )
        )
         
     }
     renderNotifications= ()=> {
        return( this.state.notifications.map((notification) => {
             return (
                 
                 <tr>
                     <td data-label="title"><span className="state"><a href={notification.link}>{notification.title}</a></span></td>
                     
                    
                 </tr>
   )
             }
             
             )
        )
         
     }
    render() {
            if (this.state.data===null){
                return(
                    <div className="loading">
                    
                    <div className="ui active inverted dimmer">
                      <div className="ui medium text loader">Loading</div>
                    </div>
                    </div>
                    

                )
            }
        
            return (

                
                <div id="main" className="ui container">
<div className="ui fixed menu">
  <div className="header item">
    <a href="#main">
    COVID-19 INDIA
    </a>
  </div>
  <div className="right menu">
  <a href="#main" className="item">
    Tracker
  </a>
  <a href="#helplines"className="item">
    Helplines
  </a>
  <a href="#notifications"className="item">
    Notifications
  </a>
</div>  

</div>       
<div style={{height:"2vh"}}></div>
<div className="helpline-heading" style={{marginTop:"5vh"}}>Tracker</div>

       <div className="info" >
                <Info heading="Total" data={this.state.data[0]["confirmed"] } image={total}/>
                <Info heading="Active" data={this.state.data[0]["active"]} image={active}/>
                <Info heading="Recovered" data={this.state.data[0]["recovered"]} image={recovered}/>
                <Info heading="Deceased" data={this.state.data[0]["deaths"]} image={deceased}/>
               
                </div>
                <div className="graphs">
                
                <Chart data={this.state.piechart} />
                <Graph data={this.state.statewise} xkey="date" ykey="dailyconfirmed"/>
                </div>
               
                
                <table className="ui celled table">
                <thead>
                    <tr><th>State</th>
                    <th>Confirmed</th>
                    <th>Active</th>
                    <th>Recovered</th>
                    <th>Deaths</th>
                </tr></thead>
                <tbody>
                {this.renderTable()}
                </tbody> 
                </table>
                <div class="ui divider"></div>
                <div id="helplines" style={{paddingTop:"10vh"}}>
                <div className="helpline-heading">Helplines</div>
                <div className="info" style={{marginTop:"8vh"}}>
                <Info heading="Central hepline" data={this.state.centralHelpline } image={phone}/>
                <Info heading="Toll-Free" data={1075} image={tollfree}/>
                <Info heading="email" data={this.state.email} image={email}/>
                
                </div>
                <div> <table className="ui celled table">
                <thead>
                    <tr><th>State</th>
                    <th>Helpline</th>
                    
                </tr></thead>
                <tbody>
                {this.renderHelplines()}
                </tbody>
                </table>
                   
                </div>
                   
                   </div>    
                   <div class="ui divider"></div>
                   <div id="notifications" style={{paddingTop:"10vh",marginBottom:"5vh"}}>
                   <div className="helpline-heading">Info</div>

                   <table className="ui celled table">
                <thead>
                    <tr><th>Title</th>
                  
                    
                </tr></thead>
                <tbody>
                {this.renderNotifications()}
                </tbody>
                </table>
                 </div>
                 <div class="ui divider"></div>
                <footer style={{height:"10vh",background:"lightgrey"}}>
                © 2020, made possible with data scrapped from <a href="https://documenter.getpostman.com/view/10724784/SzYXXKmA?version=latest">Covid-19 India API </a>
                 and <a href="https://github.com/amodm/api-covid19-in"> GITHUB</a>
                </footer>
                
                
             </div>
             
             
            )
    }
}

export default App ;
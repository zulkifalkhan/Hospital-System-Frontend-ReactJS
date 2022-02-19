import "./doctor.css"
import React, { useState,useEffect }  from "react";
import { Redirect } from 'react-router';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Axios from "axios";
import Posts from '../page/Posts';
import Pagination from '../page/Pagination';
import { MDBContainer,MDBCardImage,MDBCardTitle, MDBRow, MDBCol, MDBCard,MDBCardBody,MDBInput, MDBBtn } from 'mdbreact';
import { Link } from "react-router-dom";
import {Route,Router,Switch} from "react-router-dom";
import axios from "axios";
import {createBrowserHistory} from 'history';
const history = createBrowserHistory({basename : `${process.env.PUBLIC_URL}`});






function ViewDocApp (props){

  const search = props.location.search; // returns the URL query String
  const params = new URLSearchParams(search); 
  const IdFromURL = params.get('id');  


const [status, setStatus] = useState('');
const [FeeBalance, setFeeBalance] = useState('');
const [Symptoms, setSymptoms] = useState('');
const [appointmentID, setAppID] = useState('');
const [Date, setDate] = useState('');
const [Time, setAppTime] = useState('');
const [DocID,setDocID] = useState('');

const [DataPat, setData] = useState([]);

console.log(IdFromURL)

  useEffect(() =>{
    axios.post("http://localhost:3001/posts/checkDoctorAppointment", {
      DocID: IdFromURL,
      Date:"%"
      //Password: loginPass,
    })
      .then((Response) => {
          //console.log(Response)
            setStatus("Due Appointments")
          setData(Response.data)
          console.log(Response.data)
          console.log(DataPat)
        
  
     })


  
   },[])

  return (

    <div>
 <Link to="/"><MDBBtn color="indigo">Home</MDBBtn></Link>
 

        <h1 style={{color:'#4863A0',textAlign:'center',fontSize:'5vh'}}>{status}</h1>     
    <br />
    <br />
    <br />

    <div  className="mainContainer">
        {
        DataPat.map((item,index)=>(
          <div key={index}>
            
    
      <MDBCol   style={{ maxWidth: "30rem"  }} className="listContainer">
      <MDBCard className="card" >
        <MDBCardBody>
          <MDBCardTitle style={{color:'indigo'}}>Patient ID: {item.PatID}</MDBCardTitle>
          <span><h5>Appointmetn ID: {item.AppID}</h5></span>
          <br />
          <span><h5>Doctor ID: {item.DocID}</h5></span>
          <br />
         <span><h5>Appointmet Time:{item.Time}</h5></span> 
         <br />
         <span><h5>Appointment Date:{item.Date}</h5></span>
         <br />
         <span><h5>Symptoms: {item.Symptoms}</h5></span>
         <br />
         <span><h5>Fee: {item.FeeBalance}</h5></span>
        </MDBCardBody>
        <MDBBtn color="green" onClick={() => {cancelApp(item.AppID)}}>Complete Appointment</MDBBtn>
      </MDBCard>
    </MDBCol>

          
          </div>
        ))
      }

        
    </div>
    

    </div>

  );
};


function cancelApp(ID) {
  axios.post("http://localhost:3001/posts/completeAppointmentPatient", {
      AppID: ID
      //Password: loginPass,
    })
      .then((Response) => {
                if(Response.data.status == "1") {
                    window.location.href = `http://localhost:3000/doctor`;
                }

      })
}



export default ViewDocApp;
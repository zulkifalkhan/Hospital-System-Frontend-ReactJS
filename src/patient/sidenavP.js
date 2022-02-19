import "./patient.css"
import React from "react";
import { Link } from 'react-router-dom';
import { MDBDropdown,MDBDropdownItem,MDBDropdownMenu,MDBDropdownToggle} from "mdbreact";
import {createBrowserHistory} from 'history';


const history = createBrowserHistory({basename : `${process.env.PUBLIC_URL}`});



function SidenavP (props) {



    return (

        <div class="sidebar">
        <strong><a class="active" href="/" style={{color:'#151B54'}}>Home</a></strong>
        <a href = {`http://localhost:3000/bookA?id=${props.id}`}>Book Appointment</a>
        <a href = {`http://localhost:3000/viewapp?id=${props.id}`}>View Appointments</a>
      </div>

    );

}

export default SidenavP;
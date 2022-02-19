import "./doctor.css"
import React from "react";
import { Link } from 'react-router-dom';
import { MDBDropdown,MDBDropdownItem,MDBDropdownMenu,MDBDropdownToggle} from "mdbreact";
import {createBrowserHistory} from 'history';


const history = createBrowserHistory({basename : `${process.env.PUBLIC_URL}`});



function SidenavD (props) {



    return (

        <div class="sidebar">
        <strong><a class="active" href="/" style={{color:'#151B54'}}>Home</a></strong>
        <a href = {`http://localhost:3000/viewdoc?id=${props.id}`}>View Due Appointments</a>
      </div>

    );

}

export default SidenavD;
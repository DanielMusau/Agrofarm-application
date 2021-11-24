import { Link } from 'react-router-dom';
import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Form, Button } from 'react-bootstrap'

export default function About() {
    const url='http://127.0.0.1:5000/'
    return (
        <div style={{marginTop:"100px"}}>
            <h3 style={{width:"600px"}}> The purpose of Agroic is to provide connections between different roles in the agriculture industry. As the farmers are not getting a fair price for their goods because of contractors. This app removes the requirement of contractors for farmers. Farmers can buy their required needs for farming from Sellers and they can also sell their products to the Consumers</h3>
            <button>
                <a href={url} blank >Map</a>
            </button>

        </div>
    )
}

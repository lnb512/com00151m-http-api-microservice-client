 /**
 * Author: lnb512@york.ac.uk
 * Project: COM00151M Final Project
 * Date: 08.10.2021
 * 
 * This HTTP REST MICROSERVICE API client sends student details as a RFC7807 Problem Details "application/problem+json" 
 * Content-Type POST (REQUEST) to the HTTP REST MICROSERVICE API (service).   
 * 
 * Successful validation of student details results in a 200 RFC7807 specification HTTP status code RESPONSE from the HTTP REST MICROSERVICE API (service).
 * 
 * Validation errors result in a RFC7807 specification 400 HTTP error response.   
 * The error will contain a "Problem Details" JSON payload with detailed and human-readable explanation for the error.  
 * 
 */

import { Component } from 'react';
import React  from 'react';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      firstName: null,
      lastName: null,
      studentNumber: null
    }
  }

  // POST REQUEST - student details to HTTP REST Microservice API
  handleSubmit = (event) => {
    event.preventDefault(); 
  
    const submitStudentDetails = async (event) => {
      const res = await fetch('http://localhost:3001', {
        method: 'POST',
        // ensure client and server default to RFC7808 communication
        headers: {
          'Accept': 'application/problem+json',     
          'Content-Type': 'application/problem+json'
        },
        body: JSON.stringify({
          firstName: event.target.fname.value,
          lastName: event.target.lname.value,
          studentNumber: event.target.snumber.value
        })
      });
      alert(res.statusText);
    }

    submitStudentDetails(event);  
  } 

  // Input Form HTML
  render () {
    return ( 
      <div className="container">
      <div className="form-control"> 
        <h1>COM00151M RFC7807 HTTP REST MICROSERVICE API CLIENT</h1>
        <form onSubmit={ this.handleSubmit}>
          <div>
            <label>First Name</label>
            <input type="text" id="fname" name="fname" />
          </div>
          <div>
            <label>Last Name</label>
            <input type="text" id="lname" name="lname" /> 
          </div>
          <div>
            <label>Student Number</label>
            <input type="text" id="snumber" name="snumber" /> 
          </div>
          <button className="btn" type="submit">Submit</button>
        </form>
      </div> 
      </div>
  ); 
  }
}

export default App;

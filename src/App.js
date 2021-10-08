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

  handleSubmit = (event) => {
    event.preventDefault(); 
  
    const submitStudentDetails = async (event) => {

      const res = await fetch('http://localhost:3000', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: event.target.fname.value,
          lastName: event.target.lname.value,
          studentNumber: event.target.snumber.value
        })
      });

      const data = await res.json()
      
      console.log('Response from HTTP MICROSERVICE API ', data);
    }
    submitStudentDetails(event); 



  } 

  render () {
    return( 
      <div className="container">
      <div className="form-control"> 
        <h1>COM00151M RFC7807 HTTP MICROSERVICE CLIENT</h1>
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

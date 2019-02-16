import React, { Component } from 'react'
import {   
  Form,
  FormLabel,
  FormControl,
  Button,
  FormGroup,
  Alert 
} from 'react-bootstrap';
import axios from 'axios';

const AlertEmployee = ({message, type}) => {
  return (
  <Alert dismissible variant={type}>
    <p>{message}</p>
  </Alert>
  );
}

class FormEmployee extends Component {
   constructor(props) {
     super(props);

     this.state = {
       name: '',
       position: '',
       email: '',
       phone: '',
       showAlert: false,
       alerMessage: '',
       alertType: null,
     };

     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
   }
   handleChange(e) {
     this.setState({
       [e.target.name]: e.target.value
     });
   }
   handleSubmit(e) {
     e.preventDefault();

    const { name, position, email, phone } = this.state;

    if (name.length !== 0 && position.length !== 0 && email.length !== 0 && phone.length !== 0){
      const newEmployee = {
        name: name,
        position: position,
        email: email,
        phone: phone
      }; 
     axios
      .post('http://localhost:5000/api/employees', newEmployee)
      .then((res) => {
        this.setState({
          name: '',
          position: '',
          email: '',
          phone: '',
          showAlert: true,
          alertMessage: 'Employee data has been inserted.',
          alertType: 'success',
        })

        console.log(res)
      })
      
      // .then((res) => console.log(res))
      .catch((err) => console.log(err));
    }
    else {
      this.setState({
        showAlert: true,
        alertMessage: 'Please fill in all fields',
        alertType: 'danger'
      })
    }

    //  alert(`Name: ${this.state.name}, Position ${this.state.position}, E-mail ${this.state.email}, Phone ${this.state.phone}`);
   }
  render() {
    const { showAlert, alertMessage, alertType } = this.state;
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <h3>New Employee</h3>
          {
            showAlert ? <AlertEmployee message={alertMessage} type={alertType} ></AlertEmployee> : null
          }
          <FormGroup>
              <FormLabel>Name:</FormLabel>
              <FormControl type="text" onChange={this.handleChange} value={this.state.name} name="name"></FormControl>    
          </FormGroup>
          <FormGroup>
              <FormLabel>Position:</FormLabel>
              <FormControl type="text" onChange={this.handleChange} value={this.state.position} name="position"></FormControl>    
          </FormGroup>
          <FormGroup>
              <FormLabel>E-mail:</FormLabel>
              <FormControl type="text" onChange={this.handleChange} value={this.state.email} name="email"></FormControl>    
          </FormGroup>
          <FormGroup>
              <FormLabel>Phone:</FormLabel>
              <FormControl type="text" onChange={this.handleChange} value={this.state.phone} name="phone"></FormControl>    
          </FormGroup>
          <Button type="Submit" variant="outline-primary" block>Save Employee<i className="fa fa-check fa-fw"></i></Button>
        </Form>
      </div>
    )
  }
}

export default FormEmployee;

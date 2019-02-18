import React, { Component } from 'react';
import axios from 'axios';
import {
    Card,
    Row,
    Col,
    Button
} from 'react-bootstrap';

class DisplayCards extends Component {
  constructor(props) {
    super(props);
    
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(id) {
    // alert(id);
    axios
    .delete(`http://localhost:5000/api/employees/${id}`)
    .then(response => console.log(response))
    .catch((err) => console.log(err)); 

  }
  
  render() {
    const { data } = this.props;
    return (
      <Card bg="info" text="white" className="mb-2">
        <Card.Header>
          <Button variant="danger" onClick={e => this.handleDelete(data._id)} className="float-right btn-sm"><i className="fa fa-times fa-fw"></i></Button>
          <p style={{ marginBottom: -4 }} className="lead">{data.name}</p>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col xs={4}>
              <strong>Position</strong>
              <p>{data.position}</p>
            </Col>
            <Col xs={4}>
            <strong>Email</strong>
              <p>{data.email}</p>
            </Col>
            <Col xs={4}>  
            <strong>Phone</strong>
              <p>{data.phone}</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    )
  }
}

class CardEmployees extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: []
    };

    this.getEmployees = this.getEmployees.bind(this);
  }
  componentDidMount(){
    axios.get('http://localhost:5000/api/employees')
    .then(response => {
      this.setState({
        employees: response.data
      });
      console.log(response.data);
    })
    .catch(err => console.log(err))
  }
  getEmployees(){
    return this.state.employees.map((employee, i) => {
      return <DisplayCards key={i} data={employee}></DisplayCards>
    });
  }
  
  render() {
    const { employees } = this.state;
    return (
      <div>
          <h1>Employee Records</h1>
          {this.getEmployees()}
      </div>
    )
  }
}

export default CardEmployees;
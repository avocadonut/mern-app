import React, { Component } from 'react';
import axios from 'axios';
import {
    Card,
    CardGroup
} from 'react-bootstrap';

class CardEmployees extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: []
    }
    this.getEmployee = this.getEmployee.bind(this);
  }
  componentDidMount(){
    this.getEmployee();
  }
  getEmployee() {
    axios
    .get('http://localhost:5000/api/employees')
    .then((result) => {
      this.setState({
        employees: result.data
      });


      result.data.map(employee => console.log(employee));
    })
    .catch(err => console.log(err));
  }
  render() {
    const { employees } = this.state;
    return (
      <div>
        <CardGroup>
         {employees.map((employee, i) => {
          <Card>
            <p className="lead">{employee.name}</p>
          </Card>
         })}
        </CardGroup>
      </div>
    )
  }
}

export default CardEmployees;
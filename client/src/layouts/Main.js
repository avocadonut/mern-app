import React, { Component } from 'react'
import FormEmployee from '../components/FormEmployee';
import CardEmployees from '../components/CardEmployees';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
       <Container>
        <Row>
         <Col xs={7}>
          <CardEmployees />
         </Col>
         <Col xs={5}>
          <FormEmployee />
        </Col>    
        </Row>
       </Container> 
      </div>
    )
  }
}

export default Main;

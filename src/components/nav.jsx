import React, { Component } from 'react'
import {Navbar, Container} from 'react-bootstrap';
import logo from '../blendigoosev2.png';

export default class nav extends Component {
  render() {
    return (
        <div>
        <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand>
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Blendi's Website!
        </Navbar.Brand>
        <Navbar.Text>
        Welcome!!
      </Navbar.Text>
      </Container>
    </Navbar>
    </div>
    )
  }
}

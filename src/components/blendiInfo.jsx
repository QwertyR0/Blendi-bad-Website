import React, { Component } from 'react'
import "../main.css"
import { Card, Button, ButtonGroup } from 'react-bootstrap'

export default class blendiInfo extends Component {
  render() {
    return (
      <div className="CenteredDiv">
          <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Info:</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">and stuff</Card.Subtitle>
    <Card.Text>
        I am lua coder and i am the owner of the Cellua Machine Server
    </Card.Text>
    <footer>
    <Card.Footer>Featured</Card.Footer>
    <br/>
    <center>
    <ButtonGroup aria-label="Basic example">
    <a href="https://github.com/lieve-blendi"><Button variant="outline-primary">Gtihub</Button>{' '}</a>
    <a href="https://discord.gg/AfrDQybdVC"><Button variant="outline-primary">Cellua Machine Discord</Button>{' '}</a>

    </ButtonGroup>
    </center>
    </footer>
  </Card.Body>
</Card>
      </div>
    )
  }
}

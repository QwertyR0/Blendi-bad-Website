import React, { Component } from 'react'
import Config from '../TextOFTheDay.json'
import "../main.css"
import { Card } from 'react-bootstrap'

export default class broadcost extends Component {
  render() {
    return (
      <div className='container'>
        <br />
        <br />
        <br />
        <Card>
          <center>
          <Card.Title>{Config.emojis}Broadcast{Config.emojis}:</Card.Title>
          <Card.Body style={{  fontStyle: "oblique"}}>{Config.text}</Card.Body>
          </center>
        </Card>
      </div>
    )
  }
}

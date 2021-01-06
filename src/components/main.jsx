import React, { Component } from "react"
import logo from "../logo.svg"
import { Card, Navbar, CardColumns, Badge } from "react-bootstrap"
import { Link } from "react-router-dom"
import routerPath from "./routerPath"
const routesList = routerPath()

class main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      components: Array(5).fill(0),
    }
  }
  render() {
    return (
      <div>
        <Navbar bg='dark' variant='dark'>
          <Navbar.Brand>
            <img alt='' src={logo} width='30' height='30' /> REACT BASED SAMPLES
            PROJECTS
          </Navbar.Brand>
        </Navbar>
        <CardColumns className='mt-3'>
          {Object.keys(routesList).map((key, index) => (
            <Card bg='dark' text='white' className='text-center' key={index}>
              <Card.Body>
                <h1>
                  <Badge variant='success'>{index + 1}</Badge>
                </h1>
                <Card.Title>{key.split("/")[1]}'s Projects</Card.Title>
                <Card.Text>
                  In this project, we can just create small web pages of the
                  websites
                </Card.Text>
                <Link to={key} target='_target' className='btn btn-light'>
                  Click to View Component
                </Link>
              </Card.Body>
            </Card>
          ))}
        </CardColumns>
      </div>
    )
  }
}

export default main

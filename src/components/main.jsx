import React, { Component } from "react"
import logo from "../logo.svg"
import { Card, Navbar, CardColumns, Badge, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import routerPath from "./routerPath"

const routesList = routerPath()

class main extends Component {
  openAll() {
    Object.keys(routesList).map((key, index) => window.open(key, key))
  }
  render() {
    return (
      <div>
        {/* <Button onClick={this.openAll} block>
          OPEN
        </Button>
    */}
        <Navbar bg='dark' variant='dark'>
          <Navbar.Brand>
            <img alt='' src={logo} width='30' height='30' /> REACT BASED SAMPLES
            PROJECTS UPDATED
          </Navbar.Brand>
        </Navbar>
        <CardColumns className='mt-3'>
          {Object.keys(routesList).map((key, index) => (
            <Card bg='dark' text='white' className='text-center' key={index}>
              <Card.Body>
                <h1>
                  <Badge variant='success'>{index + 1}</Badge>
                </h1>
                <Card.Title>
                  {routesList[key]?.prototype?.projectInfo()?.projectTitle}
                  's Projects
                </Card.Title>
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

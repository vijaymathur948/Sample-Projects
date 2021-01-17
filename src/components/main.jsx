import React, { Component } from "react"
import logo from "../logo.svg"
import { Card, Navbar, CardColumns, Badge } from "react-bootstrap"
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
                <Card.Title>
                  {routesList[key]?.prototype?.projectInfo()?.projectTitle}
                  's Projects
                </Card.Title>
                <Card.Text>
                  {
                    routesList[key]?.prototype?.projectInfo()
                      ?.projectDescription
                  }
                </Card.Text>
                <div>
                  <Link
                    to={key}
                    target='_target'
                    className='btn btn-outline-light mr-3'
                  >
                    Sample Component
                  </Link>
                  <a
                    href={
                      routesList[key]?.prototype?.projectInfo()?.referenceUrl
                    }
                    target='_target'
                    className='btn btn-outline-light'
                  >
                    Original Component
                  </a>
                </div>
              </Card.Body>
            </Card>
          ))}
        </CardColumns>
      </div>
    )
  }
}

export default main

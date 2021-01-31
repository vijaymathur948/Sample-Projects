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
    var sortedRoutes = []
    Object.keys(routesList).map(key => {
      var dateString = routesList[key].prototype
        .projectInfo()
        .createdAt.split("-")

      // date should be in this format eg: 28-01-2021
      var dateObject = new Date()
      dateObject.setFullYear(
        dateString[2], // representing year
        dateString[1], // representing month
        dateString[0] // representing date
      )
      var obj = {
        path: key,
        value: dateObject,
      }

      sortedRoutes.push(obj)
      return 0
    })
    sortedRoutes.sort((a, b) => {
      if (a.value < b.value) return 1
      if (a.value > b.value) return -1
      return 0
    })

    return (
      <div>
        <Navbar bg='dark' variant='dark'>
          <Navbar.Brand>
            <img alt='' src={logo} width='30' height='30' /> REACT BASED SAMPLES
            PROJECTS
          </Navbar.Brand>
        </Navbar>
        <CardColumns className='mt-3'>
          {sortedRoutes.map((object, index) => (
            <Card bg='dark' text='white' className='text-center' key={index}>
              <Card.Body>
                <h1>
                  <Badge variant='success'>{index + 1}</Badge>
                </h1>
                <Card.Title style={{ fontSize: "20px" }}>
                  {
                    routesList[object.path]?.prototype?.projectInfo()
                      ?.projectTitle
                  }
                  's Projects
                </Card.Title>
                <Card.Text style={{ fontSize: "15px" }}>
                  {
                    routesList[object.path]?.prototype?.projectInfo()
                      ?.projectDescription
                  }
                  <br />
                  <b>
                    <big>
                      Created At :
                      {" " +
                        routesList[object.path]?.prototype?.projectInfo()
                          ?.createdAt}
                    </big>
                  </b>
                  <br />
                  <b>
                    <big>
                      Completed At :
                      {" " +
                        routesList[object.path]?.prototype?.projectInfo()
                          ?.completedAt}
                    </big>
                  </b>
                  <br />
                </Card.Text>
                <div>
                  <Link
                    to={object.path}
                    target='_next'
                    className='btn btn-outline-light mr-3'
                  >
                    Sample Component
                  </Link>
                  <a
                    href={
                      routesList[object.path]?.prototype?.projectInfo()
                        ?.referenceUrl
                    }
                    target='_next'
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

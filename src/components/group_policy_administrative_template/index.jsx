import React, { Component } from "react"
import styled from "styled-components"
import { Navbar, Button, Card, ListGroup, Row, Col } from "react-bootstrap"
import icons from "glyphicons"
import data from "./links.json"

class index extends Component {
  projectInfo() {
    return {
      projectTitle: "Group Policy Templates",
      projectDescription: "A simple template for collections of items",
      referenceUrl: "https://admx.help/",
      developer: "Vijay Mathur",
      createdAt: "24-1-2021",
    }
  }
  navbar() {
    return (
      <Navbar
        variant='dark'
        style={{ backgroundColor: "rgb(39,128,227)", height: "60px" }}
      >
        <Navbar.Brand>
          <span style={{ fontSize: "30px" }}>{icons.home}</span>
          <span style={{ fontSize: "15px" }}>Group Policy Home</span>
        </Navbar.Brand>
        <Button>{icons.magnifyingGlass}</Button>
      </Navbar>
    )
  }
  removeBackground = id => {
    setTimeout(() => document.getElementById(id).classList.remove("active"), 1)
  }

  body() {
    const uniqueId = (item, index) => {
      var id =
        item
          .toLowerCase()
          .substr(0, item.length - 1)
          .replace(/ /g, "-") +
        "_" +
        index
      return id
    }
    const card = input => {
      return (
        data &&
        data.map((obj, index) => {
          return index % 2 === input ? (
            <Card className='mb-3' key={index}>
              <Card.Header style={{ textShadow: "0 0 0", fontWeight: "400" }}>
                {obj.title}
              </Card.Header>
              <ListGroup variant='flush'>
                {obj.items.map((item, innerIndex) => {
                  return (
                    <ListGroup.Item
                      key={innerIndex}
                      action
                      href={
                        `${this.projectInfo()?.referenceUrl}?category=` +
                        item.replace(/ /g, "")
                      }
                      target='_next'
                      id={uniqueId(item, index)}
                      onClick={() => {
                        var id = uniqueId(item, index)
                        this.removeBackground(id)
                      }}
                    >
                      {item}
                    </ListGroup.Item>
                  )
                })}
              </ListGroup>
            </Card>
          ) : (
            ""
          )
        })
      )
    }
    return (
      <div className='mt-3'>
        <h1 className='mb-4' style={{ fontSize: "40px", fontWeight: "100" }}>
          <img
            src='https://admx.help/img/Group_Policy_Central.png'
            alt='Admin Icon'
            className='mr-2'
          />
          Group Policy Administrative Templates Catalog
        </h1>
        <Row>
          <Col sm={5}>{card(0)}</Col>
          <Col sm={5}>{card(1)}</Col>
        </Row>
      </div>
    )
  }
  footer() {
    return (
      <div
        className='mt-5'
        style={{
          height: "50px",
          backgroundColor: "rgb(245,245,245)",
          borderTop: "2px solid lightblue ",
        }}
      >
        <a
          style={{ marginLeft: "110px", fontSize: "15px" }}
          href={this.projectInfo()?.referenceUrl}
          rel=''
        >
          © Group Policy Administrative Templates
        </a>
      </div>
    )
  }
  render() {
    return (
      <div>
        {this.navbar()}
        <div className='container'>{this.body()}</div>
        {this.footer()}
      </div>
    )
  }
}

export default index

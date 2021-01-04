import React, { Component } from "react"
import logo from "../logo.svg"
import { Navbar } from "react-bootstrap"

class index extends Component {
  render() {
    return (
      <div className='containe'>
        <Navbar bg='dark' variant='dark'>
          <Navbar.Brand href='#home'>
            <img alt='' src={logo} width='30' height='30' /> React Bootstrap
          </Navbar.Brand>
        </Navbar>
        <h1>Welcome Vijay Mathur</h1>
        <h3>Are you ready to challenge yourself</h3>
      </div>
    )
  }
}

export default index

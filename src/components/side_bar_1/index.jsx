import React, { Component } from "react"
import { Row, Col } from "react-bootstrap"
import image from "./assets/Jean_Snyman.jpg"
import styled from "styled-components"
import SideBar from "./SidebarComponent"
import AboutMe from "./AboutMe"
import WhatICanDo from "./WhatICanDo"
import SkillsAndEducation from "./SkillsAndEducation"
import Experience from "./Experience"
import Contact from "./Contact"
import { color, PROFILE } from "./Constans"
import routerList from "../routerPath"

const urls = () => {
  const urlList = { ...routerList() }
  Object.keys(urlList).map(key => {
    urlList[key] = key
  })

  return urlList
}

const ROOTURL = urls()

class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentAccordian: 0,
    }
  }

  toggleAccordian = value => {
    if (this.state.currentAccordian === value)
      this.setState({ currentAccordian: -1 })
    else this.setState({ currentAccordian: value })
  }

  projectInfo() {
    return {
      projectTitle: "Side Bar",
      projectDescription: "A simple sidebar ",
      referenceUrl: "https://www.jeansnyman.com/",
      developer: "Vijay Mathur",
      createdAt: "2-02-2021",
      completedAt: "9-02-2021",
    }
  }
  content = () => {
    return (
      <div>
        <Row className=' m-0'>
          <Col
            sm='3'
            style={{
              backgroundColor: color.imageBg,
              color: "white",
              position: "fixed",
              height: "100%",
              overflow: "auto",
              paddingTop: "30px",
            }}
          >
            <SideBar rootUrl={ROOTURL["/side_bar_1/"]} />
          </Col>
          <Col
            sm='9'
            style={{
              marginLeft: "auto",
              padding: "inherit",
              fontSize: "18px",
            }}
          >
            <div
              style={{
                backgroundImage: `url(${image}) `,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "100vh",
              }}
            />
            <div
              style={{
                backgroundColor: color.bg,
                color: "white",
                paddingLeft: "20px",
              }}
            >
              <AboutMe />
              <WhatICanDo
                currentAccordian={this.state.currentAccordian}
                toggleAccordian={this.toggleAccordian}
              />
              <Experience />
              <SkillsAndEducation />
              <Contact />
            </div>
          </Col>
        </Row>
      </div>
    )
  }
  textOnImage = () => {
    const style = {
      color: "white",
      position: "absolute",
      left: "59%",
      paddingBottomStyle: "15%",
      backgroundColor: "red",
    }

    /* {
      color:white;
      background-color:red;
    }
    */
    const convertToTraditionalCss = js => {}
    convertToTraditionalCss(style)
    const TextWrapper = styled.div`
      color: white;
      position: absolute;
      left: 59%;
      bottom: 15%;
    `

    return (
      <TextWrapper>
        <h3 className='text-right' style={{ fontSize: "40px" }}>
          {PROFILE.name.toUpperCase()}
        </h3>
        <h2 style={{ fontSize: "49px", color: "orange", fontWeight: "700" }}>
          {PROFILE.designation.toUpperCase()}
        </h2>
      </TextWrapper>
    )
  }
  render() {
    return (
      <div>
        {this.content()}
        {this.textOnImage()}
      </div>
    )
  }
}

export default index

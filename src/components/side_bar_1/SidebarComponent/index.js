import React from "react"
import { Button } from "react-bootstrap"
import IconsComponent from "../IconsComponent"

import { PROFILE, links } from "../Constans"

const sidebar = props => {
  return (
    <div className='text-center'>
      <a
        href={props.rootUrl ? props.rootUrl : "#"}
        style={{
          color: "orange",
          fontSize: "70px",
          fontWeight: "bold",
          marginTop: "30px",
          textDecoration: "none",
        }}
      >
        {PROFILE.shortName}
      </a>
      <h2 style={{ fontSize: "40px" }}>{PROFILE.name}</h2>
      <h5 style={{ fontWeight: "400", fontSize: "25px" }}>
        {PROFILE.designation}
      </h5>
      <div style={{ display: "inline-grid", marginTop: "30px" }}>
        {links.map((item, index) => {
          return (
            <Button
              onClick={() => {
                window.location.href =
                  window.location.origin + window.location.pathname + item.url
              }}
              className='m-2'
              variant='outline-dark'
              style={{
                color: "white",
                border: "none",
                fontSize: "20px",
                fontWeight: "400",
                padding: "10px",
              }}
              key={index}
            >
              {item.name}
            </Button>
          )
        })}
      </div>
      <IconsComponent />
    </div>
  )
}

export default sidebar

import React, { Component } from "react"
import {
  Navbar,
  Button,
  Card,
  ListGroup,
  Row,
  Col,
  Modal,
} from "react-bootstrap"
import data from "./links.json"
import Style from "style-it"

class index extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  projectInfo() {
    return {
      projectTitle: "Plural Sight Footer Bar",
      projectDescription: "A simple footer bar",
      referenceUrl:
        "https://www.pluralsight.com/guides/allow-access-control-origin-in-create-react-app",
      developer: "Vijay Mathur",
      createdAt: "28-01-2021",
      completedAt: "29-01-2021",
    }
  }
  footer() {
    const baseUrl = "https://www.pluralsight.com/"

    return (
      <div
        style={{
          backgroundColor: "rgb(34,34,34)",
          minHeight: "625px",
          paddingTop: "60px",
        }}
      >
        <hr style={{ border: "3px solid orange" }} />

        <div
          style={{
            color: "white",
            minHeight: "400px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          {data.map((obj, outerIndex) => {
            const titleUrl = baseUrl + obj.title.toLowerCase() + "/"

            return (
              <div key={outerIndex}>
                <div
                  style={{
                    marginTop: "77px",
                    marginBottom: "40px",
                    fontWeight: 700,
                    fontSize: "13px",
                    textTransform: "uppercase",
                  }}
                >
                  {obj.title}
                </div>
                <div>
                  {obj.items.map((item, innerIndex) => {
                    const itemUrl =
                      titleUrl + item.toLowerCase().replace(" ", "_")

                    return (
                      <a
                        href={itemUrl}
                        style={{
                          display: "block",
                          padding: "7px 0",
                          lineHeight: "16px",
                          cursor: "pointer",
                          color: "#7c7c7d",
                          fontWeight: "500",
                          transition: ".3s all",
                          width: "fit-content",
                          textDecoration: "none",
                        }}
                        onMouseEnter={e =>
                          (e.currentTarget.style.color = "white")
                        }
                        onMouseLeave={e =>
                          (e.currentTarget.style.color = "#7c7c7d")
                        }
                      >
                        {item}
                      </a>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
        <hr style={{ border: "3px solid orange" }} />
      </div>
    )
  }
  render() {
    return <div>{this.footer()}</div>
  }
}

export default index

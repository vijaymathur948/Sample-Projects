import React, { Component } from "react"
import styled from "styled-components"

class index extends Component {
  projectInfo() {
    return {
      projectTitle: "The Accidental Developer",
      projectDescription: "This is the first Sample of someone's blog",
      referenceUrl:
        "https://osric.com/chris/accidental-developer/2016/04/powershell-ellipsis-dot-dot-dot/",
      developer: "Vijay Mathur",
      createdAt: "16-01-2021",
      completedAt: "20-01-2021",
    }
  }
  getLinks() {
    const links = [
      { linktitle: "Pages", originalName: "", linkItems: ["About"] },
      {
        linktitle: "CATEGORIES",
        originalName: "category",
        linkItems: [
          "Accessibility",
          "ansible",
          "authors",
          "Best Practices",
          "ColdFusion",
          "CSS",
          "Debugging",
          "Docker",
          "Facebook",
          "Flash",
          "Games",
          "Git",
          "Google",
          "Javascript",
          "Monitoring",
          "MySQL",
          "Oracle",
          "perl",
          "php",
          "powershell",
          "Process",
          "python",
          "Scala",
          "security",
          "seo",
          "Sharepoint",
          "SysAdmin",
          "Testing",
          "Tips & Tricks",
          "twitter",
          "Uncategorized",
          "User Interface",
          "Video",
          "wordpress",
          "Workstation",
          "xml",
        ],
      },
    ]
    const baseUrl = "https://osric.com/chris/accidental-developer/"

    return links.map((list, index_1) => {
      const titleUrl =
        baseUrl +
        (list.originalName !== "" ? list.originalName.toLowerCase() + "/" : "")

      const LinkTitle = styled.h3`
        margin-bottom: 20px;
      `
      return (
        <div style={{ margin: "40px 10px" }} key={index_1}>
          <LinkTitle>
            <b>{list.linktitle}</b>
          </LinkTitle>

          {list.linkItems.map((items, index_2) => {
            const HoverOnItems = styled.div`
              &:hover {
                color: lightblue;
              }
              cursor: pointer;
            `

            const itemsUrl = titleUrl + items.toLowerCase()
            return (
              <div
                key={index_2}
                style={{
                  paddingLeft: "30px",
                }}
              >
                <a
                  href={itemsUrl}
                  style={{
                    fontSize: "18px",
                    fontWeight: 500,
                    textDecoration: "none",
                    color: "white",
                    lineHeight: "1",
                  }}
                >
                  <HoverOnItems>{items}</HoverOnItems>
                </a>
                <hr
                  style={{
                    borderTop: "1px solid white",
                    marginRight: "200px",
                    width: "200px",
                  }}
                />
              </div>
            )
          })}
        </div>
      )
    })
  }
  sidebar() {
    return (
      <div
        style={{
          backgroundColor: "rgb(40,79,104)",
          width: "40%",
          color: "white",
          padding: "50px",
          fontSize: "40px",
          fontWeight: "bold",
        }}
      >
        The Accidental Developer
        <div
          style={{
            color: "rgb(189,201,209)",
            padding: "10px",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          <p>What if Gregor Samsa awoke a computer programmer?</p>
          <input type='text' placeholder=' Search  ...' />
        </div>
        {this.getLinks()}
      </div>
    )
  }

  render() {
    return (
      <div style={{ backgroundColor: "rgb(230,238,244)" }}>
        {this.sidebar()}
      </div>
    )
  }
}

export default index

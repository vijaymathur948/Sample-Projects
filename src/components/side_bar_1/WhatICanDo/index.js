import { Accordion, Card } from "react-bootstrap"
import { accordians, color } from "../Constans"

const WhatICanDo = props => {
  const currentAccordian = props.currentAccordian
  const toggleAccordian = props.toggleAccordian
  return (
    <div className='container pt-4 mb-6'>
      <p
        id='title'
        style={{
          color: "orange",
          fontSize: "60px",
          fontWeight: "bold",
        }}
      >
        What I can do.
      </p>
      <div id='content' className='pl-3'>
        <Accordion defaultActiveKey='0' style={{ width: "40rem" }}>
          {accordians.map((item, indexNo) => {
            return (
              <div key={indexNo}>
                <Card
                  style={{
                    backgroundColor:
                      currentAccordian === indexNo
                        ? color.accordianBg
                        : color.bg,
                    border: "none",
                    borderRadius: "0",
                    margin: `0 ${currentAccordian === indexNo ? "-20px" : "0"}`,
                  }}
                  key={indexNo}
                >
                  <Accordion.Toggle
                    as={Card.Header}
                    style={{
                      border: "none",
                      fontSize: "25px",
                      fontWeight: "500",
                    }}
                    onClick={() => toggleAccordian(indexNo)}
                    eventKey={indexNo.toString()}
                  >
                    {item.title}
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey={indexNo.toString()}>
                    <Card.Body style={{ fontWeight: "500" }}>
                      {item.content}
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                {indexNo !== accordians.length - 1 ? (
                  <hr
                    style={{
                      margin: "0",
                      marginTop: "10px",
                      borderBottom:
                        indexNo === currentAccordian - 1
                          ? "none"
                          : "1px solid gray",
                    }}
                  />
                ) : (
                  ""
                )}
              </div>
            )
          })}
        </Accordion>
      </div>
    </div>
  )
}
export default WhatICanDo

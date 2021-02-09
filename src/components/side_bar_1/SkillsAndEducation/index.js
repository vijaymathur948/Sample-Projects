import { Row, Col } from "react-bootstrap"
import { color, educationData, mySkillsData } from "../Constans"

const SkillsAndEducation = () => {
  return (
    <div id='skills_and_education' className='container pt-4 mb-5'>
      <p
        id='title'
        style={{
          color: color.orangeColor,
          fontSize: "60px",
          fontWeight: "bold",
        }}
      >
        What I know.
      </p>
      <div id='content' style={{ marginLeft: "10%", marginTop: "5%" }}>
        <Row className='mb-5'>
          <Col sm='4'>
            <div
              style={{
                fontSize: "35px",
                fontWeight: "500",
                color: color.orangeColor,
              }}
            >
              My Education
            </div>
          </Col>
          <Col sm='4'>
            <div
              style={{
                fontSize: "35px",
                fontWeight: "500",
                color: color.orangeColor,
                marginLeft: "50%",
              }}
            >
              My Skills
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm='4'>
            {educationData.map((item, indexNo) => {
              return (
                <div
                  key={indexNo}
                  id='block'
                  style={{
                    borderLeft: `1px solid ${color.orangeColor}`,
                    paddingLeft: "20px",
                    marginBottom: "50px",
                  }}
                >
                  <p id='title' style={{ fontSize: "20px" }}>
                    {item.title}
                  </p>
                  <div>
                    <div
                      id='qualification'
                      style={{
                        fontSize: "24px",
                        fontWeight: "500",
                        color: color.orangeColor,
                        paddingLeft: "20px",
                        width: "89%",
                        textAlign: "right",
                      }}
                    >
                      {item.qualification}
                    </div>
                    <div
                      id='sub-info'
                      style={{
                        paddingLeft: "30px",
                        textAlign: "right",
                        paddingRight: "10%",
                      }}
                    >
                      <p
                        style={{
                          margin: "0",
                        }}
                      >
                        {item.subInfo_1}
                      </p>

                      <p>{item.subInfo_2}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </Col>
          <Col style={{ paddingLeft: "17%" }}>
            {mySkillsData.map((skillItem, itemIndexNo) => {
              return (
                <div className='mb-3' key={itemIndexNo}>
                  <div
                    id='section'
                    style={{
                      fontSize: "20px",
                      fontWeight: "500",
                      color: color.orangeColor,
                      textTransform: "uppercase",
                      marginBottom: "20px",
                    }}
                  >
                    {skillItem.section}
                  </div>
                  {skillItem.list.map((listItem, listItemIndexNo) => {
                    return (
                      <div
                        key={listItemIndexNo}
                        id='list'
                        style={{
                          paddingLeft: "20px",
                        }}
                      >
                        <div>
                          <Row>
                            <Col sm='4'>
                              <p style={{ fontSize: "20px" }}>
                                {listItem.title}
                              </p>
                            </Col>
                            <Col>
                              <div
                                style={{
                                  display: "flex",
                                }}
                              >
                                {Array(listItem.total)
                                  .fill(0)
                                  .map((circle, circleIndexNo) => {
                                    return (
                                      <span
                                        key={circleIndexNo}
                                        style={{
                                          backgroundColor:
                                            circleIndexNo < listItem.score
                                              ? color.orangeColor
                                              : "rgb(33,33,33)",
                                          width: "16px",
                                          height: "16px",
                                          marginLeft: "10px",
                                          borderRadius: "50%",
                                        }}
                                      />
                                    )
                                  })}
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </Col>
        </Row>
      </div>
    </div>
  )
}
export default SkillsAndEducation

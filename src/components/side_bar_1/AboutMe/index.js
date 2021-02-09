import { Row, Col } from "react-bootstrap"
import { info } from "../Constans"

const AboutMe = () => {
  return (
    <div id='about_me' className='container pt-4'>
      <p
        id='title'
        style={{
          color: "orange",
          fontSize: "60px",
          fontWeight: "bold",
        }}
      >
        Who I am.
      </p>
      <div id='content'>
        <Row>
          <Col sm='4'>
            <p>
              I'm a Software Engineer with 18+ years experience in Information
              Technology who loves learning new technology and creatively solve
              problems. I specialize in Full Stack Web Development, Robotic
              Processes Automation and Machine Learning. I love automating
              mundane tasks.
            </p>
          </Col>
          <Col sm='1' />
          <Col sm='7'>
            {info.map((item, indexNo) => {
              return (
                <Row className='mb-2' key={indexNo}>
                  <Col sm='2' style={{ color: "orange" }}>
                    {item.key.toUpperCase()}
                  </Col>
                  <Col sm='3'>
                    <span
                      style={
                        indexNo === 3
                          ? {
                              fontSize: "17px",
                              textDecoration: "underline",
                              cursor: "pointer",
                            }
                          : { fontSize: "17px" }
                      }
                    >
                      {item.value}
                    </span>
                  </Col>
                </Row>
              )
            })}
          </Col>
        </Row>
      </div>
    </div>
  )
}
export default AboutMe

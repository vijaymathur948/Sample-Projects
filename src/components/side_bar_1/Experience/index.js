import { Row, Col, Card } from "react-bootstrap"
import { experienceData, color } from "../Constans"

const experienceComponent = (item, indexNo) => {
  return (
    <Card
      text={"white"}
      style={{
        width: "70%",
        marginLeft: "80px",
        backgroundColor: color.accordianBg,
      }}
      className='mb-2'
    >
      <Card.Body>
        <Card.Title>{item.companyName} </Card.Title>
        <Card.Title style={{ color: color.orangeColor }}>
          {item.title}
        </Card.Title>
        <Card.Text>{item.content}</Card.Text>
      </Card.Body>

      {/* this css is for small triangular shape icon  */}
      <div
        style={{
          border: `30px solid ${color.smallIconBg} `,
          borderLeft: "15px solid transparent",
          borderRight: "15px solid transparent",
          borderTop: "transparent",
          width: "0",
          transform: `rotate(${indexNo % 2 === 0 ? 90 : 270}deg)`,

          position: "absolute",
          left: indexNo % 2 === 0 ? "100%" : "none",
          right: indexNo % 2 === 1 ? "100%" : "none",
          top: "50%",
        }}
      />
      {/* this css is for the year when we are working */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: indexNo % 2 === 0 ? "140%" : "none",
          right: indexNo % 2 === 1 ? "145%" : "none",
        }}
      >
        {item.year}
      </div>
      {/* this css is for the circle in the center */}
      <div
        style={{
          position: "absolute",
          top: "48%",
          left: indexNo % 2 === 0 ? "116%" : "none",
          right: indexNo % 2 === 1 ? "122%" : "none",
          width: "50px",
          height: "50px",
          backgroundColor: `${color.orangeColor}`,
          display: "inline-block",
          borderRadius: "50%",
          zIndex: "1",
          border: `5px solid ${color.accordianBg}`,
        }}
      />
    </Card>
  )
}

const Experience = () => {
  return (
    <div id='experience' className='container pt-4 mb-6'>
      <p
        id='title'
        style={{
          color: "orange",
          fontSize: "60px",
          fontWeight: "bold",
        }}
      >
        Where I've been.
      </p>
      <div id='content'>
        {experienceData.map((item, indexNo) => {
          return (
            <Row className='' key={indexNo}>
              <Col sm='6'>
                {indexNo % 2 === 0 ? experienceComponent(item, indexNo) : ""}
              </Col>
              <Col
                sm='6'
                style={{
                  borderLeft: `2px solid ${color.rightSideBg}`,
                }}
              >
                {indexNo % 2 === 1 ? experienceComponent(item, indexNo) : ""}
              </Col>
            </Row>
          )
        })}
      </div>
    </div>
  )
}
export default Experience

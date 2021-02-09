import { Row, Col, Form, Button } from "react-bootstrap"
import styled from "styled-components"
import IconsComponent from "../IconsComponent"
import { color, socialContactData, socialContactIconsCss } from "../Constans"
import { MapIcons } from "../Icons"

const Contact = props => {
  const FormComponent = styled.div`
    textarea {
      background-color: ${color.formBg};
      border: 0px;
      border-radius: 0px;
      padding-left: 25px;
      font-size: 25px;
      color: ${color.inputColor};
    }
    input {
      background-color: ${color.formBg};
      border: 0px;
      border-radius: 0px;
      padding: 30px;
      font-size: 25px;
      color: ${color.inputColor};
    }
    textarea:focus,
    input:focus {
      box-shadow: none;
      background-color: white;
      color: black;
      &::placeholder {
        color: black;
      }
    }
    textarea::placeholder,
    input::placeholder {
      font-size: 25px;
      color: ${color.inputColor};
    }
    input,
    textarea {
      margin-bottom: 30px;
    }
  `
  const SubmitButton = styled.div`
    margin-top: 30px;
    button {
      background-color: ${color.formSubmitButtonColor};
      float: right;
      border: 0px;
      border-radius: 0px;
      padding: 17px 35px;
      font-size: 18px;
      font-weight: 500;
    }
  `
  const handleForm = e => {
    e.preventDefault()
    var arr = e.target
    console.log(arr[0].value)
    console.log(arr[1].value)
    console.log(arr[2].value)
    console.log(arr[3].value)
    console.log(arr[4].value)
  }
  const SocialContactRows = styled.div`
    .address-title {
      color: ${color.orangeColor};
      font-size: 30px;
      margin: 0px;
    }
    .address-info {
      font-size: 20px;
      margin: 0px;
      color: ${color.inputColor};
    }
  `

  return (
    <div
      id='contact'
      className='container pt-4'
      style={{ paddingBottom: "250px" }}
    >
      <p
        id='title'
        style={{
          color: color.orangeColor,
          fontSize: "60px",
          fontWeight: "bold",
        }}
      >
        Let's talk.
      </p>
      <Row>
        <Col sm='7' style={{ color: color.orangeColor, fontSize: "25px" }}>
          SEND ME A MESSAGE
        </Col>
        <Col sm='5' style={{ color: color.orangeColor, fontSize: "25px" }}>
          SOCIAL CONTACTS
        </Col>
      </Row>
      <Row>
        <Col sm='5'>
          <Form onSubmit={handleForm} className='mt-4 mb-4'>
            <FormComponent>
              <Form.Group controlId='name'>
                <Form.Control type='text' placeholder='Name' />
              </Form.Group>
              <Form.Group controlId='email'>
                <Form.Control type='email' placeholder='Email' />
              </Form.Group>
              <Form.Group controlId='subject'>
                <Form.Control type='text' placeholder='Subject' />
              </Form.Group>
              <Form.Group controlId='Message'>
                <Form.Control as='textarea' rows='3' placeholder='Message' />
              </Form.Group>
            </FormComponent>
            <SubmitButton>
              <Button variant='warning' type='submit'>
                CONTACT ME
              </Button>
            </SubmitButton>
          </Form>
        </Col>
        <Col sm='2' />
        <Col sm='5'>
          <div className='mb-5'>
            <IconsComponent />
          </div>
          {socialContactData.map((addressListItem, addressIndexNo) => {
            const Icon = addressListItem.icon
            const mapObject = MapIcons(socialContactIconsCss)
            return (
              <Row className=' mb-4' key={addressIndexNo}>
                <Col sm='3'>{mapObject[Icon]}</Col>
                <Col>
                  <SocialContactRows>
                    <p className='address-title'>{addressListItem.title}</p>
                    {addressListItem.addressList.map(
                      (addressInfo, addressesIndexNo) => {
                        return (
                          <p key={addressesIndexNo} className='address-info'>
                            {addressInfo}
                          </p>
                        )
                      }
                    )}
                  </SocialContactRows>
                </Col>
              </Row>
            )
          })}
        </Col>
      </Row>
    </div>
  )
}
export default Contact

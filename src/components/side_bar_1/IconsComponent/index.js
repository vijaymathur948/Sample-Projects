import { IconContext } from "react-icons"
import { icons } from "../Constans"
import { Button } from "react-bootstrap"
import { MapIcons } from "../Icons"

const IconsComponent = () => {
  const mapObject = MapIcons()
  return (
    <div style={{ marginTop: "60px" }}>
      <IconContext.Provider
        value={{
          style: {
            fontSize: "40px",
            backgroundColor: "white",
            color: "black",
            padding: "4px",
            margin: "4px",
            borderRadius: "2px",
          },
        }}
      >
        {icons.map((item, index) => {
          return (
            <Button
              key={index}
              style={{ border: "0px" }}
              variant='outline-dark'
            >
              {mapObject[item]}
            </Button>
          )
        })}
      </IconContext.Provider>
    </div>
  )
}
export default IconsComponent

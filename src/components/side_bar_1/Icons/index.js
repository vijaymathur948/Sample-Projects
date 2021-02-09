import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"
import { MdCall, MdPlace, MdEmail } from "react-icons/md"

export const MapIcons = props => {
  const css = props
  return {
    twitter: <FaTwitter />,
    linkedIn: <FaLinkedin />,
    github: <FaGithub />,
    call: <MdCall style={css} />,
    place: <MdPlace style={css} />,
    email: <MdEmail style={css} />,
  }
}

const generateIconsConstants = () => {
  const obj = { ...MapIcons() }
  Object.keys(obj).map(key => {
    obj[key] = key
    return ""
  })

  return obj
}
export const iconsConstant = generateIconsConstants()

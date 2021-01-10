const routerPath = () => {
  const routes = {}
  routes["/Neha/index"] = require("./Neha/index").default
  routes["/Nishant/index"] = require("./Nishant/index").default
  routes["/Mathur/index"] = require("./Mathur/index").default

  return routes
}
export default routerPath

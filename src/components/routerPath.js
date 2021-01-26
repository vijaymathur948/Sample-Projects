const routerPath = () => { 
const routes = {} 
routes["/group_policy_administrative_template/"] = require("./group_policy_administrative_template/").default 
routes["/accidental_developer/"] = require("./accidental_developer/").default 
return routes }
export default routerPath

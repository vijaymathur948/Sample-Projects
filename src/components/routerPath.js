const routerPath = () => { 
const routes = {} 
routes["/accidental_developer/"] = require("./accidental_developer/").default 
routes["/side_bar_1/"] = require("./side_bar_1/").default 
routes["/group_policy_administrative_template/"] = require("./group_policy_administrative_template/").default 
routes["/footer_bar/"] = require("./footer_bar/").default 
return routes }
export default routerPath

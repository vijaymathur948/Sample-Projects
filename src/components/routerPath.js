import { lazy } from "react" 
const routerPath = () => { 
const routes = {} 
routes["/get-lost/bye"] = lazy(() => import("./get-lost/bye")) 
routes["/Neha/index"] = lazy(() => import("./Neha/index")) 
routes["/Nishant/index"] = lazy(() => import("./Nishant/index")) 
routes["/Mathur/index"] = lazy(() => import("./Mathur/index")) 
return routes }
export default routerPath

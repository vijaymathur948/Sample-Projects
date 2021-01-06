import React, { Suspense } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Main from "./components/main"
import routerpath from "./components/routerPath"
const routesList = routerpath()

function App() {
  return (
    <div className='App'>
      <Router>
        <Route exact path='/' component={Main} />
        <Suspense fallback={<div>Loading</div>}>
          {Object.keys(routesList).map((keys, index) => (
            <Route key={index} exact path={keys} component={routesList[keys]} />
          ))}
        </Suspense>
      </Router>
    </div>
  )
}

export default App

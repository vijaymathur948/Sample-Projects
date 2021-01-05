import "bootstrap/dist/css/bootstrap.min.css"
import Main from "./components/main"
import Mathur from "./components/mathur/index"
import { BrowserRouter as Router, Route } from "react-router-dom"

function App() {
  return (
    <div className='App'>
      <Router>
        <Route exact path='/' component={Main} />

        <Route path='/mathur' component={Mathur} />
      </Router>
    </div>
  )
}

export default App

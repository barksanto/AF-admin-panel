import Home from "../src/pages/home/Home"
import List from "../src/pages/list/List"
import Login from "../src/pages/login/Login"
import New from "../src/pages/new/New"
import Single from "../src/pages/single/Single"

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              {/* on 'users' route, display List component */}
              <Route index element={<List />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

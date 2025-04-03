import { BrowserRoute, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import Home from "./pages/Home"

function App() {

  return (
    <>
      <BrowserRoute>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={Home} />

          </Route>
        </Routes>
      </BrowserRoute>

    </>
  )
}

export default App

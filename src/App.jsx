import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import Home from "./pages/Home"
import { PostProvider } from './contexts/PostContext';

function App() {

  return (

    <PostProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={Home} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PostProvider>

  )
}

export default App

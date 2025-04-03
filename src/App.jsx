import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import Home from "./pages/Home"
import { PostProvider } from './contexts/PostContext';
import { AlertProvider } from "./contexts/AlertContext";

function App() {

  return (
    <AlertProvider>
      <PostProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path="/" Component={Home} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PostProvider>
    </AlertProvider>
  )
}

export default App

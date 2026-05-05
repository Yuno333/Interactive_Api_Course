import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home       from './pages/Home.jsx'
import Player     from './pages/Player.jsx'
import Instructor from './pages/Instructor.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"                 element={<Home />} />
        <Route path="/course/:courseId" element={<Player />} />
        <Route path="/instructor"       element={<Instructor />} />
        <Route path="*"                 element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

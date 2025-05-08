import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./page/Layout"
import MoreProjects from "./page/MoreProjects"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Layout />} />
        <Route path="more-projects" element={<MoreProjects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

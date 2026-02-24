import { BrowserRouter, Route, Routes } from "react-router";
import ProjectsPage from "../ProjectsPage";
import HomePage from "../HomePage";

function Root() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default Root;
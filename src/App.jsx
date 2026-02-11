import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/projects/ScrollToTop"; 
import MainPage from "./pages/mainPage/MainPage";
import ResumePage from "./pages/resumePage/ResumePage";
import ProjectsPage from "./pages/projectsPage/ProjectsPage";
import "./app.scss";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
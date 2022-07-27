import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./routes/Home";
import { Projects } from "./routes/Projects";
import { About } from "./routes/About";
import { Contact } from "./routes/Contact";
import { ProjectInformation } from "./routes/ProjectInformation";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/projectinfo" element={<ProjectInformation />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;

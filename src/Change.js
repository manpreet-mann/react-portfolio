import React from "react";
import Mainstream from "./pages/Mainstream";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home_screen";
import AboutPage from "./pages/About_screen";
import ContactPage from './pages/Contact_screen'
import ExperiencePage from "./pages/Experience_screen";
import ProjectPage from './pages/Project_screen'
import SkillsPage from './pages/Skill_screen'
function Change() {
  return (
    <div>
      {" "}
      <Routes>
        <Route path="/" element={<Mainstream />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/skill" element={<SkillsPage/>}/>
          <Route path="/project" element={<ProjectPage/>}/>
          <Route path="/experience" element={<ExperiencePage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default Change;

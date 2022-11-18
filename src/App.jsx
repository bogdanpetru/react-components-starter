import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProjectList from "./views/ProjectsList";
import ProjectDetails from "./views/ProjectDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<ProjectList />} />
        <Route path="view" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

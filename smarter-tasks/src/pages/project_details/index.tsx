import React from "react";

import ProjectDetails from "./ProjectDetails";

import { Outlet } from "react-router-dom";
import { TasksProvider } from "../../context/task/context";

const ProjectDetailsIndex: React.FC = () => {
  return (
    <TasksProvider>
      <ProjectDetails />
      <Outlet />
    </TasksProvider>
  );
};

export default ProjectDetailsIndex;

import React, {Suspense} from "react";
const ProjectList = React.lazy(() => import("./ProjectList"));
import NewProject from "./NewProject";
import ErrorBoundary from "../../components/ErrorBoundary";
import { useTranslation } from "react-i18next";

const Projects = () => {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight">Projects</h2>
        <NewProject />
      </div>
      <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
          <ProjectList />
        </Suspense>
      </ErrorBoundary>
    </>
  )
}
export default Projects;

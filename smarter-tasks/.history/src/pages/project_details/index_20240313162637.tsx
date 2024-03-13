import React,{ Suspense } from "react";

const ProjectDetails = React.lazy(()=> import("./ProjectDetails"))

import { Outlet } from "react-router-dom";
import { TasksProvider } from "../../context/task/context";
import ErrorBoundary from "../../components/ErrorBoundary";
import { useTranslation } from "react-i18next";

const ProjectDetailsIndex: React.FC = () => {
  const {t} = useTranslation()
  return (
    <TasksProvider>
      <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">{t('loading')}</div>}>
          <ProjectDetails />
          <Outlet />
        </Suspense>
      </ErrorBoundary>
    </TasksProvider>
  );
};

export default ProjectDetailsIndex;

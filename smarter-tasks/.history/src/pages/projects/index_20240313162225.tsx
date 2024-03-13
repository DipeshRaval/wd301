import React, {Suspense} from "react";
const ProjectList = React.lazy(() => import("./ProjectList"));
import NewProject from "./NewProject";
import ErrorBoundary from "../../components/ErrorBoundary";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const {t} = useTranslation()
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight"> {t("Projects")} </h2>
        <NewProject />
      </div>
      <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">{t('Loading')}</div>}>
          <ProjectList />
        </Suspense>
      </ErrorBoundary>
    </>
  )
}
export default Projects;

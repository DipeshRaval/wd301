import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useProjectsState } from "../../context/projects/context";
import DragDropList from "./DragDropList";
import { useTasksDispatch, useTasksState } from "../../context/task/context";
import { refreshTasks } from "../../context/task/actions";
import { useTranslation } from "react-i18next";

const ProjectDetails = () => {
  const tasksState = useTasksState();
  const taskDispatch = useTasksDispatch();
  const projectState = useProjectsState();
  let { projectID } = useParams();
  const {t} = useTranslation()

  useEffect(() => {
    if (projectID) refreshTasks(taskDispatch, projectID);
  }, [projectID, taskDispatch]);

  const selectedProject = projectState?.projects.filter(
    (project) => `${project.id}` === projectID
  )?.[0];

  if (tasksState.isLoading) {
    return <>{t('loading')}</>;
  }

  if (!selectedProject) {
    throw new Error("There is not such a Project")
  }
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight text-slate-700 dark:text-zinc-50">
          {selectedProject.name}
        </h2>
        <Link to={`tasks/new`}>
          <button
            id="newTaskBtn"
            className="rounded-md bg-blue-600 px-4 py-2 m-2 text-sm font-medium text-white hover:bg-opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            {t('newTaskButtonText')}
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-2">
        <DragDropList data={tasksState.projectData} />
      </div>
    </>
  );
};

export default ProjectDetails;

import React from "react";
import { Link } from "react-router-dom";
import { useProjectsState } from "../../context/projects/context";
import { useTranslation } from "react-i18next";
export default function ProjectListItems() {
  let state: any = useProjectsState();
  const {t} = useTranslation()
  const { projects, isLoading, isError, errorMessage } = state
  // console.log(projects);

  // If `isLoading` is true, and there are no projects, in that case,
  // I'll show a loading text
  if (projects.length === 0 && isLoading) {
    return <span>{t('loading')}</span>;
  }

  // if (projects.length === 0) {
  //  throw Error("Error!!! Projects are not created Yet.");
  //}

// Next, if there is an error, I'll show the error message.
  if (isError) {
    return <span>{errorMessage}</span>;
  }

  // And finally I'll iterate over the projects object to show the
  // individual projects card.
  return (
    <>
      {projects.map((project: any) => (
        <Link
        key={project.id}
        to={`${project.id}`}
        className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
          {project.name}
        </h5>
      </Link>
      ))}
    </>
  );
}

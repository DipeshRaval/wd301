import React, { forwardRef, useEffect} from "react";
import { Draggable } from "react-beautiful-dnd";

import { TaskDetails } from "../../context/task/types";
// import "./TaskCard.css";
import { Link } from "react-router-dom";
import { deleteTask } from "../../context/task/actions";
import { useParams } from "react-router-dom";
import { useTasksDispatch } from "../../context/task/context";
import { useTranslation } from "react-i18next";

const Task = forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<{ task: TaskDetails }>
>((props, ref) => {
  const { task } = props;
  const taskDispatch = useTasksDispatch();
  const { projectID } = useParams();
  const {t, i18n:{language}} = useTranslation()
  console.log(language);
  
  const dateFormatter = new Intl.DateTimeFormat(`${language}-${language.toUpperCase()}`, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  useEffect(()=>{
    console.log(language);
    
    console.log(dateFormatter.format(new Date(task.dueDate.split('T')[0])));
  },[language])

  return (
    <div ref={ref} {...props} className="m-2 flex">
      <div className="TaskItem m-2 flex dark:bg-slate-800">
        <Link
          className="TaskItem dark:bg-slate-800 w-full shadow-md border border-slate-100 bg-white"
          to={`tasks/${task.id}`}
        >
          <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div>
              <h2 className="text-base font-bold my-1">{task.title}</h2>
              <p className="text-sm text-slate-500">
                {/* {new Date(task.dueDate).toDateString()} */}
                {dateFormatter.format(new Date(task.dueDate.split('T')[0]))}                
              </p>
              <p className="text-sm text-slate-500">{t('desctiptionText')}: {task.description}</p>
              <p className="text-sm text-slate-500">
                {t('assigneeText')}: {task.assignedUserName ?? "-"}
              </p>
            </div>
            <button
              className="deleteTaskButton cursor-pointer h-4 w-4 rounded-full my-5 mr-5"
              onClick={(event) => {
                event.preventDefault();
                deleteTask(taskDispatch, projectID ?? "", task);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 fill-red-200 hover:fill-red-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
});

const Container = (
  props: React.PropsWithChildren<{
    task: TaskDetails;
    index: number;
  }>
) => {
  return (
    <Draggable index={props.index} draggableId={`${props.task.id}`}>
      {(provided) => (
        <Task
          task={props.task}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        />
      )}
    </Draggable>
  );
};

export default Container;

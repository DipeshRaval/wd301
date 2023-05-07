import React from 'react'
import { Link } from 'react-router-dom';

interface Props{
  deleteTask : (title : string) => void,
  id:string,
  title : string,
  description : string,
  dueDate : string
}

export default function Task(props:Props) {
  return (
    <div className="TaskItem shadow-md border border-slate-100">
      <Link to={`/tasks/${props.id}`}>
        <h2 className="text-base font-bold my-1">{props.title}</h2>
      </Link>
      <p className="text-sm text-slate-500">{props.dueDate}</p>
      {props.description && <p className="text-sm text-slate-500">Description: {props.description}</p>}
      <button id="deleteTaskButton" className='deleteTaskButton border border-black bg-red-400 rounded-xl p-2' onClick={()=> {props.deleteTask(props.id)}}>Delete</button>
    </div>
  );
}

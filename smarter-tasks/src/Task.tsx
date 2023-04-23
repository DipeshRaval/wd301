import React from 'react'
import { TaskItem } from './types'

export default function Task(props:TaskItem) {
  return (
    <div className="TaskItem shadow-md border border-slate-100">
      <h2 className="text-base font-bold my-1">{props.title}</h2>
      <p className="text-sm text-slate-500">{props.dueDate}</p>
      {props.description && <p className="text-sm text-slate-500">Description: {props.description}</p>}
    </div>
  );
}

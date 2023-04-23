import React from 'react'
import Task from './Task';
import "./TaskCard.css"

import { TaskItem } from './types';

interface Props {
  tasks : TaskItem[]
}

export default function TaskList(props: Props){
  const list = props.tasks.map((task, idx) => (
    <Task
      key={idx}
      title={task.title}
      description={task.description}
      dueDate={task.dueDate}
    />
  ));
  return <>{list}</>;
};

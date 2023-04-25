import React from 'react'
import Task from './Task';
import "./TaskCard.css"

import { TaskItem } from './types';

interface Props {
  tasks : TaskItem[],
  deleteTask : (title : string) => void
}

export default function TaskList(props: Props){
  const list = props.tasks.map((task, idx) => (
    <li>
      <Task
        key={idx}
        title={task.title}
        description={task.description}
        dueDate={task.dueDate}
        deleteTask={props.deleteTask}
      />
    </li>
  ));
  return <><ol className='list-decimal'>{list}</ol></>;
};

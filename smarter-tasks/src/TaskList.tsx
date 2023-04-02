import React, { Component } from 'react'
import Task from "./Task";
import { TaskItem } from './types';

interface Props {
  tasks: TaskItem[];
}

interface State {}

export default class TaskList extends Component<Props, State> {

  render() {
    return (
      this.props.tasks.map((task,index) => <Task key={index} title={task.title} />)
    )
  }
}

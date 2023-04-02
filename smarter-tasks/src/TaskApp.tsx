import React, { Component } from 'react'
import TaskForm from './TaskForm'
import TaskList from './TaskList'
import { TaskItem } from './types'

interface TaskAppProps {

}

interface TaskAppState {
  tasks : TaskItem[]
}

export default class TaskApp extends Component<TaskAppProps,TaskAppState> {

  constructor(props : TaskAppProps){
    super(props);
    this.state = {
      tasks : []
    }
  }

  addTask = (task :TaskItem) => {
    this.setState((state,props)=>{
      return {
        tasks : [...state.tasks,task]
      }
    })
  }

  render() {
    return (
      <div className="container py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl mb-2 font-bold text-slate-700">
        Smarter Tasks
      </h1>
      <h1 className="text-md mb-6 text-slate-600">
        <span className="font-bold">Project: </span>
        Graduation Final Year Project (Revamp college website)
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="border border-slate-200 rounded-xl p-4">
          <h1 className="text-slate-500 font-bold text-center mb-2">
            Pending
          </h1>
          <TaskForm addTask={this.addTask}/>
          <TaskList tasks={this.state.tasks} />
        </div>
      </div>
    </div>
    )
  }
}

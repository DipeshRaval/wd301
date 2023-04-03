import React, { Component } from 'react'
import { TaskItem } from './types'

interface TaskFormProps{
  addTask : (task :TaskItem) => void
}
interface TaskFormState{
  title : string,
  description: string,
  dueDate: string
}

export default class TaskForm extends Component<TaskFormProps,TaskFormState> {

  constructor(props : TaskFormProps)
  {
    super(props)
    this.state = {
      title : "",
      description : "",
      dueDate : ""
    }
  }

  addTask : React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      title: this.state.title,
      description: this.state.description,
      dueDate: this.state.dueDate
    }
    if(newTask.title === "")
    {
      alert("Task titlr cannot be empty")
      return;
    }
    if(newTask.dueDate === "")
    {
      alert("Task duedate cannot be empty")
      return;
    }
    this.props.addTask(newTask);
    this.setState({ title: "",description:"",dueDate:"" });
  }

  eventChange : React.ChangeEventHandler<HTMLInputElement> = (event) => {
    // console.log(event.target.id);
    if(event.target.id === "todoTitle")
    {
      this.setState({
        title : event.target.value
      })
    }
    if(event.target.id === "todoDescription")
    {
      this.setState({
        description : event.target.value
      })
    }
    if(event.target.id === "todoDueDate")
    {
      this.setState({
        dueDate : event.target.value
      })
    }

  }

  render() {
    return (
      <>
        <form onSubmit={this.addTask}>
          <input type="text" className='p-2 border w-full text-gray-700 font-bold my-2' id='todoTitle' placeholder='Task title' value={this.state.title} onChange={this.eventChange}/>
          <input type="text" onChange={this.eventChange} value={this.state.description} className='p-2 border w-full text-gray-700 font-bold my-2' id="todoDescription" placeholder='Task Description' />
          <input type="date" onChange={this.eventChange} value={this.state.dueDate} className='p-2 border w-full text-gray-700 font-bold my-2' id="todoDueDate" />
          <button type='submit' className='p-2 px-3 border font-semibold bg-green-500 text-white rounded-md mt-2'>Add Item</button>
        </form>
     </>
    )
  }
}

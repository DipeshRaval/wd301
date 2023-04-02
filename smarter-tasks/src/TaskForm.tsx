import React, { Component } from 'react'
import { TaskItem } from './types'

interface TaskFormProps{
  addTask : (task :TaskItem) => void
}
interface TaskFormState{
  title : string
}

export default class TaskForm extends Component<TaskFormProps,TaskFormState> {

  constructor(props : TaskFormProps)
  {
    super(props)
    this.state = {
      title : ""
    }
  }

  addTask : React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      title: this.state.title
    }
    this.props.addTask(newTask);
    this.setState({ title: "" });
  }

  titleChange : React.ChangeEventHandler<HTMLInputElement> = (event) => {
    // console.log(event.target.value);
    this.setState({
      title : event.target.value
    })
  }

  render() {
    return (
     <form onSubmit={this.addTask}>
      <input type="text" value={this.state.title} onChange={this.titleChange}/>
      <button type='submit'>Add Item</button>
     </form>
    )
  }
}

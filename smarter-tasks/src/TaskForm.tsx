import React, { Component, createRef } from 'react'

interface TaskFormProps{

}
interface TaskFormState{

}

export default class TaskForm extends Component<TaskFormProps,TaskFormState> {

  inputRef = createRef<HTMLInputElement>()

  addTask : React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    console.log("Form Submited");
    console.log("Value = " + this.inputRef.current?.value);
  }

  render() {
    return (
     <form onSubmit={this.addTask}>
      <input type="text" ref={this.inputRef}/>
      <input type="submit" value="Add Task" />
     </form>
    )
  }
}

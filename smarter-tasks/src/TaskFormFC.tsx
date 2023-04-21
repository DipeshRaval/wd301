import React, { useState } from 'react';
import { TaskItem } from './types'

interface TaskFormProps{
  addTask : (task :TaskItem) => void
}

interface TaskFormState{
  title : string,
  description: string,
  dueDate: string
}

export default function TaskFormFC(props : TaskFormProps) {

  const [formState,setFormState] = useState<TaskFormState>({
    title: '',
    description : '',
    dueDate: '',
  })

  const eventChange : React.ChangeEventHandler<HTMLInputElement> = (event) => {
    // console.log(event.target.id);
    if(event.target.id === "todoTitle")
    {
      setFormState({...formState,title: event.target.value})
    }
    if(event.target.id === "todoDescription")
    {
      setFormState({...formState,description: event.target.value})
    }
    if(event.target.id === "todoDueDate")
    {
      setFormState({...formState,dueDate: event.target.value})
    }
  }

  const addTask : React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if(formState.title === "")
    {
      alert("Task titlr cannot be empty")
      return;
    }
    if(formState.dueDate === "")
    {
      alert("Task duedate cannot be empty")
      return;
    }
    props.addTask(formState);
    setFormState({ title: "",description:"",dueDate:"" });
  }
  return (
    <div>

    </div>
  )
}

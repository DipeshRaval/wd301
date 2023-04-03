import React, { Component } from 'react'
import "./TaskCard.css"

interface TaskProp {
  title: string,
  dueDate:string,
  description:string
}

export default class Task extends Component<TaskProp> {
  render() {
    return (
      <>
      {/* <div className="TaskItem shadow-md border border-slate-100">
        <h2 className="text-base font-bold my-1"></h2>
        <p className="text-sm text-slate-500"></p>
        <p className="text-sm text-slate-500">
          Description:
        </p>
      </div> */}

      <div className="TaskItem">
        <h3 className='text-xl mb-2 font-bold text-slate-700'>{this.props.title} ({this.props.dueDate})</h3>
        {this.props.description}
      </div>
    </>
    );
  }
}

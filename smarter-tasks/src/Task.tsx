import React, { Component } from 'react'

interface TaskProp {
  title: string;
}

export default class Task extends Component<TaskProp> {
  render() {
    return (
      <div className="TaskItem shadow-md border border-slate-100">
        <h2 className="text-base font-bold my-1">{this.props.title}</h2>
        <p className="text-sm text-slate-500">{"this.props.dueDate"}</p>
        <p className="text-sm text-slate-500">
          {/* Description: {this.props.description} */}
          Description
        </p>
      </div>
    );
  }
}

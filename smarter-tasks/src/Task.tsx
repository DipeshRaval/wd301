import React, { Component } from 'react'

interface TaskProp {
  title: string;
}

export default class Task extends Component<TaskProp> {
  render() {
    return (
      <h1>{this.props.title} </h1>
    )
  }
}

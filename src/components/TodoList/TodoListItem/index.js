import React, { Component } from 'react'

import './index.css'

export default class TodoListItem extends Component {
  render() {
    const {done, text} = this.props

    return (
      <div className="todo-list-item">
        <span className="todo-list-item-check">{done}</span>
        <span className="todo-list-item-text">{text}</span>
      </div>
    )
  }
}
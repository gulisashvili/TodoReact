import React, { Component } from 'react'

import './index.css'

export default class TodoListItem extends Component {
  render() {
    const {done, text} = this.props

    const checkBoxStyle = {
      background: done ? '#ba83ca': '#f1f1f1'
    }

    const listItemTextStyle = {
      textDecoration: done ? 'line-through': null
    }

    return (
      <div className="todo-list-item">
        <span className="todo-list-item-check" style={checkBoxStyle}>
          {done}
        </span>
        <span 
          className="todo-list-item-text"
          style={listItemTextStyle}
        >
          {text}
        </span>
      </div>
    )
  }
}
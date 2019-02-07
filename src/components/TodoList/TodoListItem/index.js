import React, { Component } from 'react'

import './index.css'

export default class TodoListItem extends Component {
  render() {
    const {done, text, toggle, id, updateText} = this.props

    const checkBoxStyle = {
      background: done ? '#ba83ca': '#f1f1f1'
    }

    const listItemTextStyle = {
      textDecoration: done ? 'line-through': null
    }

    return (
      <div className="todo-list-item">
        <span 
          className="todo-list-item-check" 
          style={checkBoxStyle}
          onClick={()=> toggle(id)}
        >
          {done}
        </span>
        
        <input 
          type="text" 
          className="todo-list-item-input"
          value={text} 
          onChange={(e)=> updateText(id, e.target.value)}
        />
          
      </div>
    )
  }
}
import React, { Component } from 'react'
import TodoListItem from './TodoListItem'

import './index.css'

export default class TodoList extends Component {
  render () {
    const {data, toggle, isInEditMode, updateText} = this.props

    return (
      <div className="todo-list">
        {
          data.map((item, i)=> {
            return <TodoListItem 
              done={item.done}
              text={item.text}
              toggle={toggle}
              id={item.id}
              key={i}
              isInEditMode={isInEditMode}
              updateText={updateText}
            />
          })
        }
      </div>
    )
  }
}
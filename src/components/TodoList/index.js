import React, { Component } from 'react'
import TodoListItem from './TodoListItem'

import './index.css'

export default class TodoList extends Component {
  render () {
    const {data} = this.props

    return (
      <div className="todo-list">
        {
          data.map((item, i)=> {
            return <TodoListItem 
              done={item.done}
              text={item.text}
              key={i}
            />
          })
        }
      </div>
    )
  }
}
import React, { Component } from 'react'
import TodoApp from '../TodoApp'

import css from './index.css'

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <TodoApp />
      </div>
    )
  }
}
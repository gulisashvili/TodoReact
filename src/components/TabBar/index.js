import React, { Component } from 'react'

import './index.css'

export default class TodoApp extends Component {
  render() {
    const { children } = this.props
    return (
      <div className="tab-bar">
       {this.props.children}
      </div>
    )
  }
}
import React, { Component } from 'react'

import './index.css'

export default class Button extends Component {
  render() {
    return <a onClick={this.props.addTodo} className="add-btn">+</a>
  }
}
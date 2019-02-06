import React, {Component} from 'react'

import './index.css'

export default class AddField extends Component {
  render() {
    const {newTodo, onAddFieldChange, onAddFieldKeyPress} = this.props
    return (
      <div className="add-field">
        <input 
          type="text" 
          className="add-field-input" 
          value={newTodo}
          onChange={(ev)=> onAddFieldChange(ev)}
          onKeyPress={(ev)=> onAddFieldKeyPress(ev)}
        />
      </div>
    )
  }
}
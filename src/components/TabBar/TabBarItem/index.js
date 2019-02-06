import React, { Component } from 'react'

import './index.css'

export default class TabBarItem extends Component {
 
  render() {
    const { content, tabVal, switchTabBar, isActive } = this.props
    const style = {
      'borderBottom': isActive ? '2px solid transparent' : null
    }
    
    return (
      <div 
        className="tab-bar-item" 
        style={style}
        onClick={()=> switchTabBar(tabVal)}
        >
        <span className="tab-bar-item-content">{content}</span>   
      </div>
    )
  }
}
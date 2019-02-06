import React, { Component } from 'react'
import TabBar from '../TabBar'
import TabBarItem from '../TabBar/TabBarItem'
import TodoList from '../TodoList'

import AddButton from '../Button'

import './index.css'

import {IoMdListBox} from 'react-icons/io'
import {FaRegCalendarCheck} from 'react-icons/fa'

const HOME_TAB_NUMBER = 0
const DONE_TAB_NUMBER = 1


export default class TodoApp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [
        {
          text: 'Do Yoga',
          done: false
        },
        {
          text: 'Work on React',
          done: true
        },
        {
          text: 'Swim',
          done: false
        },
        {
          text: 'Learn Algorithms',
          done: false
        },
        {
          text: 'Read 50 pages',
          done: true
        },
      ],
      newTodo: '',
      activeTab: 0
    }
  }

  addTodo () {

  }

  switchTabBar(tabVal) {
    const {activeTab} = this.state

    if(activeTab !== tabVal) {
      return this.setState({
        activeTab: this.state.activeTab == 1 ? 0: 1
      })
    }

    return null

  }

  getColor(tabVal) {
    return this.state.activeTab == tabVal ? '#ba83ca': '#dadada'
  }

  getActiveTodos() {
    return this.state.todos.filter(todo=> !todo.done)
  }

  getDoneTodos() {
    return this.state.todos.filter(todo=> todo.done)
  }

  showCurrentTabTodos() {
    const {activeTab} = this.state

    return activeTab == 0 ? this.getActiveTodos() : this.getDoneTodos()
  }

  render() {
    const { activeTab, todos } = this.state
    return (
      <div className="todo-app">
       <TabBar>
         <TabBarItem 
           content={<IoMdListBox size={35} color={this.getColor(HOME_TAB_NUMBER)}/>} 
           switchTabBar={this.switchTabBar.bind(this)}
           tabVal={HOME_TAB_NUMBER}
           isActive={activeTab == HOME_TAB_NUMBER}
        />
         <TabBarItem 
            content={<FaRegCalendarCheck size={30} color={this.getColor(DONE_TAB_NUMBER)} />} 
            switchTabBar={this.switchTabBar.bind(this)}
            tabVal={DONE_TAB_NUMBER}
            isActive={activeTab == DONE_TAB_NUMBER}
          />
       </TabBar>

       <TodoList data={this.showCurrentTabTodos()} />
       
        <div className="add-btn-wrapper">
          <AddButton addTodo={this.addTodo} />
        </div>
      </div>
    )
  }
}
import React, { Component } from 'react'
import TabBar from '../TabBar'
import TabBarItem from '../TabBar/TabBarItem'
import TodoList from '../TodoList'

import AddField from '../AddField'
import AddButton from '../AddButton'

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
      activeTab: 0,
      isCreating: false
    }
  }

  onAddFieldChange(ev) {
    this.setState({
      newTodo: ev.target.value
    })
  }

  onAddFieldKeyPress(ev) {
    console.log("ds", ev.key)
    if (ev.key == "Enter") {
      const newArr = [{
        text: this.state.newTodo,
        done: false
      }, ...this.state.todos]
     
     return this.setState({
        isCreating: false,
        newTodo: '',
        todos: newArr
      })
    }
  }

  addTodo () {
    this.setState({
      isCreating: !this.state.isCreating
    })
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
    const { activeTab, todos, newTodo } = this.state
    console.log("dasdas", newTodo)

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

      {
        this.state.isCreating && (
          <AddField 
            newTodo={this.state.newTodo} 
            onAddFieldChange={this.onAddFieldChange.bind(this)}
            onAddFieldKeyPress={this.onAddFieldKeyPress.bind(this)}
          />
        )
      }
       <TodoList data={this.showCurrentTabTodos()} />
       
        <div className="add-btn-wrapper">
          <AddButton addTodo={this.addTodo.bind(this)} />
        </div>
      </div>
    )
  }
}
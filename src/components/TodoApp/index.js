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
          done: false,
          id: 1
        },
        {
          text: 'Work on React',
          done: true,
          id: 2
        },
        {
          text: 'Swim',
          done: false,
          id: 3
        },
        {
          text: 'Learn Algorithms',
          done: false,
          id: 4
        },
        {
          text: 'Read 50 pages',
          done: true,
          id: 5
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
    if (ev.key == "Enter") {
      const newArr = [{
        text: this.state.newTodo,
        done: false,
        id: Date.now()
      }, ...this.state.todos]
     
     return this.setState({
        isCreating: false,
        newTodo: '',
        todos: newArr
      })
    }
  }

  onDeleteClick(id) {
    const todos = this.state.todos.filter(item=> item.id != id)

    return this.setState({todos})
  }

  addTodo () {
    this.setState({
      isCreating: !this.state.isCreating
    })
  }

  updateTodoItemText(id, value) {
    const todos = this.state.todos.map(item=> {
      if(item.id == id) {
        return {
          ...item,
          text: value
        }
      }
      return item
    })

    return this.setState({todos})
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

  toggleTaskStatus(id) {
    const newArr = this.state.todos.map(item=> {
      if(item.id == id) {
        return {
          ...item,
          done: !item.done
        }
      }
      return item
    })

    this.setState({
      todos: newArr
    })
  }

  clearDoneTodos() {
    const newTodos = this.state.todos.filter(item=> !item.done)

    return this.setState({
      todos: newTodos
    })
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
         activeTab == 1 && (
            <div className="clear-wrapper">
              <span 
                className="clear-text" 
                onClick={this.clearDoneTodos.bind(this)}>
                 clear 
              </span>
            </div>
          )
       }

      {
        this.state.isCreating && (
          <AddField 
            newTodo={this.state.newTodo} 
            onAddFieldChange={this.onAddFieldChange.bind(this)}
            onAddFieldKeyPress={this.onAddFieldKeyPress.bind(this)}
          />
        )
      }

       <TodoList 
         data={this.showCurrentTabTodos()}
         toggle={this.toggleTaskStatus.bind(this)}
         updateText={this.updateTodoItemText.bind(this)}
         onClick={this.onDeleteClick.bind(this)}
      />
       

        <div className="add-btn-wrapper">
          <AddButton addTodo={this.addTodo.bind(this)} />
        </div>
      </div>
    )
  }
}
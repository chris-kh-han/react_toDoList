import React from 'react'

import TodoItem from './TodoItem'
import todosData from '../todosData'

class App extends React.Component {
  constructor() {
    super()
      this.state = {
        todoItems : todosData
      }
      this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState( (prevState) => {
      const updatedTodos = prevState.todoItems.map( todo => {
        if(todo.id === id) {
            // todo.completed = !todo.completed
            return {
              ...todo,
              completed: !todo.completed
            }
        }
        return todo
      })
      console.log(prevState.todoItems)
      console.log(updatedTodos)
      return {
        todoItems: updatedTodos
      }
    })
    console.log('click', id)
  }
  
  
  render() {
    
    const todoItem = this.state.todoItems.map( todo => <TodoItem key={todo.id} todo={todo} handleChange={this.handleChange}/>)
    

    return (
      <div className='todo-list'>
        {todoItem}
      </div>
    )
  }
}

export default App

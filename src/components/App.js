import React, { Component } from 'react';
import TodoInput from './todoInput';
import TodoItem from './todoItem';

const todos = [
  {
    id: 1,
    text: 'Learn React'
  },
  {
    id: 2,
    text: 'Buy milk'
  }
]

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos,
      nextId: 3
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todoText) {
    let todos = this.state.todos.slice();
    todos.push({id: this.state.nextId, text: todoText});
    this.setState({
      todos: todos,
      nextId: ++this.state.nextId
    });
  }

  removeTodo(id) {
    this.setState({
        todos: this.state.todos.filter((todo, index) => todo.id !== id)
      });
  }

  render() {
    return (
      <div className="container">
        <div className="todo-wrapper text-center mt-5">
          <h2 className='page-title' >ToDoList</h2>
          <TodoInput todoText="" addTodo={this.addTodo} />
          <ul>
            {
              this.state.todos.map((todo) => {
                return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

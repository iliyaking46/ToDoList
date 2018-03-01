import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './todoItem/Item';

const todos = [
  {
    id: 0,
    text: 'Learn React',
  },
  {
    id: 1,
    text: 'Buy milk',
  },
  {
    id: 2,
    text: 'Buy kek',
  },
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos,
      nextId: 3,
    };

    // this.addTodo = this.addTodo.bind(this);
    // this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo = todoText => {
    let todos = this.state.todos.slice();
    todos.push({ id: this.state.nextId, text: todoText });
    this.setState({
      todos: todos,
      nextId: this.state.nextId + 1,
    });
  };

  removeTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id),
    });
  };

  editTodo = (id, value) => {
    let todos = this.state.todos.slice();
    let idx = todos.map(elem => elem.id).indexOf(id);
    todos[idx].text = value;
    this.setState({
      todos,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="todo-wrapper text-center mt-5">
          <h2 className="page-title">ToDoList</h2>
          <TodoInput todoText="" addTodo={this.addTodo} />
          <ul className="list-group">
            {this.state.todos.map(todo => (
              <TodoItem
                todo={todo}
                key={todo.id}
                id={todo.id}
                removeTodo={this.removeTodo}
                editTodo={this.editTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

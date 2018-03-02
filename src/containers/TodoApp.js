import React from 'react';
import TodoAppHeader from './TodoAppHeader';
import TodoList from './TodoList';

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  onAddTodo = todo => {
    const { todos } = this.state;
    this.setState({
      todos: [...todos, todo],
    });
  };

  onChangeTodo = (todo, index) => {
    const todos = this.state.todos.slice();
    todos[index] = todo;
    this.setState({ todos });
  };

  onDeleteTodo = index => {
    this.setState({
      todos: this.state.todos.filter((item, id) => id !== index),
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="container mt-5">
        <h2 className="text-center">TodoApp</h2>
        <TodoAppHeader onAddTodo={this.onAddTodo} />
        <TodoList
          onChangeTodo={this.onChangeTodo}
          onDeleteTodo={this.onDeleteTodo}
          todos={todos}
        />
      </div>
    );
  }
}

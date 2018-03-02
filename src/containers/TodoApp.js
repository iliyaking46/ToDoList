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
    const todos = this.state.todos;
    this.setState({
      todos: [...todos, todo],
    });
  };

  onChangeTodo = (todo, index) => {
    const todos = this.state.todos.slice();
    todos[index] = todo;
    this.setState({ todos });
  };

  render() {
    const todos = this.state.todos;
    return (
      <div className="container mt-5">
        <TodoAppHeader onAddTodo={this.onAddTodo} />
        <TodoList onChangeTodo={this.onChangeTodo} todos={todos} />
      </div>
    );
  }
}

import React, { Component } from 'react';

export default class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.todoText };

    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  addTodo(todo) {
    if (todo.length > 0) {
      this.props.addTodo(todo);
      this.setState({ value: '' });
    }
  }

  render() {
    return (
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div className="input-group-append">
          <button
            className="btn btn-primary"
            onClick={() => this.addTodo(this.state.value)}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

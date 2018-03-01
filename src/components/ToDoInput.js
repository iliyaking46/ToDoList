import React, { Component } from 'react';

export default class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.todoText || '' };
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  addTodo = () => {
    if (this.state.value.length > 0) {
      this.props.addTodo(this.state.value);
      this.setState({ value: '' });
    }
  };

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
          <button className="btn btn-primary" onClick={this.addTodo}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

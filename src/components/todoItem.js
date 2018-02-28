import React, { Component } from 'react';

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
  }

  removeTodo(id) {
    this.props.removeTodo(id);
  }

  render() {
    return (
      <li className='list-group-item text-left'>
        {this.props.todo.text}
        <button className="btn btn-primary delete-button" onClick={(e)=> this.removeTodo(this.props.id) }>remove</button>
      </li>
    );
  }
}
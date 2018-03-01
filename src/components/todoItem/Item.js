import React, { Component } from 'react';
import Text from './Text';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.todo.text,
      isEditing: false,
    };
  }

  removeTodo = id => {
    this.props.removeTodo(id);
  };

  saveEdit = id => {
    const value = document.getElementById(id).value;
    console.log(value);
    this.setState({
      value: value,
    });
    this.props.editTodo(id, value);
    this.changeEdit();
  };

  changeEdit = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  render() {
    return (
      <li className="list-group-item text-left" key={this.props.id}>
        <div className="row">
          <Text
            isEditing={this.state.isEditing}
            value={this.state.value}
            id={this.props.todo.id}
          />
          {/*
            onChange={event => this.editTodo(this.props.id, event.target.value)}
          */}
          <EditButton
            isEditing={this.state.isEditing}
            changeEdit={this.changeEdit}
            saveEdit={this.saveEdit}
            data={this.props.todo.id}
          />
          <DeleteButton
            id={this.props.id}
            isEditing={this.state.isEditing}
            removeTodo={this.removeTodo}
          />
        </div>
      </li>
    );
  }
}

import React from 'react';
import Button from '../components/Button';
import TextBox from '../components/TextBox';
import SelectBox from '../components/SelectBox';
import types from '../constants';

export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditable: false,
      newTodoText: this.props.todo.text,
      newTodoType: this.props.todo.type,
    };
  }

  onChangeTodoHandler = () => {
    const onChangeTodo = this.props.onChangeTodo;
    const index = this.props.index;
    const todo = {
      text: this.state.newTodoText,
      type: this.state.newTodoType,
    };
    onChangeTodo(todo, index);
  };

  onCancelHandler = () => {
    this.setState({
      isEditable: false,
      newTodoText: this.props.todo.text,
      newTodoType: this.props.todo.type,
    });
  };

  onDeleteHandler = () => {
    const index = this.props.index;
    const onDeleteTodo = this.props.onDeleteTodo;
    onDeleteTodo(index);
  };

  renderView() {
    const todo = this.props.todo;
    return (
      <li className="list-group-item">
        <div className="row align-items-center">
          <div className="px-3">
            <strong>{todo.type}</strong>
          </div>
          <div className="col">
            <span>{todo.text}</span>
          </div>
          <Button
            onClick={() => {
              this.setState({ isEditable: true });
            }}
          >
            Изменить
          </Button>
          <Button onClick={this.onDeleteHandler}>Удалить</Button>
        </div>
      </li>
    );
  }

  renderEdit() {
    const text = this.state.newTodoText;
    const type = this.state.newTodoType;
    return (
      <li className="list-group-item">
        <div className="row">
          <SelectBox
            value={type}
            options={types}
            onChange={value => this.setState({ newTodoType: value })}
          />
          <TextBox
            value={text}
            onChange={value => this.setState({ newTodoText: value })}
          />
          <Button onClick={this.onChangeTodoHandler}>Сохранить</Button>
          <Button onClick={this.onCancelHandler}>Отмена</Button>
        </div>
      </li>
    );
  }

  render() {
    const isEditable = this.state.isEditable;
    return isEditable ? this.renderEdit() : this.renderView();
  }
}

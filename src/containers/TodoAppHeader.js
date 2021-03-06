import React from 'react';
import Button from '../components/Button';
import TextBox from '../components/TextBox';
import SelectBox from '../components/SelectBox';
import types from '../constants';

export default class TodoAppHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodoText: undefined,
      newTodoType: 'high',
    };
  }

  onAddNewTodo = () => {
    if (this.state.newTodoType && this.state.newTodoText) {
      const newTodo = {
        text: this.state.newTodoText,
        type: this.state.newTodoType,
      };
      const onAddTodo = this.props.onAddTodo;
      this.setState(
        {
          newTodoText: undefined,
        },
        () => onAddTodo(newTodo),
      );
    }
  };

  render() {
    const newTodoText = this.state.newTodoText;
    const newTodoType = this.state.newTodoType;
    return (
      <div className="row mb-3">
        <SelectBox
          options={types}
          value={newTodoType}
          onChange={value => this.setState({ newTodoType: value })}
        />
        <TextBox
          value={newTodoText}
          onChange={value => this.setState({ newTodoText: value })}
        />
        <Button onClick={this.onAddNewTodo}>Добавить</Button>
      </div>
    );
  }
}

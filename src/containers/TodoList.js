import React from 'react';
import TodoListItem from './TodoListItem';
import Radio from '../components/Radio';
import TextBox from '../components/TextBox';
import types from '../constants/index';
import Button from '../components/Button';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: undefined,
      radio: undefined,
    };
  }

  clearRadio = () => {
    const radios = document.getElementsByName('customRadio');
    radios.forEach(radio => (radio.checked = false));
    this.setState({
      search: undefined,
      radio: undefined,
    });
  };

  filterArray = (array, search, radio) => {
    if (search) {
      array = array.filter(todo => todo.text.indexOf(search) != -1);
    }
    if (radio) {
      array = array.filter(todo => todo.type === radio);
    }
    return array;
  };

  render() {
    const { search, radio } = this.state;
    const todos = this.filterArray(this.props.todos, search, radio);
    const clearRadio = this.clearRadio;
    const { onChangeTodo, onDeleteTodo } = this.props;

    return (
      <div className="row">
        <div className="col-8">
          <ul className="list-group">
            {todos.map((todo, index) => (
              <TodoListItem
                onChangeTodo={onChangeTodo}
                onDeleteTodo={onDeleteTodo}
                key={`${todo.type}${todo.text}${index}`}
                todo={todo}
                index={index}
              />
            ))}
          </ul>
        </div>
        <div className="col">
          <TextBox
            value={search}
            onChange={value => this.setState({ search: value })}
          />
          <Radio
            onChange={value => this.setState({ radio: value })}
            types={[
              {
                label: 'Все',
                value: '',
              },
              ...types,
            ]}
          />
          <Button onClick={clearRadio}>Сбросить</Button>
        </div>
      </div>
    );
  }
}

import React from 'react';
import TodoListItem from './TodoListItem'
import Radio from '../components/Radio'
import types from '../constants/index'

export default class TodoList extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			search: undefined,
			radio: undefined,
		}
	}

	render() {
		const radio = this.state.radio;
		// const todos = this.props.todos;
		const todos = radio
      ? this.props.todos.filter(todo => todo.type == radio)
      : this.props.todos;
		const onChangeTodo = this.props.onChangeTodo;
		
		return (
			<div className="row">
				<div className="col-8">
					<ul className="list-group">
						{todos.map((todo, index) => {
							return (
							<TodoListItem
								onChangeTodo={onChangeTodo}
								key={`${todo.type}${todo.text}${index}`}
								todo={todo}
								index={index}
							/>
							);
						})}
					</ul>
				</div>
				<div className="col">
						<Radio
							onChange={value => this.setState({ radio: value })}
							types = {types}
						/>
				</div>
			</div>
		   
		)
	}
}
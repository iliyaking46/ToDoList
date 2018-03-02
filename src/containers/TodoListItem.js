import React from 'react';
import Button from '../components/Button';
import TextBox from '../components/TextBox';
import SelectBox from '../components/SelectBox';
import types from '../constants';

export default class TodoListItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isEditable: false,
            newTodoText: this.props.todo.text,
            newTodoType: this.props.todo.type,
        }
    }

    renderView() {
        const todo = this.props.todo;
        return (
            <li className="list-group-item" >
                <div className="row">
                    <strong >{todo.type}</strong> 
                    <span  className="col" >{todo.text}</span>
                    <Button onClick = {() => {this.setState({ isEditable: !this.state.isEditable })}} >Edit</Button>
                    <Button>Delete</Button>
                </div>
            </li>
        )
    }

    renderEdit() {
        const text = this.state.newTodoText;
        const type = this.state.newTodoType;      
        return (
            <li className="list-group-item" >
                <div className="row">
                    <SelectBox
                        value={type}
                        options={types}
                        onChange={value => this.setState({ newTodoType: value })}
                    />
                    <TextBox 
                        value={text}
                        onChange = {value => this.setState({ newTodoText: value })}
                    />
                    <Button >Save</Button>
                    <Button onClick = {() => {this.setState({ isEditable: !this.state.isEditable })}} >Cancel</Button>
                </div>
            </li>
        )
    }

    render() {
        const isEditable = this.state.isEditable;
        return isEditable ? this.renderEdit() : this.renderView();   
    }
}
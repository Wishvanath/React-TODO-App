import React from 'react';
import  './todoitems.css';
class TodoItems extends React.Component{
    constructor(props){
        super(props);
        
    }
    removeTodo(id){
        this.props.removeTodo(id);
    }
    render(){
        return(
            <div className = "todoWrapper">
                <button className = "remove_btn" onClick = {(e) => this.removeTodo(this.props.id)}>Remove</button>{this.props.todo.text}
            </div>
        );
    }
}
export default TodoItems;
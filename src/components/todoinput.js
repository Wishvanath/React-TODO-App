import React from 'react';
//import the css file of todoinput components
import './todoinput.css';
class TodoInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.state = {
            value: "",
           
        };
    }
// to handle the input change function
handleChange(e){
    // to check in console
    //console.log("input function change here");
    this.setState({value: e.target.value});
}
// to handle the submit button function
addTodo(todo){
    // check in console
    // console.log("TODO:",todo);
    // call the addTodo function from parent class
    // ensure the todotext field is not empty
    if(todo.length > 0){
        this.props.addTodo(todo);
        this.setState(
            {value:""}
        );

    }
}
    render() {
        return (
            <div>
                <input className ="user_input" type = "text" value={this.state.value} onChange = {this.handleChange} />
                <button className = "btn btn-primary" onClick = {() => this.addTodo(this.state.value)}>Submit</button>
            </div>
        );
    }
}
export default TodoInput;

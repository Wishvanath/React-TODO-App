// import React, { Component } from 'react';
import React from 'react';
import './App.css';
import Header from './components/header';
import TodoInput from './components/todoinput';
import TodoItems from './components/todoitems';

class App extends React.Component {
  // declare a constructor
  constructor(props){
    super(props);
    this.state = {
      todos:[
        {id:0, text:"wishvanath"},
        {id:1, text:"Aakash"},
        {id:2, text:"khagesh"},
        {id:3, text:"sankar"}

      ],
      nextId:4
    }
    
    // bind the function
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }
// define the addTodo function
  addTodo(todoText){
    // check in console
    //console.log("todo list is added:", todoText);
    let todos = this.state.todos.slice();
    todos.push({id: this.state.nextId, text: todoText});
    this.setState({
      todos: todos,
      nextId: ++ this.state.nextId
    });
  }
 // define the removeTodo function
 removeTodo(id){
    // check in console
    //console.log("item is removing:",id);
    // implement the logic to remove the items
        this.setState({
      todos: this.state.todos.filter((todo, index) => todo.id !== id)
    });
 } 
  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <Header/>
          <TodoInput todoText = "" addTodo = {this.addTodo}/>
          <ul>
          {
              this.state.todos.map((todo) => {
                return<TodoItems todo={todo} key={todo.id} id={todo.id} removeTodo = {this.removeTodo} />
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;

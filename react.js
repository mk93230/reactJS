import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

let id = 0;
const Todo = props => (
  <li>
    <input type="checkbox" checked={props.checked} onChange={props.onSelect}/>
    <button onClick={props.onDelete}> Delete </button>
    <span> {props.todo.text} </span>
  </li>
);
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }
  addTodo() {
    const inputText = prompt("What is your todo text?");
    this.setState({
      todos: [...this.state.todos, { id: id++, text: inputText, checked: false, }]
    });
    console.log(this.state.todos);
  }

  toggleTodo(id){
    this.setState({
      todos: this.state.todos.map(todo=> {
        if(todo.id!==id) return todo
        return{
          id: id,
          text: todo.text,
          checked: !todo.checked
        }
      }
    )
  })}
  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }
  render() {
    return (
      <div>
        <div>
        Total Todos: {this.state.todos.length}
        </div>
        <div>
          Total Tasks Remaining: {this.state.todos.filter(todo=>!todo.checked).length}
        </div>
        <button onClick={() => this.addTodo()}> Todo</button>
        <ul>
          {this.state.todos.map(todo => (
            <Todo onSelect={() => this.toggleTodo(todo.id)} onDelete={() => this.removeTodo(todo.id)} todo={todo} />
          ))}
        </ul>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

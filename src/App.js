import React, { Component } from 'react';
import Header from './components/layout/Header'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';


import './App.css';

class App extends Component {
  state={
    todos:[{
      id: uuid.v4(),
      title: 'Add CRUD with React project to protfolio',
      completed: false
    },
    {
      id: uuid.v4(),
      title: 'Call with career advisor',
      completed: false},

      {id: uuid.v4(),
      title: 'Go for a walk',
      completed: false
    },

    {id: uuid.v4(),
      title: 'Meditate',
      completed: false
    },

    {id: uuid.v4(),
      title: 'Add MERN project to portfolio',
      completed: false
    },

    {id: uuid.v4(),
      title: 'Dinner with fam',
      completed: false
    }
  ]
  }

  //mark complete/toggle complete
  markComplete=(id)=>{
    this.setState({todos: this.state.todos.map(todo=>{
      if(todo.id===id){
        todo.completed = !todo.completed
      }
      return todo;
    })});  
}
//delete todo
delTodo = (id)=>{
  this.setState({todos: [...this.state.todos.filter(todo => todo.id !==id)]});
}

//add todo

addTodo = (title)=> {
  const newTodo = {
    id:uuid.v4(),
    title,
    completed:false
  }
  this.setState({todos: [...this.state.todos, newTodo]
})};
  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
      <div className="container">
      <Header/>
       <AddTodo addTodo={this.addTodo}/>
       <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
      </div>
      </div>
       
    );
  }

}

export default App;

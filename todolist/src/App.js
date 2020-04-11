import React, { Component } from 'react';
import TodoList from './Componentes/TodoList';
import Header from './Componentes/Header';
import './Style.css';

class App  extends Component{
  render(){
    return(
      <div>
        <Header />
        <TodoList />
      </div>
    );
  }
}

export default App;

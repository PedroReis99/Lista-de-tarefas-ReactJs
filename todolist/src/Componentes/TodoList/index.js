import React, { Component } from 'react';
import TodoItems from '../TodoItems';
import './style.css';

class TodoList extends Component{

    constructor(props){
        super(props);
        this.state = {
            Tarefa: '',
            items: []
        };
        this.addItem = this.addItem.bind(this);
        this.log = this.log.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    log(){
        console.log(this.state.items);
    }

    deleteItem(key){
        console.log(key);
        let filtro = this.state.items.filter( (item) => {
            return(item.key !== key);
        });
        this.setState({ items: filtro });
    }

    addItem(e){
        let state = this.state;
        if(this._tarefaInput.value !== ''){
            let newItem = {
                text: this._tarefaInput.value,
                key: Date.now() 
            };
            this.setState({ items: [...state.items, newItem] });
        }

        e.preventDefault();
        this.setState({ Tarefa: '' });
    }

    render(){
        return(
            <div className="Formulario">
                <form onSubmit={this.addItem} className="input">
                    <input type="text" placeholder="Nova Tarefa!" name="tarefa"
                        value={this.state.Tarefa} onChange={(event) => 
                            this.setState({Tarefa: event.target.value})} 
                            ref={(ev) => this._tarefaInput = ev }/>
                    <button type="submit">Adicionar</button>
                </form>
                <button onClick={this.log} className="Log">LOG</button>
                <center><h3>Tarefas</h3></center>
                <TodoItems lista={this.state.items} delete={this.deleteItem} />
                
            </div>
        );
    }
}

export default TodoList;
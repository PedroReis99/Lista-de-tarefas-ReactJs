import React, { Component } from 'react';
import './style.css';

class Header extends Component{
    render(){
        return(
            <div className="Header">
                <center><h1>Lista de Tarefas</h1></center>
            </div>
        );
    }
}

export default Header;
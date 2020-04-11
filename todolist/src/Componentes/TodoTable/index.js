import React, { Component } from 'react';

class Tabela extends Component{

    constructor(props){
        super(props);
        this.state = {};

        this.delete = this.delete.bind(this);
    }

    delete(key){
        this.props.delete(key);
    }

    render(){
        return(
            <div className="Table">
                <table>
                    <td>Tarefas</td>
                    { this.props.lista.map( (item) => {
                        <tbody onClick={ () => this.delete(item.key)} key={item.key}>{item.text}</tbody>
                    })}
                </table>
            </div>
        );
    }
}

export default Tabela;
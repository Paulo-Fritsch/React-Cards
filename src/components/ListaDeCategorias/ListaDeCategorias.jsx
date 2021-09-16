import React, { Component } from 'react';
import "./estilo.css"

class ListadeCategorias extends Component {
    _handleEventoInput(evento){
        if (evento.key === "Enter"){
            let valorCategoria = evento.target.value
            this.props.adicionarCategoria(valorCategoria);
        }
    }
    render() { 
        return (
            <section className="categoria-section">
                <ul className = "categoria-lista">
                    {this.props.categorias.map((categorias,index)=> {
                        return <li key={index} className = "categoria-lista_itens">{categorias}  </li>
                    })}
                    
                   
                </ul>
                <input 
                    type="text" 
                    className = "categoria-lista_input" 
                    placeholder="Adicionar Categoria"
                    onKeyUp={this._handleEventoInput.bind(this)}/>
            </section>
        );
    }
}
 
export default ListadeCategorias;

import React, { Component } from "react";
import "./estilo.css";
class FormularioCadastro extends Component {
  
  constructor(props){
    super(props);
    this.titulo = "";
    this.texto = "";
  }

  _handleMudancaTitulo(evento){
    this.titulo = evento.target.value
    evento.stopPropagation();
  }

  _handleMudancaTexto(evento){
    this.texto = evento.target.value
    evento.stopPropagation();
  }

  _criarcard(evento){
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarcard(this.titulo, this.texto);
    
  }

  render() {
    return (
      <form className="form-cadastro "
      onSubmit={this._criarcard.bind(this)}>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange = {this._handleMudancaTitulo.bind(this)}
          required
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange = {this._handleMudancaTexto.bind(this)}
          required
        />
        <button className="form-cadastro_input form-cadastro_submit" >
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;

import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListadeCategorias from "./components/ListaDeCategorias";

import "./assets/App.css";
import './assets/index.css';
class App extends Component {
  constructor (){
    super();
    this.state = {
      notas: [],
      categorias: [],
    }
    

  }

  criarcard (titulo, texto){
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novoArrayNotas
    }

    this.setState(novoEstado)
  }

  deletarCard (indice){
    let ArrayNotas = this.state.notas;
    ArrayNotas.splice(indice,1);
    this.setState ({notas:ArrayNotas});
    console.log("excluiu");
  }

  adicionarCategoria (nomeCategoria){
    
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria]
    const novoEstadoCategoria = {
      ...this.state,
      categorias: novoArrayCategorias
    };

    this.setState(novoEstadoCategoria)
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarcard = {this.criarcard.bind(this)} />
        <main className="container">
          <ListadeCategorias 
          adicionarCategoria = {this.adicionarCategoria.bind(this)}
          categorias = {this.state.categorias}/>
        <ListaDeNotas 
        deletarCard = {this.deletarCard.bind(this)}
        notas={this.state.notas} />

        </main>

      </section>
    );
  }
}

export default App;

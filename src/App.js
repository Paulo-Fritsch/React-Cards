import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';
class App extends Component {
  constructor (){
    super();
    this.state = {
      notas:[]
    }
    

  }

  criarcard (titulo, texto){
    const novaNota = {titulo, texto};
    const novoArrayNotas =[...this.state.notas, novaNota]
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

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarcard = {this.criarcard.bind(this)} />
        <ListaDeNotas 
        deletarCard = {this.deletarCard.bind(this)}
        notas={this.state.notas} />
      </section>
    );
  }
}

export default App;

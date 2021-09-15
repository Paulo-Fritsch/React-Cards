import React from 'react';
import ListadeNotas from "./components/ListadeNotas"

function App (){
  return (
    <div>
    <form>
      <input type = "text" placeholder="Titulo"/>
      <textarea placeholder= "Escreva sua Nota"/>
      <button>Criar Nota</button>
    </form>
    <ListadeNotas/>
    </div>
  );
}

export default App;
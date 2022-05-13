import "./styles.css";
import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";

import { render } from "react-dom";

class App extends Component {
  render() {
    return (
      //<h1> Meu app react</h1>;
      <form>
        <ListaDeNotas />
      </form>
    );
  }
}
export default App;

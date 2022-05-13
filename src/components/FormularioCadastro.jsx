import React, { Component } from "react";

export class FromularioCadastro extends Component {
  render() {
    return (
      <from>
        <input type="text" placeholder="Titulo" />
        <textarea placeholder="Escreva sua nota..." />
        <button>Criar Nota</button>
      </from>
    );
  }
}

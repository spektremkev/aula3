import { Component } from "react";
import "./carestilo.css";

class CarNota extends Component {
  render() {
    return (
      <section className="Car-nota">
        <header className="car-nota_cabecalho">
          <h3 className=""> Titulo </h3>
        </header>
        <p>Escreva sua nota</p>
      </section>
    );
  }
}

export default CarNota;

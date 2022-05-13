import { Component } from "react";
import CarNota from "./CarNotas";

class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        {Array.of("trabalho", "trabalho", "Estudos").map((categoria, index) => {
          return (
            //{console.log()}
            <li key={index}>
              <CarNota />
            </li>
          );
        })}
      </ul>
    );
  }
}
export default ListaDeNotas;

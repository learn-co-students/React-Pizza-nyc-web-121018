import React, { Component } from "react";
import Pizza from "../components/Pizza";
class PizzaList extends Component {
  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {this.props.pizzas.map(p => (
            <Pizza key={p.id} editHandler={this.props.editHandler} pizza={p} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default PizzaList;

// <tr data-id={p.id} key={p.id}>
//   <td>{p.topping}</td>
//   <td>{p.size}</td>
//   <td>{p.vegetarian === false ? "no" : "yes"}</td>
//   <td>
//     <button data-id={p.id} onClick={this.editHandler}>
//       {" "}
//       Edit{" "}
//     </button>
//   </td>

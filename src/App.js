import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import PizzaForm from "./components/PizzaForm";
import PizzaList from "./containers/PizzaList";

class App extends Component {
  state = {
    pizzas: [],
    editingPizza: {
      id: 9999,
      topping: "",
      size: "",
      vegetarian: false,
      saved: false
    }
  };

  componentDidMount() {
    fetch("http://localhost:3000/pizzas")
      .then(r => r.json())
      .then(r => this.setState({ pizzas: r }));
  }

  findPizzaById = id => {
    return [...this.state.pizzas].find(p => p.id == id);
  };

  editPizza = e => {
    let id = e.target.dataset.id;
    let pizza = this.findPizzaById(id);
    pizza.saved = false;
    this.setState({ editingPizza: pizza });
  };

  patchApi = () => {
    let updatedPizza = new Object(this.state.editingPizza);

    fetch(`http://localhost:3000/pizzas/${updatedPizza.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedPizza)
    }).then(r =>
      this.setState({
        editingPizza: {
          id: updatedPizza.id,
          topping: updatedPizza.topping,
          size: updatedPizza.size,
          vegetarian: updatedPizza.vegetarian,
          saved: true
        }
      })
    );
  };

  changeSize = e => {
    let newPizza = new Object(this.state.editingPizza);
    newPizza.size = e.target.value;
    this.setState({ editingPizza: newPizza });
  };

  changeTopping = e => {
    let newPizza = new Object(this.state.editingPizza);
    newPizza.topping = e.target.value;
    this.setState({ editingPizza: newPizza });
  };

  changeVegetarian = e => {
    let newPizza = new Object(this.state.editingPizza);
    if (e.target.value === "Vegetarian") {
      newPizza.vegetarian = true;
    } else {
      newPizza.vegetarian = false;
    }

    this.setState({ editingPizza: newPizza });
  };

  render() {
    return (
      <Fragment>
        <Header />
        <PizzaForm
          patchApi={this.patchApi}
          changeTopping={this.changeTopping}
          changeSize={this.changeSize}
          editingPizza={this.state.editingPizza}
          changeVegetarian={this.changeVegetarian}
          editPizza={this.editPizza}
        />
        <PizzaList
          editHandler={this.editPizza}
          editPizza={this.editPizza}
          pizzas={this.state.pizzas}
        />
      </Fragment>
    );
  }
}

export default App;

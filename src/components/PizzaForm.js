import React, { Component, Fragment } from "react";

class PizzaForm extends Component {
  submitListener = e => {
    this.props.patchApi();
  };

  changeSize = e => {
    this.props.changeSize(e);
  };

  changeTopping = e => {
    console.log("changing topping");
    this.props.changeTopping(e);
  };

  changeVegetarian = e => {
    console.log("changing vego");
    this.props.changeVegetarian(e);
  };

  render() {
    return (
      <Fragment>
        <div className="form-row">
          <div className="col-5">
            <input
              type="text"
              className="form-control"
              placeholder="Pizza Topping"
              value={this.props.editingPizza.topping}
              onChange={this.changeTopping}
            />
          </div>
          <div className="col">
            <select
              onChange={this.changeSize}
              value={this.props.editingPizza.size}
              className="form-control"
            >
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div className="col">
            <div className="form-check">
              <input
                onChange={this.changeVegetarian}
                className="form-check-input"
                type="radio"
                value="Vegetarian"
                checked={
                  this.props.editingPizza.vegetarian === true ? true : false
                }
              />
              <label className="form-check-label">Vegetarian</label>
            </div>
            <div className="form-check">
              <input
                onChange={this.changeVegetarian}
                className="form-check-input"
                type="radio"
                value="Not Vegetarian"
                checked={
                  this.props.editingPizza.vegetarian === true ? false : true
                }
              />
              <label className="form-check-label">Not Vegetarian</label>
            </div>
          </div>
          <div className="col">
            <button
              data-id={this.props.editingPizza.id}
              type="submit"
              className={
                this.props.editingPizza.saved === true
                  ? "btn btn-success disabled"
                  : "btn btn-success"
              }
              onClick={this.submitListener}
            >
              Submit
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default PizzaForm;

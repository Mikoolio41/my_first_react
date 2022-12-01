import React, { Component } from "react";
import Garage from "./Garage";

class Car extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
      model: props.model,
      color: props.color,
    };
  }
  render() {
    return (
      <header>
        This car is a {this.state.color} {this.state.name}
        <Garage size="small" />
      </header>
    );
  }
}

export default Car;

import React, { Component } from "react";

class Form extends Component() {
  constructor(props) {
    super(props);

    this.state = {
      isToggleOn: true,
      color: "red",
    };
  }

  changeColor = () => {
    this.setState({ color: "blue" });
  };

  handleClick() {
    this.setState((item) => ({
      isToggleOn: !item.isToggleOn,
    }));
  }

  render() {
    return (
      <form onSubmit={() => this.handleClick()}>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;

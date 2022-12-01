import React, { Component } from "react";

class Counter1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 }, () => {
      console.log(this.state.count);
    });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 }, () => {
      console.log(this.state.count);
    });
  };

  render() {
    return (
      <div
        style={{
          marginTop: "100px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>Counter - {this.state.count}</div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter1;

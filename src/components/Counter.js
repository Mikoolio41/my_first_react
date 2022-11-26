import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log(`callback value`, this.state.count);
      }
    );
    console.log(`sync value`, this.state.count);
  }

  render() {
    return (
      <>
        <div>Counter - {this.state.count}</div>
        <br></br>
        <button onClick={() => this.increment()}>Increment</button>
      </>
    );
  }
}

export default Counter;

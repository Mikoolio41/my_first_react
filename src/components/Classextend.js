import React from "react";
import Hello from "./Hello";

class Classextend extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      users: [],
    };
  }
  handleclick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ users: data });
      });
  }
  render() {
    const { count, users } = this.state;
    return (
      <>
        {/* passing value to the props */}
        <Hello color={"red"} name={"daniel"} />
        <Hello color={"blue"} name={"tyler"} />
        <Hello color={"black"} name={"jonah"} />
        <button onClick={this.handleclick}> {count}</button>

        {users.map((user) => {
          return <p key={user.id}> {user.name}</p>;
        })}
      </>
    );
  }
}

export default Classextend;

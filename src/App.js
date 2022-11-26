import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import logo from './logo.svg';
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Nav from "./components/Nav";
import Shop from "./components/Shop";
import ErrorBoundary from "./components/ErrorBoundary";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Nav />
          <header className="App-header">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <ErrorBoundary>
                    <Home />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/about"
                element={
                  <ErrorBoundary>
                    <About />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/shop"
                element={
                  <ErrorBoundary>
                    <Shop />
                  </ErrorBoundary>
                }
              />
            </Routes>
          </header>
        </BrowserRouter>
      </div>
    );
  }
}

// class App extends React.Component{
//   constructor() {
//     super();
//     this.state = {
//       color: 'red'
//     }
//   }
//   // Mounting: The creation and insertion of the component into the DOM
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ color: 'blue' })
//     }, 3000)
//   }

//   // Updating: Update to the component caused by changes to its props or state.
//   componentDidUpdate() {
//     console.log('ComponentDidUpdate',this.state.color);
//   }

//   handleclick = () => {
//     this.setState({ color: 'brown' })
//   }
//   render() {
//     return (
//       <div className="App" >
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1>{this.state.color}</h1>
//           <button onClick={this.handleclick}>click</button>
//         </header>
//       </div>
//     );
//   }
// }

export default App;

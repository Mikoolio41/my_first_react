import React from "react";
import Form from "./exercises/components/Form";

function App() {
  return (
    <div>
      <Form />
    </div>
  );
}

export default App;

// import { Routes, Route, Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Home from "./exercises/components/Home";
// import Profile from "./exercises/components/Profile";
// import Shop from "./exercises/components/Shop";

// import React from "react";
// import ErrorBoundary1 from "./exercises/components/ErrorBoundary1";

// function App() {
//   return (
//     <div>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/profile">Profile</Link>
//         </li>
//         <li>
//           <Link to="/shop">Shop</Link>
//         </li>
//       </ul>
//       <Routes>
//         {" "}
//         <Route
//           path="/"
//           element={
//             <ErrorBoundary1>
//               <Home />
//             </ErrorBoundary1>
//           }
//         />{" "}
//         <Route
//           path="/profile"
//           element={
//             <ErrorBoundary1>
//               <Profile />
//             </ErrorBoundary1>
//           }
//         />
//         <Route
//           path="/shop"
//           element={
//             <ErrorBoundary1>
//               <Shop />
//             </ErrorBoundary1>
//           }
//         />
//       </Routes>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./styles/App.css";
// import Home from "./components/Home";
// import About from "./components/About";
// import Nav from "./components/Nav";
// import Shop from "./components/Shop";
// import ErrorBoundary from "./components/ErrorBoundary";

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <BrowserRouter>
//           <Nav />
//           <header className="App-header">
//             <Routes>
//               <Route
//                 exact
//                 path="/"
//                 element={
//                   <ErrorBoundary>
//                     <Home />
//                   </ErrorBoundary>
//                 }
//               />
//               <Route
//                 path="/about"
//                 element={
//                   <ErrorBoundary>
//                     <About />
//                   </ErrorBoundary>
//                 }
//               />
//               <Route
//                 path="/shop"
//                 element={
//                   <ErrorBoundary>
//                     <Shop />
//                   </ErrorBoundary>
//                 }
//               />
//             </Routes>
//           </header>
//         </BrowserRouter>
//       </div>
//     );
//   }
// }

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

// export default App;

import "./App.css";
import Hello from "./Hello";
import Classextend from "./Classextend";
// import Exercise4 from "./Exercise4";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Exercise4 /> */}
        {/* passing value to the props */}
        <Hello name={"ariel"} />
        <Classextend />
      </header>
    </div>
  );
}

export default App;

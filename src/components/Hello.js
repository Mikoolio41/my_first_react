import "./Hello.css";

function Hello(props) {
  //instead of writing props.name / props.color
  // we destructring the props object and use as so:
  // using props WITH object Destructuring

  const { color, name } = props;
  return (
    <>
      <h1 style={{ color: `${color}` }}> css with inlinestyle hello {name}</h1>
      <h1 className="hello">css with .css file hello {name}</h1>
      {/* <h1 style={style}> css with jsx element {name} </h1> */}
    </>
  ); ///
}

export default Hello;

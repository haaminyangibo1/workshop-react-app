import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div>
      <h1> Hello world {props.name} </h1>
      <h2> I am a {props.job}</h2>
      <h3> My favourite colour is {props.colour}</h3>
    </div>
  );
}

export default App;

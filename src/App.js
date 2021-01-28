import logo from "./logo.svg";
import "./App.css";
import Card from "./Card.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Ejercicio 3</h2>
        <div className="container">
          <Card bgColor="#4d375d" />
        </div>
      </header>
    </div>
  );
}

export default App;

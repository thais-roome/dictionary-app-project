import logo from "./logo-shecodes.png";
import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer text-center">
          <small>Coded by Shecodes ❤️ </small>
        </footer>
      </div>
    </div>
  );
}

export default App;

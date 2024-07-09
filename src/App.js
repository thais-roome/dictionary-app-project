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
        <footer className="App-footer">
          <small>
            📖 Coded by Thais Roome, open-sourced on{" "}
            <a
              href="https://github.com/thais-roome/dictionary-app-project"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://zippy-sunburst-acc8cb.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify.
            </a>
          </small>{" "}
        </footer>
      </div>
    </div>
  );
}

export default App;

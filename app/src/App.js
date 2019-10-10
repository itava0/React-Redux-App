import React from "react";
import Characters from "./components/Characters";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="ui centered">
        <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      </header>
      <Characters />
    </div>
  );
}

export default App;

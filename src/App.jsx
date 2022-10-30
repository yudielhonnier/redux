import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Contador from "./components/Contador";
import { Pokemons } from "./components/Pokemons";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Contador />
      </div>
      <h1>Pokemon Appp using Slice</h1>
      <Pokemons />
      <hr />
    </Provider>
  );
}

export default App;

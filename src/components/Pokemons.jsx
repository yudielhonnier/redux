import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../store/slices/pokemons";
import { useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const Pokemons = () => {
  const dispatch = useDispatch();
  const {
    isLoading,
    pokemons = [],
    page,
  } = useSelector((state) => state.pokemon);
  const [text, setText] = useLocalStorage("text", "");

  //in strict mode this it execute 2 times
  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>Write pokemon name to save</h1>
      <textarea
        value={text}
        id=""
        cols="30"
        rows="10"
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <h1>PokemonApp</h1>
      <hr />
      <span>Loading :{isLoading ? "true" : "false"}</span>
      <ul>
        {pokemons.map((p) => (
          <li key={p.name}>{p.name}</li>
        ))}
      </ul>
      <button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>
        {" "}
        Next
      </button>
    </>
  );
};

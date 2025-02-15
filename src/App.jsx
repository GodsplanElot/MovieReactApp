import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <>
      <MovieCard movie={{title: "Elot's Film", release_date: "2024"}} />
      <MovieCard movie={{title: "kaka's Film", release_date: "2022"}} />
    </>
  );
}

export default App;

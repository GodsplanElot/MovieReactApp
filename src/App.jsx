import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
     <Text display="hello" />
     <Text  display="whats up" />
    </>
  );
}

function Text({display}) {
  return (
    <div>
      <p>{display}</p>
    </div>
  );
}

export default App;

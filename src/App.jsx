import "./App.css";
import Favorite from "./pages/Favorites";
import Home from "./pages/Home"
import {Routes, Route} from "react-router-dom"
import Navbar from "./components/NavBar";

function App() {

  return (
    <>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/favorites" element={<Favorite />}/>
        </Routes>
      </main>
    </>
  );
}

export default App;

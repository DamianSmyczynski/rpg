import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CharacterCreation from "./pages/character-creation/CharacterCreation";
import Game from "./pages/game/Game";

function App() {
  return (
    <div className="background">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CharacterCreation />}></Route>
          <Route path="/game" element={<Game />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

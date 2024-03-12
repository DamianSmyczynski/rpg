import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CharacterCreation from "./pages/character-creation/CharacterCreation";
import Game from "./pages/game/Game";
import { connect } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";

const mapStateToProps = (state: any) => {
  return {
    heroName: state.hero.name,
  };
};

function App(props: any) {
  return (
    <div className="background">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CharacterCreation />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/game" element={<Game />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default connect(mapStateToProps)(App);

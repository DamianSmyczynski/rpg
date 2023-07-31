import LocationScreen from "./components/location-screen/LocationScreen";
import "./Board.css";
import Dialogue from "./components/dialogue/Dialogue";

import DialogOptions from "./components/dialog-options/DialogOptions";

const Board = () => {
  return (
    <>
      <div className="location-screen">
        <LocationScreen />
      </div>
      <div className="dialogue">
        <Dialogue />
        <DialogOptions />
      </div>
    </>
  );
};

export default Board;

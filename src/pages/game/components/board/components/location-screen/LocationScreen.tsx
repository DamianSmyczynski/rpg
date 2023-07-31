import castle from "../../../../../../assets/castle.png";
import village from "../../../../../../assets/village.png";
import "./LocationScreen.css";
import { store } from "../../../../../../store/store";
import { GameLocationName } from "../../../../../../gameLocations/gameLocationName.enum";

const handleActualLocation = (locationName: GameLocationName) => {
  switch (locationName) {
    case GameLocationName.City:
      return <img src={castle}></img>;
    case GameLocationName.Village:
      return <img src={village}></img>;
  }
};

const LocationScreen = () => {
  const { gameLocation } = store.getState().location;
  return <>{handleActualLocation(gameLocation.name)}</>;
};

export default LocationScreen;

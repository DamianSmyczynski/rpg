import { GameLocation } from "../../gameLocations/gameLocation";
import { Place } from "../../gameLocations/places/place";
import { GameLocationAction, gameLocationDispatchType } from "../../type";
import * as actionType from "../gameLocation/gameLocationActionTypes";

export function changeGameLocation(gameLocation: GameLocation) {
  const action: GameLocationAction = {
    type: actionType.CHANGE_GAME_LOCATION,
    gameLocation: gameLocation,
  };

  return (dispatch: gameLocationDispatchType) => {
    dispatch(action);
  };
}

export function changePlace(place: Place) {
  const action: GameLocationAction = {
    type: actionType.CHANGE_PLACE,
    place: place,
  };

  return (dispatch: gameLocationDispatchType) => {
    dispatch(action);
  };
}

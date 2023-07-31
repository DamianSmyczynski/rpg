import { GameLocationAction, GameLocationState } from "../../type";
import { initialGameLocationState } from "./initialGameLocationState";
import * as actionTypes from "./gameLocationActionTypes";

const gameLocationReducer = (
  state: GameLocationState = initialGameLocationState,
  action: GameLocationAction
): GameLocationState => {
  switch (action.type) {
    case actionTypes.CHANGE_GAME_LOCATION:
      if (action.gameLocation)
        return { ...state, gameLocation: action.gameLocation };
      return state;
    case actionTypes.CHANGE_PLACE:
      if (action.place) return { ...state, place: action.place };
      return state;
    default:
      return state;
  }
};

export default gameLocationReducer;

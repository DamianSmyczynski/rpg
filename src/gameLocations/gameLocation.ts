import { DialogOption } from "../scenarios/dialog-option";
import { GameLocationName } from "./gameLocationName.enum";
import { Place } from "./places/place";

export type GameLocation = {
  name: GameLocationName;
  dialogOptions: DialogOption[];
  initialPlace: Place;
  places: Place[];
};

import { GameLocation } from "../gameLocations/gameLocation";
import { TypeOfAction } from "./type-of-action.enum";

export type DialogOption = {
  index: number;
  message: string;
  typeOfAction: TypeOfAction;
  gameLocation?: GameLocation;
  //needed another props - in build
};

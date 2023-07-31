import { GameLocation } from "../gameLocations/gameLocation";
import { DialogOption } from "./dialog-option";
import { ScenarioName } from "./scenarios-names.enum";
import { TypeOfAction } from "./type-of-action.enum";

export type Scenario = {
  name: ScenarioName;
  typeOfAction: TypeOfAction;
  gameLocation: GameLocation;
  dialogOptions: DialogOption[];
};

import { GameLocation } from "../../gameLocations/gameLocation";
import { GameLocationName } from "../../gameLocations/gameLocationName.enum";
import { GameLocationsList } from "../../gameLocations/gameLocationsList";
import { Place } from "../../gameLocations/places/place";
import { PlaceName } from "../../gameLocations/places/placeName";
import { PlacesList } from "../../gameLocations/places/placesList";
import { GameLocationState } from "../../type";

export const initialGameLocationState: GameLocationState = {
  gameLocation: GameLocationsList.get(GameLocationName.Village) as GameLocation,
  place: PlacesList.get(PlaceName.VillageCenter) as Place,
};

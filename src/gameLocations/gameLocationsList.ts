import { GameLocation } from "./gameLocation";
import { GameLocationName } from "./gameLocationName.enum";
import { Place } from "./places/place";
import { PlaceName } from "./places/placeName";
import { PlacesList } from "./places/placesList";

export const GameLocationsList: Map<GameLocationName, GameLocation> = new Map([
  [
    GameLocationName.Village,
    {
      name: GameLocationName.Village,
      dialogOptions: [],
      initialPlace: PlacesList.get(PlaceName.VillageCenter) as Place,
      places: [
        PlacesList.get(PlaceName.Fields) as Place,
        PlacesList.get(PlaceName.Forest) as Place,
        PlacesList.get(PlaceName.Meadow) as Place,
        PlacesList.get(PlaceName.River) as Place,
        PlacesList.get(PlaceName.VillageCenter) as Place,
      ],
    },
  ],
]);

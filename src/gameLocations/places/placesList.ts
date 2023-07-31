import { Place } from "./place";
import { PlaceName } from "./placeName";

export const PlacesList: Map<PlaceName, Place> = new Map([
  [PlaceName.Forest, { name: PlaceName.Forest } as Place],
  [PlaceName.Fields, { name: PlaceName.Fields } as Place],
  [PlaceName.Meadow, { name: PlaceName.Meadow } as Place],
  [PlaceName.River, { name: PlaceName.River } as Place],
  [PlaceName.VillageCenter, { name: PlaceName.VillageCenter } as Place],
]);

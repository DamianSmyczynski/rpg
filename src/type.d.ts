import { GenderName } from "./enums/gender.enum";
import { GameLocation } from "./gameLocations/gameLocation";
import { Place } from "./gameLocations/places/place";
import { Ability } from "./interfaces/Ability";
import { Skill } from "./interfaces/Skill";
import { Armor } from "./interfaces/items/Armor";
import { Weapon } from "./interfaces/items/Weapon";

// =====> HERO
export type HeroState = {
  name: string;
  gender: GenderName;
  health: number;
  energy: number;
  skills: Skill[];
  abilities: Ability[];
};

export type HeroAction = {
  type: string;
  name?: string;
  gender?: GenderName;
  value?: number;
};

export type heroDispatchType = (args: HeroAction) => HeroAction;

// =====> LOCATION
export type GameLocationState = {
  gameLocation: GameLocation;
  place: Place;
};

export type GameLocationAction = {
  type: string;
  gameLocation?: GameLocation;
  place?: Place;
};

export type gameLocationDispatchType = (
  args: GameLocationAction
) => GameLocationAction;

// =====> CHARACTER EQUIPMENT

export type CharacterEquipmentState = {
  head?: Armor;
  chest?: Armor;
  hands?: Armor;
  legs?: Armor;
  boots?: Armor;
  weapon?: Weapon;
};

export type CharacterEquipmentAction = {
  type: string;
  armor?: Armor;
  weapon?: Weapon;
};

export type characterEquipmentDispatchType = (
  args: CharacterEquipmentAction
) => CharacterEquipmentAction;

// =====> ITEMS

export type ItemsState = {
  inventoryItems: (Item | Weapon | Armor)[];
};

export type ItemsAction = {
  type: string;
  item: Item | Weapon | Armor;
};

export type itemsDispatchType = (args: ItemsAction) => ItemsAction;

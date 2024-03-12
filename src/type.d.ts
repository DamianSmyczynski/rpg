import { GenderName } from "./enums/gender.enum";
import { SkillName } from "./enums/skills.enum";
import { GameLocation } from "./gameLocations/gameLocation";
import { Place } from "./gameLocations/places/place";
import { Ability } from "./interfaces/Ability";
import { Skill } from "./interfaces/Skill";
import { Armor } from "./interfaces/items/Armor";
import { Weapon } from "./interfaces/items/Weapon";
import { TypeOfDialog } from "./store/dialog/enums/TypeOfDialog.enum";

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
  skillName?: SkillName;
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
  item?: Item;
  durability?: number;
};

export type characterEquipmentDispatchType = (
  args: CharacterEquipmentAction
) => CharacterEquipmentAction;

// =====> ITEMS

export type ItemsState = {
  inventoryItems: (Item | Weapon | Armor)[];
  money: number;
};

export type ItemsAction = {
  type: string;
  item?: Item | Weapon | Armor;
  items?: (Item | Weapon | Armor)[];
};

export type itemsDispatchType = (args: ItemsAction) => ItemsAction;

// =====> DIALOG

export type DialogState = {
  typeOfDialog: TypeOfDialog;
  isDialogOpened: boolean;
};

export type DialogAction = {
  type: string;
  typeOfDialog: TypeOfDialog;
  isDialogOpened: boolean;
};

export type dialogDispatchType = (args: DialogAction) => DialogAction;

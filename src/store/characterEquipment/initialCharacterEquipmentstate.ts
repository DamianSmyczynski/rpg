import { Armor } from "../../interfaces/items/Armor";
import { Weapon } from "../../interfaces/items/Weapon";
import { BootsArmorList } from "../../itemsLists/bootsArmorList";
import { ChestArmorList } from "../../itemsLists/chestArmorList";
import { HeadArmorList } from "../../itemsLists/headArmorList";
import { LegsArmorList } from "../../itemsLists/legsArmorList";
import { WeaponList } from "../../itemsLists/weaponList";
import { CharacterEquipmentState } from "../../type";

export const initialCharacterEquipment: CharacterEquipmentState = {
  head: HeadArmorList.get("Straw Hat") as Armor,
  chest: ChestArmorList.get("Cloth Shirt") as Armor,
  hands: {} as Armor,
  legs: LegsArmorList.get("Cloth Pants") as Armor,
  boots: BootsArmorList.get("Footwraps") as Armor,
  weapon: WeaponList.get("Rusty Sword") as Weapon,
};

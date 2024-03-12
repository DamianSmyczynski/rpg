import { TypeOfItem } from "../interfaces/items/TypeOfItem.enum";
import { Weapon } from "../interfaces/items/Weapon";
import weaponIcon from "./../assets/weapon-icon.png";

export const WeaponList: Map<string, Weapon> = new Map([
  [
    "Rusty Sword",
    {
      type: TypeOfItem.Weapon,
      name: "Rusty Sword",
      attack: 5,
      value: 8,
      durability: 100,
      iconUrl: weaponIcon,
    } as Weapon,
  ],
]);

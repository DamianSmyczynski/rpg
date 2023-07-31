import { Armor } from "../interfaces/items/Armor";
import { TypeOfArmor } from "../interfaces/items/TypeOfArmor.enum";
import { TypeOfItem } from "../interfaces/items/TypeOfItem.enum";

export const BootsArmorList: Map<string, Armor> = new Map([
  [
    "Footwraps",
    {
      type: TypeOfItem.Armor,
      name: "Footwraps",
      armor: 1,
      typeOfArmor: TypeOfArmor.Boots,
      value: 1,
      durability: 100,
    } as Armor,
  ],
]);

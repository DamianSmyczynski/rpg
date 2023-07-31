import { Armor } from "../interfaces/items/Armor";
import { TypeOfArmor } from "../interfaces/items/TypeOfArmor.enum";
import { TypeOfItem } from "../interfaces/items/TypeOfItem.enum";

export const HandsArmorList: Map<string, Armor> = new Map([
  [
    "Leather Gloves",
    {
      type: TypeOfItem.Armor,
      name: "Leather Gloves",
      armor: 8,
      typeOfArmor: TypeOfArmor.Hands,
      value: 40,
      durability: 100,
    } as Armor,
  ],
]);

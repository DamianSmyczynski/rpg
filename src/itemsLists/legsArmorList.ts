import { Armor } from "../interfaces/items/Armor";
import { TypeOfArmor } from "../interfaces/items/TypeOfArmor.enum";
import { TypeOfItem } from "../interfaces/items/TypeOfItem.enum";

export const LegsArmorList: Map<string, Armor> = new Map([
  [
    "Cloth Pants",
    {
      type: TypeOfItem.Armor,
      name: "Cloth Pants",
      armor: 4,
      typeOfArmor: TypeOfArmor.Legs,
      value: 8,
      durability: 100,
    } as Armor,
  ],
]);

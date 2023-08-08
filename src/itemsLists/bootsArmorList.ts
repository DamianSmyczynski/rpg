import { Armor } from "../interfaces/items/Armor";
import { TypeOfArmor } from "../interfaces/items/TypeOfArmor.enum";
import { TypeOfItem } from "../interfaces/items/TypeOfItem.enum";
import bootsIcon from "./../assets/boots-icon.png";

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
      iconUrl: bootsIcon,
    } as Armor,
  ],
]);

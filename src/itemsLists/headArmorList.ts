import { Armor } from "../interfaces/items/Armor";
import { TypeOfArmor } from "../interfaces/items/TypeOfArmor.enum";
import { TypeOfItem } from "../interfaces/items/TypeOfItem.enum";
import headIcon from "./../assets/head-icon.png";

export const HeadArmorList: Map<string, Armor> = new Map([
  [
    "Straw Hat",
    {
      type: TypeOfItem.Armor,
      name: "Straw Hat",
      armor: 2,
      typeOfArmor: TypeOfArmor.Head,
      value: 5,
      durability: 100,
      iconUrl: headIcon,
    } as Armor,
  ],
]);

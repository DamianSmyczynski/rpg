import { Armor } from "../interfaces/items/Armor";
import { TypeOfArmor } from "../interfaces/items/TypeOfArmor.enum";
import { TypeOfItem } from "../interfaces/items/TypeOfItem.enum";
import chestIcon from "./../assets/chest-icon.png";

export const ChestArmorList: Map<string, Armor> = new Map([
  [
    "Cloth Shirt",
    {
      type: TypeOfItem.Armor,
      name: "Cloth Shirt",
      armor: 5,
      typeOfArmor: TypeOfArmor.Chest,
      value: 10,
      durability: 100,
      iconUrl: chestIcon,
    } as Armor,
  ],
]);

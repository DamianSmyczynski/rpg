import { Armor } from "../../interfaces/items/Armor";
import { Item } from "../../interfaces/items/Item";
import { TypeOfArmor } from "../../interfaces/items/TypeOfArmor.enum";
import { TypeOfItem } from "../../interfaces/items/TypeOfItem.enum";
import { Weapon } from "../../interfaces/items/Weapon";
import { ItemsState } from "../../type";

export const initialItemsState: ItemsState = {
  inventoryItems: [
    { type: TypeOfItem.Other, name: "test1" } as Item,
    {
      type: TypeOfItem.Armor,
      name: "Testowy Pancerz",
      typeOfArmor: TypeOfArmor.Chest,
      durability: 50,
    } as Armor,
    { type: TypeOfItem.Weapon, name: "test3", durability: 100 } as Weapon,
  ],
};

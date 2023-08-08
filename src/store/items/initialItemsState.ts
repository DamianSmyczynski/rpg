import { Armor } from "../../interfaces/items/Armor";
import { Item } from "../../interfaces/items/Item";
import { TypeOfArmor } from "../../interfaces/items/TypeOfArmor.enum";
import { TypeOfItem } from "../../interfaces/items/TypeOfItem.enum";
import { Weapon } from "../../interfaces/items/Weapon";
import { ItemsState } from "../../type";
import weaponIcon from "../../assets/weapon-icon.png";
import headIcon from "../../assets/head-icon.png";
import chestIcon from "../../assets/chest-icon.png";
import handsIcon from "../../assets/hands-icon.png";
import legsIcon from "../../assets/legs-icon.png";
import bootsIcon from "../../assets/boots-icon.png";
import otherIcon from "../../assets/other-icon.png";

export const initialItemsState: ItemsState = {
  inventoryItems: [
    {
      type: TypeOfItem.Other,
      name: "test1",
      iconUrl: otherIcon,
    } as Item,
    {
      type: TypeOfItem.Armor,
      name: "Test Helmet",
      typeOfArmor: TypeOfArmor.Head,
      armor: 2,
      durability: 78,
      iconUrl: headIcon,
    } as Armor,
    {
      type: TypeOfItem.Armor,
      name: "Test Chest",
      typeOfArmor: TypeOfArmor.Chest,
      armor: 12,
      durability: 10,
      iconUrl: chestIcon,
    } as Armor,

    {
      type: TypeOfItem.Armor,
      name: "Test Gloves",
      typeOfArmor: TypeOfArmor.Hands,
      armor: 210,
      durability: 100,
      iconUrl: handsIcon,
    } as Armor,
    {
      type: TypeOfItem.Armor,
      name: "Test Pants",
      typeOfArmor: TypeOfArmor.Legs,
      armor: 1,
      durability: 30,
      iconUrl: legsIcon,
    } as Armor,
    {
      type: TypeOfItem.Armor,
      name: "Test Boots",
      typeOfArmor: TypeOfArmor.Boots,
      armor: 10,
      durability: 25,
      iconUrl: bootsIcon,
    } as Armor,
    {
      type: TypeOfItem.Weapon,
      name: "test3",
      attack: 1,
      durability: 100,
      iconUrl: weaponIcon,
    } as Weapon,
  ],
};

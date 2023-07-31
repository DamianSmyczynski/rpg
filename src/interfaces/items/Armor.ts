import { Item } from "./Item";
import { TypeOfArmor } from "./TypeOfArmor.enum";

export interface Armor extends Item {
  armor: number;
  typeOfArmor: TypeOfArmor;
}

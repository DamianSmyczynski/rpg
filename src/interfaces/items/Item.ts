import { TypeOfItem } from "./TypeOfItem.enum";

export interface Item {
  // id?: number;    <=== for future delete functionality
  type: TypeOfItem;
  name: string;
  value: number;
  durability: number;
  requiredStrength?: number;
  requiredAgility?: number;
  requiredIntellect?: number;
  iconUrl?: string;
}

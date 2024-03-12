import { TypeOfItem } from "./TypeOfItem.enum";

export interface Item {
  type: TypeOfItem;
  name: string;
  value: number;
  durability: number;
  requiredStrength?: number;
  requiredAgility?: number;
  requiredIntellect?: number;
  iconUrl?: string;
  belongsToPlayer: boolean;
}

import { Ability } from "./Ability";
import { Skill } from "./Skill";

export interface Hero {
  name: string;
  health: number;
  energy: number;
  skills: Skill[];
  abilities: Ability[];
}

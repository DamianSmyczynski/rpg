import { SkillName } from "../enums/skills.enum";
import { Ability } from "./Ability";

export interface Hero {
  name: string;
  health: number;
  energy: number;
  skills: Map<SkillName, number>;
  abilities?: Ability[];
}

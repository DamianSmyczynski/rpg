import { AbilityName } from "../../enums/ability.enum";
import { GenderName } from "../../enums/gender.enum";
import { SkillName } from "../../enums/skills.enum";
import { Skill } from "../../interfaces/Skill";
import { HeroState } from "../../type";

export const initialHeroState: HeroState = {
  name: "",
  gender: GenderName.Male,
  health: 100,
  energy: 100,
  skills: [
    { name: SkillName.Strength, value: 1 },
    { name: SkillName.Agility, value: 1 },
    { name: SkillName.Intellect, value: 1 },
  ] as Skill[],
  abilities: [
    {
      name: AbilityName.Reading,
      possesed: false,
    },
  ],
};

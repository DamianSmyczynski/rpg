import { Ability } from "../../interfaces/Ability";
import { HeroState, HeroAction } from "../../type";
import { initialHeroState } from "./initialHeroState";
import * as actionTypes from "./heroActionTypes";

const heroReducer = (
  state: HeroState = initialHeroState,
  action: HeroAction
): HeroState => {
  switch (action.type) {
    //setting name
    case actionTypes.SET_NAME:
      if (action.name) return { ...state, name: action.name };
      return state;

    //setting gender
    case actionTypes.SET_GENDER:
      if (action.gender) return { ...state, gender: action.gender };
      return state;

    //increasing health
    case actionTypes.ADD_HEALTH:
      if (action.value)
        return { ...state, health: state.health + action.value };
      return state;

    //reducing health
    case actionTypes.SUBTRACT_HEALTH:
      if (action.value)
        return { ...state, health: state.health - action.value };
      return state;

    //increasing health
    case actionTypes.ADD_ENERGY:
      if (action.value)
        return { ...state, energy: state.energy + action.value };
      return state;

    //reducing health
    case actionTypes.SUBTRACT_ENERGY:
      if (action.value)
        return { ...state, energy: state.energy - action.value };
      return state;

    //increasing skill
    case actionTypes.ADD_SKILL:
      if (action.name) {
        const addSkill = state.skills.find((skill) => {
          return skill.name === action.name;
        });
        if (addSkill) addSkill.value += 1;
        const skills = state.skills;
        skills.map((skill) => {
          if (skill.name === addSkill?.name) {
            skill.value = addSkill.value;
          }
        });
        return {
          ...state,
          skills: skills,
        };
      }
      return state;

    //reducing skill
    case actionTypes.SUBTRACT_SKILL:
      if (action.name) {
        const subtractSkill = state.skills.find((skill) => {
          return skill.name === action.name;
        });
        if (subtractSkill) subtractSkill.value -= 1;
        const skills = state.skills;
        skills.map((skill) => {
          if (skill.name === subtractSkill?.name) {
            skill.value = subtractSkill.value;
          }
        });
        return {
          ...state,
          skills: skills,
        };
      }
      return state;

    //reseting skills
    case actionTypes.RESET_SKILLS:
      const skills = state.skills;
      skills.map((skill) => (skill.value = 1));
      return {
        ...state,
        skills: skills,
      };

    //setting ability
    case actionTypes.SET_ABILITY:
      if (action.name) {
        const newAbility = state.abilities.find((ability) => {
          return ability.name === action.name;
        });
        if (newAbility) newAbility.possesed = true;
        return {
          ...state,
          abilities: [...state.abilities, newAbility as Ability],
        };
      }
      return state;

    default:
      return state;
  }
};

export default heroReducer;

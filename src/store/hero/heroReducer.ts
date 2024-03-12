import { Ability } from "../../interfaces/Ability";
import { HeroState, HeroAction } from "../../type";
import { initialHeroState } from "./initialHeroState";
import * as actionTypes from "./heroActionTypes";
import { SkillName } from "../../enums/skills.enum";
import update from "immutability-helper";

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
    case actionTypes.REDUCE_HEALTH:
      if (action.value)
        return { ...state, health: state.health - action.value };
      return state;

    //increasing health
    case actionTypes.ADD_ENERGY:
      if (action.value)
        return { ...state, energy: state.energy + action.value };
      return state;

    //reducing health
    case actionTypes.REDUCE_ENERGY:
      if (action.value)
        return { ...state, energy: state.energy - action.value };
      return state;

    //increasing skill
    case actionTypes.ADD_SKILL:
      if (action.skillName) {
        return {
          ...state,
          skills: state.skills.map((skill) =>
            skill.name === action.skillName
              ? { ...skill, value: skill.value + 1 }
              : skill
          ),
        };
      }
      return state;

    //reducing skill
    case actionTypes.REDUCE_SKILL:
      if (action.skillName) {
        return {
          ...state,
          skills: state.skills.map((skill) =>
            skill.name === action.skillName && skill.value
              ? { ...skill, value: skill.value - 1 }
              : skill
          ),
        };
      }
      return state;

    // //reseting skills
    case actionTypes.RESET_SKILLS:
      return {
        ...state,
        skills: initialHeroState.skills,
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

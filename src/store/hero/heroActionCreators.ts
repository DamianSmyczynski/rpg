import { GenderName } from "../../enums/gender.enum";
import { HeroAction, heroDispatchType } from "../../type";
import * as actionTypes from "./heroActionTypes";

export function setName(name: string) {
  const action: HeroAction = {
    type: actionTypes.SET_NAME,
    name: name,
  };

  return (dispatch: heroDispatchType) => {
    dispatch(action);
  };
}

export function setGender(gender: GenderName) {
  const action: HeroAction = {
    type: actionTypes.SET_GENDER,
    gender: gender,
  };

  return (dispatch: heroDispatchType) => {
    dispatch(action);
  };
}

export function addHealth(health: number) {
  const action: HeroAction = {
    type: actionTypes.ADD_HEALTH,
    value: health,
  };

  return (dispatch: heroDispatchType) => {
    dispatch(action);
  };
}

export function subtractHealth(health: number) {
  const action: HeroAction = {
    type: actionTypes.SUBTRACT_HEALTH,
    value: health,
  };

  return (dispatch: heroDispatchType) => {
    dispatch(action);
  };
}

export function addEnergy(energy: number) {
  const action: HeroAction = {
    type: actionTypes.ADD_ENERGY,
    value: energy,
  };

  return (dispatch: heroDispatchType) => {
    dispatch(action);
  };
}

export function subtractEnergy(energy: number) {
  const action: HeroAction = {
    type: actionTypes.SUBTRACT_ENERGY,
    value: energy,
  };

  return (dispatch: heroDispatchType) => {
    dispatch(action);
  };
}

export function addSkill(name: string) {
  const action: HeroAction = {
    type: actionTypes.ADD_SKILL,
    name: name,
  };

  return (dispatch: heroDispatchType) => {
    dispatch(action);
  };
}

export function subtractSkill(name: string) {
  const action: HeroAction = {
    type: actionTypes.SUBTRACT_SKILL,
    name: name,
  };

  return (dispatch: heroDispatchType) => {
    dispatch(action);
  };
}

export function setAbility(name: string) {
  const action: HeroAction = {
    type: actionTypes.SET_ABILITY,
    name: name,
  };

  return (dispatch: heroDispatchType) => {
    dispatch(action);
  };
}

export function resetSkills() {
  const action: HeroAction = {
    type: actionTypes.RESET_SKILLS,
  };

  return (dispatch: heroDispatchType) => {
    dispatch(action);
  };
}

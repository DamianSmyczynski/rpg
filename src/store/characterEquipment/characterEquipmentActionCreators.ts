import { Armor } from "../../interfaces/items/Armor";
import { Weapon } from "../../interfaces/items/Weapon";
import {
  CharacterEquipmentAction,
  characterEquipmentDispatchType,
} from "../../type";
import * as actionTypes from "./characterEquipmentActionTypes";

export function setWeapon(weapon: Weapon) {
  const action: CharacterEquipmentAction = {
    type: actionTypes.SET_WEAPON,
    weapon: weapon,
  };

  return (dispatch: characterEquipmentDispatchType) => {
    dispatch(action);
  };
}

export function removeWeapon(weapon: Weapon) {
  const action: CharacterEquipmentAction = {
    type: actionTypes.REMOVE_WEAPON,
    weapon: weapon,
  };

  return (dispatch: characterEquipmentDispatchType) => {
    dispatch(action);
  };
}

export function setArmor(armor: Armor) {
  const action: CharacterEquipmentAction = {
    type: actionTypes.SET_ARMOR,
    armor: armor,
  };

  return (dispatch: characterEquipmentDispatchType) => {
    dispatch(action);
  };
}

export function removeArmor(armor: Armor) {
  const action: CharacterEquipmentAction = {
    type: actionTypes.REMOVE_ARMOR,
    armor: armor,
  };

  return (dispatch: characterEquipmentDispatchType) => {
    dispatch(action);
  };
}

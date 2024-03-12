import { Item } from "../../interfaces/items/Item";
import {
  CharacterEquipmentAction,
  characterEquipmentDispatchType,
} from "../../type";
import * as actionTypes from "./characterEquipmentActionTypes";

export function setWeapon(item: Item) {
  const action: CharacterEquipmentAction = {
    type: actionTypes.SET_WEAPON,
    item: item,
  };

  return (dispatch: characterEquipmentDispatchType) => {
    dispatch(action);
  };
}

export function removeWeapon(item: Item) {
  const action: CharacterEquipmentAction = {
    type: actionTypes.REMOVE_WEAPON,
    item: item,
  };

  return (dispatch: characterEquipmentDispatchType) => {
    dispatch(action);
  };
}

export function setArmor(item: Item) {
  const action: CharacterEquipmentAction = {
    type: actionTypes.SET_ARMOR,
    item: item,
  };

  return (dispatch: characterEquipmentDispatchType) => {
    dispatch(action);
  };
}

export function removeArmor(item: Item) {
  const action: CharacterEquipmentAction = {
    type: actionTypes.REMOVE_ARMOR,
    item: item,
  };

  return (dispatch: characterEquipmentDispatchType) => {
    dispatch(action);
  };
}

export function addArmorDurability(item: Item) {
  const action: CharacterEquipmentAction = {
    type: actionTypes.ADD_ARMOR_DURABILITY,
    item: item,
  };

  return (dispatch: characterEquipmentDispatchType) => {
    dispatch(action);
  };
}

export function reduceArmorDurability(item: Item, durability: number) {
  const action: CharacterEquipmentAction = {
    type: actionTypes.REDUCE_ARMOR_DURABILITY,
    item: item,
    durability: durability,
  };

  return (dispatch: characterEquipmentDispatchType) => {
    dispatch(action);
  };
}

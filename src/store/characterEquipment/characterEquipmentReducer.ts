import { CharacterEquipmentAction, CharacterEquipmentState } from "../../type";
import { initialCharacterEquipment } from "./initialCharacterEquipmentstate";
import * as actionTypes from "./characterEquipmentActionTypes";
import { Weapon } from "../../interfaces/items/Weapon";
import { TypeOfArmor } from "../../interfaces/items/TypeOfArmor.enum";
import { Armor } from "../../interfaces/items/Armor";

const characterEquipmentReducer = (
  state: CharacterEquipmentState = initialCharacterEquipment,
  action: CharacterEquipmentAction
): CharacterEquipmentState => {
  switch (action.type) {
    //setting weapon
    case actionTypes.SET_WEAPON:
      if (action.weapon) return { ...state, weapon: action.weapon };
      return state;

    //removing weapon
    case actionTypes.REMOVE_WEAPON:
      if (action.weapon) return { ...state, weapon: {} as Weapon };
      return state;

    //setting armor
    case actionTypes.SET_ARMOR:
      if (action.armor) {
        switch (action.armor.typeOfArmor) {
          case TypeOfArmor.Head:
            return { ...state, head: action.armor };
          case TypeOfArmor.Chest:
            return { ...state, chest: action.armor };
          case TypeOfArmor.Hands:
            return { ...state, hands: action.armor };
          case TypeOfArmor.Legs:
            return { ...state, legs: action.armor };
          case TypeOfArmor.Boots:
            return { ...state, boots: action.armor };
        }
      }
      return state;

    //removing armor
    case actionTypes.REMOVE_ARMOR:
      if (action.armor) {
        switch (action.armor.typeOfArmor) {
          case TypeOfArmor.Head:
            return { ...state, head: {} as Armor };
          case TypeOfArmor.Chest:
            return { ...state, chest: {} as Armor };
          case TypeOfArmor.Hands:
            return { ...state, hands: {} as Armor };
          case TypeOfArmor.Legs:
            return { ...state, legs: {} as Armor };
          case TypeOfArmor.Boots:
            return { ...state, boots: {} as Armor };
        }
      }
      return state;

    default:
      return state;
  }
};

export default characterEquipmentReducer;

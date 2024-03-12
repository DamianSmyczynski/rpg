import { CharacterEquipmentAction, CharacterEquipmentState } from "../../type";
import { initialCharacterEquipment } from "./initialCharacterEquipmentstate";
import * as actionTypes from "./characterEquipmentActionTypes";
import { Weapon } from "../../interfaces/items/Weapon";
import { TypeOfArmor } from "../../interfaces/items/TypeOfArmor.enum";
import { Armor } from "../../interfaces/items/Armor";

const newDurability = (
  actualDurability: number,
  amountOfReducedDurability: number
) => {
  if (actualDurability - amountOfReducedDurability < 0) {
    return 0;
  }
  return actualDurability - amountOfReducedDurability;
};

const characterEquipmentReducer = (
  state: CharacterEquipmentState = initialCharacterEquipment,
  action: CharacterEquipmentAction
): CharacterEquipmentState => {
  switch (action.type) {
    //setting weapon
    case actionTypes.SET_WEAPON:
      if (action.item) return { ...state, weapon: action.item };
      return state;

    //removing weapon
    case actionTypes.REMOVE_WEAPON:
      if (action.item) return { ...state, weapon: {} as Weapon };
      return state;

    //setting armor
    case actionTypes.SET_ARMOR:
      if (action.item) {
        switch (action.item.typeOfArmor) {
          case TypeOfArmor.Head:
            return { ...state, head: action.item };
          case TypeOfArmor.Chest:
            return { ...state, chest: action.item };
          case TypeOfArmor.Hands:
            return { ...state, hands: action.item };
          case TypeOfArmor.Legs:
            return { ...state, legs: action.item };
          case TypeOfArmor.Boots:
            return { ...state, boots: action.item };
        }
      }
      return state;

    //removing armor
    case actionTypes.REMOVE_ARMOR:
      if (action.item) {
        switch (action.item.typeOfArmor) {
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

    //adding durability
    case actionTypes.ADD_ARMOR_DURABILITY:
      if (action.item) {
        switch (action.item.typeOfArmor) {
          case TypeOfArmor.Head:
            return {
              ...state,
              head: { ...state.head, durability: 100 } as Armor,
            };
          case TypeOfArmor.Chest:
            return {
              ...state,
              chest: { ...state.chest, durability: 100 } as Armor,
            };
          case TypeOfArmor.Hands:
            return {
              ...state,
              hands: { ...state.hands, durability: 100 } as Armor,
            };
          case TypeOfArmor.Legs:
            return {
              ...state,
              legs: { ...state.legs, durability: 100 } as Armor,
            };
          case TypeOfArmor.Boots:
            return {
              ...state,
              boots: { ...state.boots, durability: 100 } as Armor,
            };
        }
      }
      return state;

    //reducing durability
    case actionTypes.REDUCE_ARMOR_DURABILITY:
      if (action.item) {
        switch (action.item.typeOfArmor) {
          case TypeOfArmor.Head:
            return {
              ...state,
              head: {
                ...state.head,
                durability: newDurability(
                  state.head?.durability!,
                  action.durability!
                ),
              } as Armor,
            };
          case TypeOfArmor.Chest:
            return {
              ...state,
              chest: {
                ...state.chest,
                durability: newDurability(
                  state.chest?.durability!,
                  action.durability!
                ),
              } as Armor,
            };
          case TypeOfArmor.Hands:
            return {
              ...state,
              hands: {
                ...state.hands,
                durability: newDurability(
                  state.hands?.durability!,
                  action.durability!
                ),
              } as Armor,
            };
          case TypeOfArmor.Legs:
            return {
              ...state,
              legs: {
                ...state.legs,
                durability: newDurability(
                  state.legs?.durability!,
                  action.durability!
                ),
              } as Armor,
            };
          case TypeOfArmor.Boots:
            return {
              ...state,
              boots: {
                ...state.boots,
                durability: newDurability(
                  state.boots?.durability!,
                  action.durability!
                ),
              } as Armor,
            };
        }
      }
      return state;

    default:
      return state;
  }
};

export default characterEquipmentReducer;

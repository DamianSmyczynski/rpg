import { Armor } from "../../interfaces/items/Armor";
import { Item } from "../../interfaces/items/Item";
import { Weapon } from "../../interfaces/items/Weapon";
import { ItemsAction, itemsDispatchType } from "../../type";
import * as actionTypes from "./itemsActionTypes";

export function addItem(item: Item | Armor | Weapon) {
  const action: ItemsAction = {
    type: actionTypes.ADD_ITEM,
    item: item,
  };

  return (dispatch: itemsDispatchType) => {
    dispatch(action);
  };
}

export function removeItem(item: Item | Armor | Weapon) {
  const action: ItemsAction = {
    type: actionTypes.REMOVE_ITEM,
    item: item,
  };

  return (dispatch: itemsDispatchType) => {
    dispatch(action);
  };
}

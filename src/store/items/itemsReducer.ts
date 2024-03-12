import { ItemsAction, ItemsState } from "../../type";
import { initialItemsState } from "./initialItemsState";
import * as actionTypes from "./itemsActionTypes";

const itemsReducer = (
  state: ItemsState = initialItemsState,
  action: ItemsAction
): ItemsState => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      return {
        ...state,
        inventoryItems: [...state.inventoryItems, action.item],
      };

    case actionTypes.REMOVE_ITEM:
      const itemIndex = state.inventoryItems.indexOf(action.item);
      const newItems = state.inventoryItems.filter(
        (item, index) => index !== itemIndex
      );
      return { ...state, inventoryItems: newItems };

    case actionTypes.UPDATE_INVENTORY:
      if (action.items) {
        return {
          ...state,
          inventoryItems: action.items,
        };
      }
      return { ...state };

    default:
      return state;
  }
};

export default itemsReducer;

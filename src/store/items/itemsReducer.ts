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
      const newItems = state.inventoryItems.filter(
        (item) => item.name !== action.item.name
      );
      return { ...state, inventoryItems: newItems };

    default:
      return state;
  }
};

export default itemsReducer;

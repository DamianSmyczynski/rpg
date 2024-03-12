import { DialogAction, DialogState } from "../../type";
import { initialDialogState } from "./initialDialogState";
import * as actionTypes from "./dialogActionTypes";

const dialogReducer = (
  state: DialogState = initialDialogState,
  action: DialogAction
): DialogState => {
  switch (action.type) {
    case actionTypes.OPEN_DIALOG:
      return {
        ...state,
        typeOfDialog: action.typeOfDialog,
        isDialogOpened: true,
      };

    case actionTypes.CLOSE_DIALOG:
      return {
        ...state,
        typeOfDialog: action.typeOfDialog,
        isDialogOpened: false,
      };

    default:
      return state;
  }
};

export default dialogReducer;

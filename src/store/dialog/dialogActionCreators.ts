import { DialogAction, dialogDispatchType } from "../../type";
import { TypeOfDialog } from "./enums/TypeOfDialog.enum";
import * as actionTypes from "./dialogActionTypes";

export function openDialog(typeOfDialog: TypeOfDialog) {
  const action: DialogAction = {
    type: actionTypes.OPEN_DIALOG,
    typeOfDialog: typeOfDialog,
    isDialogOpened: true,
  };

  return (dispatch: dialogDispatchType) => {
    dispatch(action);
  };
}

export function closeDialog() {
  const action: DialogAction = {
    type: actionTypes.CLOSE_DIALOG,
    typeOfDialog: TypeOfDialog.None,
    isDialogOpened: false,
  };

  return (dispatch: dialogDispatchType) => {
    dispatch(action);
  };
}

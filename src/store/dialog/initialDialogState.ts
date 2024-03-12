import { DialogState } from "../../type";
import { TypeOfDialog } from "./enums/TypeOfDialog.enum";

export const initialDialogState: DialogState = {
  typeOfDialog: TypeOfDialog.None,
  isDialogOpened: false,
};

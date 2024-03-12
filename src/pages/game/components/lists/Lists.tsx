import "./Lists.css";
import Stats from "./stats/Stats";
import Inventory from "./inventory/Inventory";
import { useState } from "react";
import { ListName } from "./enum/listName.enum";
import CharacterSet from "./characterSet/CharacterSet";
import { connect } from "react-redux";
import { openDialog } from "../../../../store/dialog/dialogActionCreators";
import { TypeOfDialog } from "../../../../store/dialog/enums/TypeOfDialog.enum";

const mapStateToProps = (state: any) => {
  return {
    isDialogOpened: state.dialog.isDialogOpened,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    openDialog: (typeOfDialog: TypeOfDialog) =>
      dispatch(openDialog(typeOfDialog)),
  };
};

const Lists = (props: any) => {
  const handleListChange = () => {
    if (actualList === ListName.Stats) {
      setActualList(ListName.CharacterSet);
    } else if (actualList === ListName.CharacterSet) {
      setActualList(ListName.Stats);
    }
  };

  const [actualList, setActualList] = useState(ListName.Stats);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md list p-4">
          {actualList === ListName.Stats ? <Stats /> : <CharacterSet />}
          <button
            className="change-list-button"
            type="button"
            onClick={handleListChange}
          >
            {actualList === ListName.Stats
              ? ListName.CharacterSet
              : ListName.Stats}
          </button>
        </div>
        <div className="col list">
          <button onClick={() => props.openDialog(TypeOfDialog.Trade)}>
            Trade dialog test
          </button>
          <button onClick={() => props.openDialog(TypeOfDialog.Combat)}>
            Combat dialog test
          </button>
          <button onClick={() => props.openDialog(TypeOfDialog.Conversation)}>
            Conversation dialog test
          </button>
        </div>
        <div className="col list p-5">
          <Inventory />
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Lists);

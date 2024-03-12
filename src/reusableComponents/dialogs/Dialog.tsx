import { connect } from "react-redux";
import { TypeOfDialog } from "../../store/dialog/enums/TypeOfDialog.enum";
import CombatDialog from "./combatDialog/CombatDialog";
import "./Dialog.css";
import TradeDialog from "./tradeDialog/TradeDialog";

const mapStateToProps = (state: any) => {
  return {
    typeOfDialog: state.dialog.typeOfDialog,
  };
};

const Dialog = (props: any) => {
  const typeOfDialog = props.typeOfDialog;
  return (
    <div>
      {typeOfDialog === TypeOfDialog.Trade ? <TradeDialog /> : null}
      {typeOfDialog === TypeOfDialog.Combat ? <CombatDialog /> : null}
    </div>
  );
};

export default connect(mapStateToProps)(Dialog);

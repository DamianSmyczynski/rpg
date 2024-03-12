import Dialog from "../../reusableComponents/dialogs/Dialog";
import Lists from "./components/lists/Lists";
import { connect } from "react-redux";

const mapStateToProps = (state: any) => {
  return {
    isDialogOpened: state.dialog.isDialogOpened,
  };
};

const Game = (props: any) => {
  const isDialogOpened = props.isDialogOpened;

  return <>{isDialogOpened ? <Dialog /> : <Lists />}</>;
};

export default connect(mapStateToProps)(Game);

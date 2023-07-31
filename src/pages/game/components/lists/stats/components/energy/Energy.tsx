import { connect } from "react-redux";
import "./Energy.css";

const mapStateToProps = (state: any) => {
  return {
    energy: state.hero.energy,
  };
};

const Energy = (props: any) => {
  return (
    <>
      <h5>Energy</h5>
      <div className="energy-bar">
        <div
          className="energy-bar-progress"
          style={{ width: `${props.energy}%` }}
        ></div>
      </div>
    </>
  );
};

export default connect(mapStateToProps)(Energy);

import { connect } from "react-redux";
import "./Health.css";

const mapStateToProps = (state: any) => {
  return {
    health: state.hero.health,
  };
};

const HealthBarClass = (health: number) => {
  if (health > 75) {
    return "health-bar-high";
  } else if (health > 25 && health <= 75) {
    return "health-bar-medium";
  } else if (health <= 25) {
    return "health-bar-low";
  } else return undefined;
};

const Health = (props: any) => {
  return (
    <>
      <h5>Health</h5>
      <div className="health-bar">
        <div
          className={HealthBarClass(props.health)}
          style={{ width: `${props.health}%` }}
        ></div>
      </div>
    </>
  );
};

export default connect(mapStateToProps)(Health);

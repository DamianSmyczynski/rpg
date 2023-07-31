import { useState } from "react";
import { Armor } from "../../../../../../interfaces/items/Armor";
import {
  removeArmor,
  setArmor,
} from "../../../../../../store/characterEquipment/characterEquipmentActionCreators";
import "./EquipmentStyles.css";
import "./legsArmor.css";
import { connect } from "react-redux";

const mapStateToProps = (state: any) => {
  return {
    legs: state.characterEquipment.legs,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setArmor: (legs: Armor) => dispatch(setArmor(legs)),
    removeArmor: (legs: Armor) => dispatch(removeArmor(legs)),
  };
};

const LegsArmor = (props: any) => {
  const [isHovering, setIsHovering] = useState(false);

  const { legs } = props;

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const LegsClass = (durability: number) => {
    if (durability > 75) {
      return "legs legs-high";
    } else if (durability > 25 && durability <= 75) {
      return "legs legs-medium";
    } else if (durability >= 0 && durability <= 25) {
      return "legs legs-low";
    } else {
      return "legs no-legs";
    }
  };

  return (
    <>
      <div
        className={LegsClass(legs.durability)}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      ></div>
      {isHovering && legs.name ? (
        <div className="item-details">
          <p>Legs</p>
          <p>{legs.name}</p>
          <p>Armor: {legs.armor}</p>
        </div>
      ) : null}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LegsArmor);

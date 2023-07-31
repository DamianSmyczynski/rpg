import { useState } from "react";
import { Armor } from "../../../../../../interfaces/items/Armor";
import {
  removeArmor,
  setArmor,
} from "../../../../../../store/characterEquipment/characterEquipmentActionCreators";
import "./EquipmentStyles.css";
import "./HeadArmor.css";
import { connect } from "react-redux";

const mapStateToProps = (state: any) => {
  return {
    head: state.characterEquipment.head,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setArmor: (head: Armor) => dispatch(setArmor(head)),
    removeArmor: (head: Armor) => dispatch(removeArmor(head)),
  };
};

const HeadArmor = (props: any) => {
  const [isHovering, setIsHovering] = useState(false);

  const { head } = props;

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const HelmetClass = (durability: number) => {
    if (durability > 75) {
      return "helmet helmet-high";
    } else if (durability > 25 && durability <= 75) {
      return "helmet helmet-medium";
    } else if (durability >= 0 && durability <= 25) {
      return "helmet helmet-low";
    } else {
      return "helmet no-helmet";
    }
  };

  return (
    <>
      <div
        className={HelmetClass(head.durability)}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      ></div>
      {isHovering && head.name ? (
        <div className="item-details">
          <p>Head</p>
          <p>{head.name}</p>
          <p>Armor: {head.armor}</p>
        </div>
      ) : null}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HeadArmor);

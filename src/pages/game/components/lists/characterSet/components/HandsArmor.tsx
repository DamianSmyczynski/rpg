import { useState } from "react";
import { Armor } from "../../../../../../interfaces/items/Armor";
import {
  removeArmor,
  setArmor,
} from "../../../../../../store/characterEquipment/characterEquipmentActionCreators";
import "./EquipmentStyles.css";
import "./handsArmor.css";
import { connect } from "react-redux";

const mapStateToProps = (state: any) => {
  return {
    hands: state.characterEquipment.hands,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setArmor: (hands: Armor) => dispatch(setArmor(hands)),
    removeArmor: (hands: Armor) => dispatch(removeArmor(hands)),
  };
};

const HandsArmor = (props: any) => {
  const [isHovering, setIsHovering] = useState(false);

  const { hands } = props;

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const HandsClass = (durability: number) => {
    if (durability > 75) {
      return "hands hands-high";
    } else if (durability > 25 && durability <= 75) {
      return "hands hands-medium";
    } else if (durability >= 0 && durability <= 25) {
      return "hands hands-low";
    } else {
      return "hands no-hands";
    }
  };

  return (
    <>
      <div
        className={HandsClass(hands.durability)}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      ></div>
      {isHovering && hands.name ? (
        <div className="item-details">
          <p>Hands</p>
          <p>{hands.name}</p>
          <p>Armor: {hands.armor}</p>
        </div>
      ) : null}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HandsArmor);

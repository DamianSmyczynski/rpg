import { useState } from "react";
import { Armor } from "../../../../../../interfaces/items/Armor";
import {
  removeArmor,
  setArmor,
} from "../../../../../../store/characterEquipment/characterEquipmentActionCreators";
import "./EquipmentStyles.css";
import "./bootsArmor.css";
import { connect } from "react-redux";

const mapStateToProps = (state: any) => {
  return {
    boots: state.characterEquipment.boots,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setArmor: (boots: Armor) => dispatch(setArmor(boots)),
    removeArmor: (boots: Armor) => dispatch(removeArmor(boots)),
  };
};

const BootsArmor = (props: any) => {
  const [isHovering, setIsHovering] = useState(false);

  const { boots } = props;

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const BootsClass = (durability: number) => {
    if (durability > 75) {
      return "boots boots-high";
    } else if (durability > 25 && durability <= 75) {
      return "boots boots-medium";
    } else if (durability >= 0 && durability <= 25) {
      return "boots boots-low";
    } else {
      return "boots no-boots";
    }
  };

  return (
    <>
      <div
        className={BootsClass(boots.durability)}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      ></div>
      {isHovering && boots.name ? (
        <div className="item-details">
          <p>Boots</p>
          <p>{boots.name}</p>
          <p>Armor: {boots.armor}</p>
        </div>
      ) : null}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BootsArmor);

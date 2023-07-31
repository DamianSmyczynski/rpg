import { useState } from "react";
import { Armor } from "../../../../../../interfaces/items/Armor";
import {
  removeArmor,
  setArmor,
} from "../../../../../../store/characterEquipment/characterEquipmentActionCreators";
import "./EquipmentStyles.css";
import "./chestArmor.css";
import { connect } from "react-redux";

const mapStateToProps = (state: any) => {
  return {
    chest: state.characterEquipment.chest,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setArmor: (chest: Armor) => dispatch(setArmor(chest)),
    removeArmor: (chest: Armor) => dispatch(removeArmor(chest)),
  };
};

const ChestArmor = (props: any) => {
  const [isHovering, setIsHovering] = useState(false);

  const { chest } = props;

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const ChestClass = (durability: number) => {
    if (durability > 75) {
      return "chest chest-high";
    } else if (durability > 25 && durability <= 75) {
      return "chest chest-medium";
    } else if (durability >= 0 && durability <= 25) {
      return "chest chest-low";
    } else {
      return "chest no-chest";
    }
  };

  return (
    <>
      <div
        className={ChestClass(chest.durability)}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      ></div>
      {isHovering && chest.name ? (
        <div className="item-details">
          <p>Chest</p>
          <p>{chest.name}</p>
          <p>Armor: {chest.armor}</p>
        </div>
      ) : null}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ChestArmor);

import { useState } from "react";
import { Weapon } from "../../../../../../interfaces/items/Weapon";
import { removeWeapon } from "../../../../../../store/characterEquipment/characterEquipmentActionCreators";
import "./EquipmentStyles.css";
import "./CharacterWeapon.css";
import { connect } from "react-redux";

const mapStateToProps = (state: any) => {
  return {
    weapon: state.characterEquipment.weapon,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    removeWeapon: (weapon: Weapon) => dispatch(removeWeapon(weapon)),
  };
};

const CharacterWeapon = (props: any) => {
  const [isHovering, setIsHovering] = useState(false);

  const { weapon } = props;

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const weaponClass = (durability: number) => {
    if (durability > 75) {
      return "weapon weapon-high";
    } else if (durability > 25 && durability <= 75) {
      return "weapon weapon-medium";
    } else if (durability >= 0 && durability <= 25) {
      return "weapon weapon-low";
    } else {
      return "weapon no-weapon";
    }
  };

  return (
    <>
      <div
        className={weaponClass(weapon.durability)}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      ></div>
      {isHovering && weapon.name ? (
        <div className="item-details">
          <p>Weapon</p>
          <p>{weapon.name}</p>
          <p>Damage: {weapon.attack}</p>
        </div>
      ) : null}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterWeapon);

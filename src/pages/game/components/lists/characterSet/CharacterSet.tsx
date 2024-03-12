import HeadArmor from "./components/HeadArmor";
import ChestArmor from "./components/ChestArmor";
import HandsArmor from "./components/HandsArmor";
import LegsArmor from "./components/LegsArmor";
import BootsArmor from "./components/BootsArmor";
import CharacterWeapon from "./components/CharacterWeapon";
import { connect } from "react-redux";
import {
  removeArmor,
  removeWeapon,
} from "../../../../../store/characterEquipment/characterEquipmentActionCreators";
import { Armor } from "../../../../../interfaces/items/Armor";
import { Weapon } from "../../../../../interfaces/items/Weapon";
import { addItem } from "../../../../../store/items/itemsActionCreators";
import { TypeOfItem } from "../../../../../interfaces/items/TypeOfItem.enum";

const mapStateToProps = (state: any) => {
  return {
    head: state.characterEquipment.head,
    chest: state.characterEquipment.chest,
    hands: state.characterEquipment.hands,
    legs: state.characterEquipment.legs,
    boots: state.characterEquipment.boots,
    weapon: state.characterEquipment.weapon,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    removeArmor: (armor: Armor) => dispatch(removeArmor(armor)),
    removeWeapon: (weapon: Weapon) => dispatch(removeWeapon(weapon)),
    addItem: (item: Weapon | Armor) => dispatch(addItem(item)),
  };
};

const handleButtonDisable = (item: Armor | Weapon) => {
  return item.name ? false : true;
};

const CharacterSet = (props: any) => {
  const { head, chest, hands, legs, boots, weapon } = props;

  const handleItemRemove = (item: any) => {
    props.addItem(item);
    if (item.type === TypeOfItem.Armor) props.removeArmor(item);
    if (item.type === TypeOfItem.Weapon) props.removeWeapon(item);
  };

  return (
    <div className="active-list">
      <div className="p-2">
        <h3>Character Set</h3>
        <HeadArmor />
        <ChestArmor />
        <HandsArmor />
        <LegsArmor />
        <BootsArmor />
        <CharacterWeapon />
        <div className="eq-info">
          <button
            type="button"
            className="equipment-item m-1"
            disabled={handleButtonDisable(head)}
            onClick={() => handleItemRemove(head)}
          >
            Remove head armor
          </button>
          <button
            type="button"
            className="equipment-item m-1"
            disabled={handleButtonDisable(chest)}
            onClick={() => handleItemRemove(chest)}
          >
            Remove chest armor
          </button>
          <button
            type="button"
            className="equipment-item m-1"
            disabled={handleButtonDisable(hands)}
            onClick={() => handleItemRemove(hands)}
          >
            Remove hands armor
          </button>
          <button
            type="button"
            className="equipment-item m-1"
            disabled={handleButtonDisable(legs)}
            onClick={() => handleItemRemove(legs)}
          >
            Remove legs armor
          </button>
          <button
            type="button"
            className="equipment-item m-1"
            disabled={handleButtonDisable(boots)}
            onClick={() => handleItemRemove(boots)}
          >
            Remove boots armor
          </button>
          <button
            type="button"
            className="equipment-item m-1"
            disabled={handleButtonDisable(weapon)}
            onClick={() => handleItemRemove(weapon)}
          >
            Remove weapon
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterSet);

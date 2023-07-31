import { useState } from "react";
import "./Inventory.css";
import { connect } from "react-redux";
import { Armor } from "../../../../../interfaces/items/Armor";
import { Item } from "../../../../../interfaces/items/Item";
import { Weapon } from "../../../../../interfaces/items/Weapon";
import {
  addItem,
  removeItem,
} from "../../../../../store/items/itemsAcitonCreators";
import { TypeOfItem } from "../../../../../interfaces/items/TypeOfItem.enum";
import {
  setArmor,
  setWeapon,
} from "../../../../../store/characterEquipment/characterEquipmentActionCreators";
import { TypeOfArmor } from "../../../../../interfaces/items/TypeOfArmor.enum";

const mapStateToProps = (state: any) => {
  return {
    inventoryItems: state.items.inventoryItems,
    characterEquipment: state.characterEquipment,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setWeapon: (weapon: Weapon) => dispatch(setWeapon(weapon)),
    setArmor: (armor: Armor) => dispatch(setArmor(armor)),
    addItem: (item: Item | Weapon | Armor) => dispatch(addItem(item)),
    removeItem: (item: Item | Weapon | Armor) => dispatch(removeItem(item)),
  };
};

const filters: TypeOfItem[] = [
  TypeOfItem.Other,
  TypeOfItem.Armor,
  TypeOfItem.Weapon,
];

const Inventory = (props: any) => {
  const inventoryItems = props.inventoryItems;
  const equipment = props.characterEquipment;

  const [inventoryFilter, setInventoryFilter] = useState(TypeOfItem.Other);
  const [filterDropdown, setFilterDropdown] = useState(false);

  const handleDropdown = () => {
    setFilterDropdown(!filterDropdown);
  };

  const handleFilters = (filters: TypeOfItem[]) => {
    return (
      <div className="filters">
        {filters.map((filter, index) => (
          <div
            key={index}
            className="items-filter"
            onClick={() => {
              setInventoryFilter(filter);
              setFilterDropdown(false);
            }}
          >
            {filter}
          </div>
        ))}
      </div>
    );
  };

  const displayItems = (typeOfItem: TypeOfItem) => {
    const filteredItems = inventoryItems?.filter(
      (item: Item | Armor | Weapon) => item.type === typeOfItem
    );

    return filteredItems?.map((item: any, index: number) => (
      <div key={index} className="inventory-item">
        <div>{item.name}</div>
        {item.type === TypeOfItem.Armor ? <p>Armor: {item.armor}</p> : null}
        {item.type === TypeOfItem.Weapon ? <p>Attack: {item.attack}</p> : null}
        <p>Durability: {item.durability}</p>
        <button type="button" onClick={() => removeItem(item)}>
          Remove
        </button>
        <button type="button" onClick={() => useItem(item)}>
          Use
        </button>
      </div>
    ));
  };

  const useItem = (item: any) => {
    switch (item.type) {
      case TypeOfItem.Weapon:
        if (equipment.weapon) {
          props.addItem(equipment.weapon);
        }
        props.setWeapon(item);
        props.removeItem(item);
        break;
      case TypeOfItem.Armor:
        switch (item.typeOfArmor) {
          case TypeOfArmor.Head:
            if (equipment.head) props.addItem(equipment.head);
            break;
          case TypeOfArmor.Chest:
            if (equipment.chest) props.addItem(equipment.chest);
            break;
          case TypeOfArmor.Hands:
            if (equipment.hands) props.addItem(equipment.hands);
            break;
          case TypeOfArmor.Legs:
            if (equipment.legs) props.addItem(equipment.legs);
            break;
          case TypeOfArmor.Boots:
            if (equipment.boots) props.addItem(equipment.boots);
            break;
        }
        props.setArmor(item);
        props.removeItem(item);
    }
  };

  const removeItem = (item: Item) => {
    props.removeItem(item);
  };

  return (
    <>
      <h4>Inventory</h4>
      <div className="items-filter" onClick={handleDropdown}>
        {inventoryFilter}
        {filterDropdown ? handleFilters(filters) : null}
      </div>
      {displayItems(inventoryFilter)}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);

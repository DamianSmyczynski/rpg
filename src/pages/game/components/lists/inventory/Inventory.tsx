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
  const [selectedItem, setSelectedItem] = useState({} as any);

  const handleDropdown = () => {
    setFilterDropdown(!filterDropdown);
  };

  const handleFilters = (filters: TypeOfItem[]) => {
    return (
      <div className="items-filter filters">
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

    return (
      <div className="inventory-grid">
        {filteredItems?.map((item: any, index: number) => (
          <button
            key={index}
            className="item-icon"
            onClick={() => setSelectedItem(item)}
          >
            <img src={item.iconUrl} />
          </button>
        ))}
      </div>
    );
  };

  const useItem = (item: any) => {
    switch (item.type) {
      case TypeOfItem.Weapon:
        if (equipment.weapon) {
          props.addItem(equipment.weapon);
        }
        props.setWeapon(item);
        setSelectedItem({});
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
        setSelectedItem({});
        props.removeItem(item);
    }
  };

  const removeItem = (item: Item) => {
    props.removeItem(item);
    setSelectedItem({});
  };

  return (
    <>
      <h4>Inventory</h4>
      <div
        className={filterDropdown ? "items-filter" : "items-actual-filter"}
        onClick={handleDropdown}
      >
        {inventoryFilter}
        {filterDropdown ? handleFilters(filters) : null}
      </div>
      <div className="inventory-item">
        <h5>{selectedItem.name ? selectedItem.name : "Choose item"}</h5>
        {selectedItem.type === TypeOfItem.Armor ? (
          <p>Armor: {selectedItem.armor}</p>
        ) : null}
        {selectedItem.type === TypeOfItem.Weapon ? (
          <p>Attack: {selectedItem.attack}</p>
        ) : null}
        {selectedItem ? <p>Durability: {selectedItem.durability}</p> : null}
        <div className="inventory-item-buttons">
          <button type="button" onClick={() => useItem(selectedItem)}>
            Use
          </button>
          <button type="button" onClick={() => removeItem(selectedItem)}>
            Remove
          </button>
        </div>
      </div>
      {displayItems(inventoryFilter)}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);

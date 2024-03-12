import { useState } from "react";
import "./Inventory.css";
import { connect } from "react-redux";
import { Armor } from "../../../../../interfaces/items/Armor";
import { Item } from "../../../../../interfaces/items/Item";
import { Weapon } from "../../../../../interfaces/items/Weapon";
import {
  addItem,
  removeItem,
} from "../../../../../store/items/itemsActionCreators";
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

  const [inventoryFilter, setInventoryFilter] = useState(TypeOfItem.None);
  const [filterDropdown, setFilterDropdown] = useState(false);
  const [listOfFilteredItems, setListOfFilteredItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState({} as any);
  const [firstIndexItem, setFirstIndexItem] = useState(0);
  const [lastIndexItem, setLastIndexItem] = useState(6);

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
              handleListFiltering(filter);
            }}
          >
            {filter}
          </div>
        ))}
      </div>
    );
  };

  const handleListFiltering = (filter: TypeOfItem) => {
    setListOfFilteredItems(
      inventoryItems?.filter(
        (item: Item | Armor | Weapon) => item.type === filter
      )
    );
    setFirstIndexItem(0);
    setLastIndexItem(6);
  };

  const updateItemsInActualList = (filter: TypeOfItem) => {
    setListOfFilteredItems(
      inventoryItems?.filter(
        (item: Item | Armor | Weapon) => item.type === filter
      )
    );
  };

  const handleArrowLeft = () => {
    if (lastIndexItem > 6) {
      setFirstIndexItem(firstIndexItem - 6);
      setLastIndexItem(lastIndexItem - 6);
    }
  };

  const handleArrowRight = () => {
    if (listOfFilteredItems.length - 1 > lastIndexItem) {
      setFirstIndexItem(firstIndexItem + 6);
      setLastIndexItem(lastIndexItem + 6);
    }
  };

  const displayItems = (typeOfItem: TypeOfItem) => {
    const filteredItems = inventoryItems?.filter(
      (item: Item | Armor | Weapon) => item.type === typeOfItem
    );

    return (
      <div className="inventory-grid">
        {filteredItems?.map((item: any, index: number) => {
          if (index >= firstIndexItem && index < lastIndexItem) {
            return (
              <button
                key={index}
                className="item-icon"
                onClick={() => setSelectedItem(item)}
              >
                <img src={item.iconUrl} />
              </button>
            );
          }
        })}
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
        removeItem(item);
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
        removeItem(item);
    }
  };

  const removeItem = (item: Item) => {
    props.removeItem(item);
    setSelectedItem({});
    updateItemsInActualList(inventoryFilter);
    if (listOfFilteredItems.length - 2 === lastIndexItem - 6) {
      handleArrowLeft();
    }
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
        {selectedItem.durability ||
        selectedItem.type === TypeOfItem.Armor ||
        selectedItem.type === TypeOfItem.Weapon ? (
          <p>Durability: {selectedItem.durability}</p>
        ) : null}
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
      <div className="page-arrows">
        <button onClick={() => handleArrowLeft()}>&lt;</button>
        <button onClick={() => handleArrowRight()}>&gt;</button>
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);

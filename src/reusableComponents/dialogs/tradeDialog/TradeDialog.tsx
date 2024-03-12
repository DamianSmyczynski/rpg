import { connect } from "react-redux";
import "./../Dialog.css";
import "./TradeDialog.css";
import { TypeOfItem } from "../../../interfaces/items/TypeOfItem.enum";
import { Armor } from "../../../interfaces/items/Armor";
import { Item } from "../../../interfaces/items/Item";
import { Weapon } from "../../../interfaces/items/Weapon";
import { useState } from "react";
import { updateInventory } from "../../../store/items/itemsActionCreators";
import { TypeOfArmor } from "../../../interfaces/items/TypeOfArmor.enum";
import { closeDialog } from "../../../store/dialog/dialogActionCreators";

const mapStateToProps = (state: any) => {
  return {
    money: state.items.money,
    inventoryItems: state.items.inventoryItems,
    characterEquipment: state.characterEquipment,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateInventory: (items: (Item | Weapon | Armor)[]) =>
      dispatch(updateInventory(items)),
    closeDialog: () => dispatch(closeDialog()),
  };
};

const TradeDialog = (props: any) => {
  const money: number = props.money;
  const inventoryItems: Item[] = props.inventoryItems;

  console.log(inventoryItems);

  const npcInventoryForTesting: (Item | Armor | Weapon)[] = [
    {
      type: TypeOfItem.Armor,
      name: "Test Helmet",
      typeOfArmor: TypeOfArmor.Head,
      armor: 2,
      durability: 78,
      belongsToPlayer: false,
      value: 12,
    } as Armor,
    {
      type: TypeOfItem.Armor,
      name: "Test Chest",
      typeOfArmor: TypeOfArmor.Chest,
      armor: 12,
      durability: 10,
      belongsToPlayer: false,
      value: 50,
    } as Armor,
  ];

  const npcInventoryForTestingMapped = npcInventoryForTesting.map((item) => {
    if (!item.belongsToPlayer) {
      return { ...item, value: item.value * 1.5 } as Item;
    }
    return item;
  });

  const [inventoryFilter, setInventoryFilter] = useState(TypeOfItem.Armor);
  const [selectedItem, setSelectedItem] = useState({} as any);
  const [transactionMoney, setTransactionMoney] = useState(0);

  const [npcBoard, setNpcBoard] = useState({
    firstIndex: 0,
    lastIndex: 9,
    addingToInventoryEnabled: false,
  });

  const [playerBoard, setPlayerBoard] = useState({
    firstIndex: 0,
    lastIndex: 9,
    addingToInventoryEnabled: false,
  });

  const [npcInventory, setNpcInventory] = useState(
    npcInventoryForTestingMapped
  );
  const [playerInventory, setPlayerInventory] = useState(inventoryItems);

  const handleItemSelect = (item: Item) => {
    setNpcBoard({
      ...npcBoard,
      addingToInventoryEnabled: item.belongsToPlayer,
    });
    setPlayerBoard({
      ...playerBoard,
      addingToInventoryEnabled: !item.belongsToPlayer,
    });
    setSelectedItem(item);
    console.log(item);
  };

  const handleTransactionValueChanges = (item: Item, value: number) => {
    setTransactionMoney(transactionMoney + value);
  };

  const handleNpcArrowLeft = () => {
    if (npcBoard.lastIndex > 9) {
      setNpcBoard({
        ...npcBoard,
        firstIndex: npcBoard.firstIndex - 9,
        lastIndex: npcBoard.lastIndex - 9,
      });
    }
  };

  const handleNpcArrowRight = () => {
    if (npcInventory.length - 1 > npcBoard.lastIndex) {
      setNpcBoard({
        ...npcBoard,
        firstIndex: npcBoard.firstIndex + 9,
        lastIndex: npcBoard.lastIndex + 9,
      });
    }
  };

  const handlePlayerArrowLeft = () => {
    if (playerBoard.lastIndex > 9) {
      setPlayerBoard({
        ...playerBoard,
        firstIndex: playerBoard.firstIndex - 9,
        lastIndex: playerBoard.lastIndex - 9,
      });
    }
  };

  const handlePlayerArrowRight = () => {
    if (playerInventory.length - 1 > playerBoard.lastIndex) {
      setPlayerBoard({
        ...playerBoard,
        firstIndex: playerBoard.firstIndex + 9,
        lastIndex: playerBoard.lastIndex + 9,
      });
    }
  };

  const handleMoveToNpc = (item: Item) => {
    const itemIndex = playerInventory.indexOf(item);

    const newPlayerInventory = playerInventory.filter(
      (item: Item, index: number) => index !== itemIndex
    );

    item.belongsToPlayer = false;

    const newNpcInventory = [...npcInventory, item];

    setPlayerInventory(newPlayerInventory);
    setNpcInventory(newNpcInventory);

    handleTransactionValueChanges(item, item.value);

    setSelectedItem({});
    setNpcBoard({ ...npcBoard, addingToInventoryEnabled: false });
    setPlayerBoard({ ...playerBoard, addingToInventoryEnabled: false });
  };

  const handleMoveToPlayer = (item: Item) => {
    const itemIndex = npcInventory.indexOf(item);

    const newNpcInventory = npcInventory.filter(
      (item: Item, index: number) => index !== itemIndex
    );

    item.belongsToPlayer = true;

    const newPlayerInventory = [...playerInventory, item];

    setPlayerInventory(newPlayerInventory);
    setNpcInventory(newNpcInventory);

    handleTransactionValueChanges(item, -item.value);

    setSelectedItem({});
    setNpcBoard({ ...npcBoard, addingToInventoryEnabled: false });
    setPlayerBoard({ ...playerBoard, addingToInventoryEnabled: false });
  };

  const handleTransactionMoney = (money: number) => {
    if (money > 0) {
      return <div>You will get: {money} gold</div>;
    } else if (money === 0) {
      return <div>You have nothing to pay</div>;
    } else if (money < 0) return <div>You will pay: {-money} gold</div>;
  };

  const displayItems = (
    typeOfItem: TypeOfItem,
    inventory: Item[],
    inventoryFirstIndex: number,
    inventoryLastIndex: number
  ) => {
    const filteredItems = inventory.filter((item) => item.type === typeOfItem);
    return (
      <div className="trade-inventory-grid">
        {filteredItems?.map((item: any, index: number) => {
          if (index >= inventoryFirstIndex && index < inventoryLastIndex) {
            return (
              <button
                key={index}
                className="trade-item-icon"
                onClick={() => handleItemSelect(item)}
              >
                <img src={item.iconUrl} />
              </button>
            );
          }
        })}
      </div>
    );
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md list p-4">
            <div>Money: {money}</div>
            {displayItems(
              inventoryFilter,
              npcInventory,
              npcBoard.firstIndex,
              npcBoard.lastIndex
            )}
            <div className="player-trade-arrows">
              <button onClick={() => handleNpcArrowLeft()}>&lt;</button>
              <button onClick={() => handleNpcArrowRight()}>&gt;</button>
            </div>
          </div>
          <div className="col list">
            <h2>Trade</h2>

            <div className="trade-selected-item p-5">
              <h5>{selectedItem?.name ? selectedItem?.name : "Choose item"}</h5>
              {selectedItem?.durability ? (
                <p>Price: {selectedItem?.value}</p>
              ) : null}
              {selectedItem?.type === TypeOfItem.Armor ? (
                <p>Armor: {selectedItem?.armor}</p>
              ) : null}
              {selectedItem?.type === TypeOfItem.Weapon ? (
                <p>Attack: {selectedItem?.attack}</p>
              ) : null}
              {selectedItem?.durability ? (
                <p>Durability: {selectedItem?.durability}</p>
              ) : null}
            </div>
            <div>
              <button
                onClick={() => handleMoveToNpc(selectedItem)}
                disabled={!npcBoard.addingToInventoryEnabled}
              >
                &lt;&lt;
              </button>
              <button
                onClick={() => handleMoveToPlayer(selectedItem)}
                disabled={!playerBoard.addingToInventoryEnabled}
              >
                &gt;&gt;
              </button>
              <button>DEAL</button>
              <button onClick={() => props.closeDialog()}>Cancel trade</button>
            </div>
            <div className="m-5">
              {handleTransactionMoney(transactionMoney)}
            </div>
          </div>
          <div className="col list p-5">
            <div>Money: {money}</div>
            {displayItems(
              inventoryFilter,
              playerInventory,
              playerBoard.firstIndex,
              playerBoard.lastIndex
            )}
            <div className="player-trade-arrows">
              <button onClick={() => handlePlayerArrowLeft()}>&lt;</button>
              <button onClick={() => handlePlayerArrowRight()}>&gt;</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TradeDialog);

import "./Lists.css";
import Stats from "./stats/Stats";
import Inventory from "./inventory/Inventory";
import { useState } from "react";
import { ListName } from "./enum/listName.enum";
import CharacterSet from "./characterSet/CharacterSet";

const Lists = () => {
  const handleListChange = () => {
    if (actualList === ListName.Stats) {
      setActualList(ListName.CharacterSet);
    } else if (actualList === ListName.CharacterSet) {
      setActualList(ListName.Stats);
    }
  };

  const [actualList, setActualList] = useState(ListName.Stats);
  return (
    <div className="lists">
      <div className="list stats p-4">
        {actualList === ListName.Stats ? <Stats /> : <CharacterSet />}
        <button
          className="change-list-button"
          type="button"
          onClick={handleListChange}
        >
          {actualList === ListName.Stats
            ? ListName.CharacterSet
            : ListName.Stats}
        </button>
      </div>
      <div className="list inventory p-5">
        <Inventory />
      </div>
    </div>
  );
};

export default Lists;

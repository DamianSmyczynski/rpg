import { store } from "../../../../../../../store/store";
import "./Name.css";

const Name = () => {
  const characterName = store.getState().hero.name;
  return (
    <div className="name">
      <h4>Name</h4>
      {characterName.charAt(0).toUpperCase() + characterName.slice(1)}
    </div>
  );
};

export default Name;

import { store } from "../../../../../../../store/store";
import "./AbilityStat.css";

interface AbilityStatProps {
  name: string;
}

const AbilityStat = ({ name }: AbilityStatProps) => {
  const ability = store.getState().hero.abilities.find((item) => {
    return item.name === name;
  });

  return (
    <div className="abilitystat">
      {ability?.name}: {ability?.possesed ? "Yes" : "No"}
    </div>
  );
};

export default AbilityStat;

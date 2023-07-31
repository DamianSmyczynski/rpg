import { Ability } from "../../../../../interfaces/Ability";
import { Skill } from "../../../../../interfaces/Skill";
import { store } from "../../../../../store/store";
import AbilityStat from "./components/ability/AbilityStat";
import Energy from "./components/energy/Energy";
import Gender from "./components/gender/Gender";
import Health from "./components/health/Health";
import Name from "./components/name/Name";
import SkillStat from "./components/skill/SkillStat";
import "./Stats.css";

const SkillsHandler = (skills: Skill[]) => {
  return skills.map((skill, index) => (
    <div key={index} className="skills">
      <SkillStat key={skill.name} name={skill.name} />
      <br />
    </div>
  ));
};

const AbilitiesHandler = (abilities: Ability[]) => {
  return abilities.map((ability, index) => (
    <div key={index} className="skills">
      <AbilityStat key={ability.name} name={ability.name} />
      <br />
    </div>
  ));
};

const Stats = () => {
  const { skills, abilities } = store.getState().hero;
  return (
    <div className="active-list">
      <div className="p-2">
        <h3>Statistics</h3>
      </div>
      <div className="pb-2">
        <Name key="name" />
      </div>
      <div className="pb-2">
        <Gender key="gender" />
      </div>
      <div className="pb-2">
        <Health key="health" />
      </div>
      <div className="pb-2">
        <Energy key="energy" />
      </div>
      <h5>Skills</h5>
      {SkillsHandler(skills)}
      <h5>Abilities</h5>
      {AbilitiesHandler(abilities)}
    </div>
  );
};

export default Stats;

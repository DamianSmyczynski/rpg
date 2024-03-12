import { connect } from "react-redux";
import { Ability } from "../../../../../interfaces/Ability";
import AbilityStat from "./components/ability/AbilityStat";
import Energy from "./components/energy/Energy";
import Gender from "./components/gender/Gender";
import Health from "./components/health/Health";
import Name from "./components/name/Name";
import "./Stats.css";
import { Skill } from "../../../../../interfaces/Skill";

const mapStateToProps = (state: any) => {
  return {
    health: state.hero.health,
    energy: state.hero.energy,
    skills: state.hero.skills,
    abilites: state.hero.abilities,
  };
};

const displaySkills = (skills: Skill[]) => {
  return (
    <>
      {skills.map((skill) => {
        return (
          <p key={skill.name}>
            {skill.name}: {skill.value}
          </p>
        );
      })}
    </>
  );
};

const AbilitiesHandler = (abilities: Ability[]) => {
  return abilities.map((ability, index) => (
    <div key={index} className="skills">
      <AbilityStat key={ability.name} name={ability.name} />
      <br />
    </div>
  ));
};

const Stats = (props: any) => {
  const health = props.health;
  const energy = props.energy;
  const skills = props.skills;
  const abilities = props.abilites;

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
        <Health health={health} />
      </div>
      <div className="pb-2">
        <Energy energy={energy} />
      </div>
      <h5>Skills</h5>
      {displaySkills(skills)}
      <h5>Abilities</h5>
      {AbilitiesHandler(abilities)}
    </div>
  );
};

export default connect(mapStateToProps)(Stats);

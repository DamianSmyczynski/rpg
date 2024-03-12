import "./CharacterCreation.css";
import { useState } from "react";
import { GenderName } from "../../enums/gender.enum";
import { SkillName } from "../../enums/skills.enum";
import { useNavigate } from "react-router-dom";
import {
  addSkill,
  reduceSkill,
  resetSkills,
  setGender,
  setName,
} from "../../store/hero/heroActionCreators";
import { connect } from "react-redux";

const mapStateToProps = (state: any) => {
  return {
    name: state.hero.name,
    gender: state.hero.gender,
    skills: state.hero.skills,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setName: (characterName: string) => dispatch(setName(characterName)),
    setGender: (characterGender: GenderName) =>
      dispatch(setGender(characterGender)),
    addSkill: (skillName: SkillName) => dispatch(addSkill(skillName)),
    reduceSkill: (skillName: SkillName) => dispatch(reduceSkill(skillName)),
    resetSkills: () => dispatch(resetSkills()),
  };
};

const CharacterCreation = (props: any) => {
  const [skillPoints, setSkillPoints] = useState(10);
  const [characterName, setCharacterName] = useState("");
  const [characterGender, setCharacterGender] = useState(GenderName.Male);

  const [characterStrength, setCharacterStrength] = useState(1);
  const [characterAgility, setCharacterAgility] = useState(1);
  const [characterIntellect, setCharacterIntellect] = useState(1);

  const navigate = useNavigate();

  const displaySkills = () => {
    return (
      <>
        <h4>Available skill points: {skillPoints}</h4>
        <h5>Skills</h5>
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <button
                type="button"
                onClick={() => handleReduceSkill(SkillName.Strength)}
              >
                -
              </button>
            </div>
            <div className="col">
              {SkillName.Strength}: {characterStrength}
            </div>
            <div className="col">
              <button
                type="button"
                onClick={() => handleAddSkill(SkillName.Strength)}
              >
                +
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button
                type="button"
                onClick={() => handleReduceSkill(SkillName.Agility)}
              >
                -
              </button>
            </div>
            <div className="col">
              {SkillName.Agility}: {characterAgility}
            </div>
            <div className="col">
              <button
                type="button"
                onClick={() => handleAddSkill(SkillName.Agility)}
              >
                +
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button
                type="button"
                onClick={() => handleReduceSkill(SkillName.Intellect)}
              >
                -
              </button>
            </div>
            <div className="col">
              {SkillName.Intellect}: {characterIntellect}
            </div>
            <div className="col">
              <button
                type="button"
                onClick={() => handleAddSkill(SkillName.Intellect)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };

  const handleReduceSkill = (skill: SkillName) => {
    switch (skill) {
      case SkillName.Strength:
        if (characterStrength) {
          props.reduceSkill(skill);
          setCharacterStrength((prev) => prev - 1);
          setSkillPoints((prev) => prev + 1);
        }
        break;

      case SkillName.Agility:
        if (characterAgility) {
          props.reduceSkill(skill);
          setCharacterAgility((prev) => prev - 1);
          setSkillPoints((prev) => prev + 1);
        }
        break;

      case SkillName.Intellect:
        if (characterIntellect) {
          props.reduceSkill(skill);
          setCharacterIntellect((prev) => prev - 1);
          setSkillPoints((prev) => prev + 1);
        }
        break;

      default:
        return;
    }
  };

  const handleAddSkill = (skill: SkillName) => {
    if (skillPoints) {
      props.addSkill(skill);
      switch (skill) {
        case SkillName.Strength: {
          setCharacterStrength((prev) => prev + 1);
          setSkillPoints((prev) => prev - 1);
          break;
        }
        case SkillName.Agility: {
          setCharacterAgility((prev) => prev + 1);
          setSkillPoints((prev) => prev - 1);
          break;
        }
        case SkillName.Intellect: {
          setCharacterIntellect((prev) => prev + 1);
          setSkillPoints((prev) => prev - 1);
          break;
        }
        default:
          return;
      }
    }
  };

  const handleReset = () => {
    setCharacterName("");
    setCharacterGender(GenderName.Male);

    setSkillPoints(10);
    setCharacterStrength(1);
    setCharacterAgility(1);
    setCharacterIntellect(1);
    props.resetSkills();
  };

  const handleSubmit = () => {
    props.setName(characterName);
    props.setGender(characterGender);

    navigate("/game");
  };

  return (
    <div className="background">
      <form onSubmit={handleSubmit}>
        <h1>Character Creation</h1>
        <div className="name m-2">
          <label>
            Name
            <br />
            <input
              type="text"
              value={characterName}
              onChange={(event) => {
                setCharacterName(event.target.value);
              }}
              required
            ></input>
          </label>
        </div>

        <div className="container p-1 text-center">
          <div className="row justify-content-md-center">
            <div className="col col-lg-2">
              <button
                type="button"
                className={
                  characterGender === GenderName.Male
                    ? "button-focused"
                    : undefined
                }
                onClick={() => setCharacterGender(GenderName.Male)}
              >
                Male
              </button>
            </div>
            <div className="col-md-auto"></div>
            <div className="col col-lg-2">
              <button
                type="button"
                className={
                  characterGender === GenderName.Female
                    ? "button-focused"
                    : undefined
                }
                onClick={() => setCharacterGender(GenderName.Female)}
              >
                Female
              </button>
            </div>
          </div>
        </div>
        {displaySkills()}
        <div className="m-1">
          <button type="button" onClick={handleReset}>
            Reset
          </button>
          <button type="submit" onSubmit={handleSubmit}>
            Create Character
          </button>
        </div>
      </form>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterCreation);

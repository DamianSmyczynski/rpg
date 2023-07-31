import "./CharacterCreation.css";
import { useState } from "react";
import { GenderName } from "../../enums/gender.enum";
import SkillSetup from "./components/SkillSetup";
import { SkillName } from "../../enums/skills.enum";
import { useNavigate } from "react-router-dom";
import { store } from "../../store/store";
import {
  resetSkills,
  setGender,
  setName,
} from "../../store/hero/heroActionCreators";

const CharacterCreation = () => {
  //stats states
  const [skillPoints, setSkillPoints] = useState(10);
  const [characterName, setCharacterName] = useState("");
  const [characterGender, setCharacterGender] = useState(GenderName.Male);

  const navigate = useNavigate();

  const addSkillPoint = () => {
    if (skillPoints > 0) {
      setSkillPoints(skillPoints - 1);
    }
  };

  const removeSkillPoint = () => {
    setSkillPoints(skillPoints + 1);
  };

  const reset = () => {
    setCharacterName("");
    setCharacterGender(GenderName.Male);
    setSkillPoints(10);
    store.dispatch(resetSkills());
  };

  const handleSubmit = () => {
    store.dispatch(setName(characterName));
    store.dispatch(setGender(characterGender));

    navigate("/game");
  };

  return (
    <div className="background">
      <form onSubmit={handleSubmit}>
        <h1>Character Creation</h1>
        <div className="name m-2">
          <label>
            Name:
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

        <h4>Available skill points: {skillPoints}</h4>
        <h5>Skills</h5>
        <SkillSetup
          name={SkillName.Strength}
          allSkillPoints={skillPoints}
          addSkillPoint={addSkillPoint}
          removeSkillPoint={removeSkillPoint}
        ></SkillSetup>
        <SkillSetup
          name={SkillName.Agility}
          allSkillPoints={skillPoints}
          addSkillPoint={addSkillPoint}
          removeSkillPoint={removeSkillPoint}
        ></SkillSetup>
        <SkillSetup
          name={SkillName.Intellect}
          allSkillPoints={skillPoints}
          addSkillPoint={addSkillPoint}
          removeSkillPoint={removeSkillPoint}
        ></SkillSetup>
        <div className="m-1">
          <button type="button" onClick={reset}>
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

export default CharacterCreation;

import { connect } from "react-redux";
import "./../Dialog.css";
import "./CombatDialog.css";
import Health from "../../../pages/game/components/lists/stats/components/health/Health";
import Energy from "../../../pages/game/components/lists/stats/components/energy/Energy";
import { closeDialog } from "../../../store/dialog/dialogActionCreators";
import { useState } from "react";
import { ExampleEnemy } from "./data/ExampleEnemy";
import { reduceArmorDurability } from "../../../store/characterEquipment/characterEquipmentActionCreators";
import { Item } from "../../../interfaces/items/Item";
import { Skill } from "../../../interfaces/Skill";
import { NamesOfBodyParts } from "./enums/NamesOfBodyParts.enum";
import CombatService from "./services/CombatService";
import { HitStateName } from "./enums/HitState.enum";
import { CombatData } from "./types/CombatDialogData.type";

const mapStateToProps = (state: any) => {
  return {
    hero: state.hero,
    heroEquipment: state.characterEquipment,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    reduceArmorDurability: (item: Item, durability: number) =>
      dispatch(reduceArmorDurability(item, durability)),
    closeDialog: () => dispatch(closeDialog()),
  };
};

const CombatDialog = (props: any) => {
  const combatService = new CombatService();

  const hero = props.hero;

  const [heroState, setHeroState] = useState({
    health: hero.health,
    energy: hero.energy,
  });

  const [enemyState, setEnemyState] = useState({
    health: ExampleEnemy.health,
    energy: ExampleEnemy.energy,
  });

  const [combatState, setCombatState] = useState("");
  const [combatHistory, setCombatHistory] = useState<string[]>([]);
  const [historyCounter, setHistoryCounter] = useState<number>(1);
  const [combatProcessing, setCombatProcessing] = useState<boolean>(false);

  const handleHeroAttack = (bodyPart: NamesOfBodyParts) => {
    const attackData: CombatData = combatService.handleAttack(
      historyCounter,
      hero,
      ExampleEnemy,
      bodyPart,
      ExampleEnemy.equipment
    );

    setCombatProcessing(true);
    setCombatState("Checking hit...");
    setTimeout(() => {
      setCombatHistory((prev) => [...prev, attackData.historyEntry]);
      if (attackData.hit) {
        setEnemyState((prev) => ({
          ...prev,
          health: prev.health - attackData.hitPoints,
        }));
      }
      attackData.hit
        ? setCombatState(HitStateName.HeroHit)
        : setCombatState(HitStateName.HeroMissed);
    }, 2000);

    setTimeout(() => {
      setCombatState("Enemy attacks...");
      handleEnemyAttack(combatService.randomBodyPart());
    }, 4000);

    setHistoryCounter((prev) => prev + 2);
  };

  const handleEnemyAttack = (bodyPart: NamesOfBodyParts) => {
    const attackData: CombatData = combatService.handleAttack(
      historyCounter + 1,
      ExampleEnemy,
      hero,
      bodyPart,
      props.heroEquipment
    );

    setTimeout(() => {
      setCombatHistory((prev) => [...prev, attackData.historyEntry]);
      if (attackData.hit) {
        setHeroState((prev) => ({
          ...prev,
          health: prev.health - attackData.hitPoints,
        }));
      }
      attackData.hit
        ? setCombatState(HitStateName.EnemyHit)
        : setCombatState(HitStateName.EnemyMissed);
      setCombatProcessing(false);
    }, 2000);
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

  const displayCombatHistory = () => {
    const history = combatHistory.slice(-5);
    return (
      <>
        {history.map((line) => {
          return <p key={history.indexOf(line)}>{line}</p>;
        })}
      </>
    );
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md list pt-5">
            <h4>{hero.name}</h4>
            <div className="combat-stats">
              <Health health={heroState.health} />
              <Energy energy={heroState.energy} />
              {displaySkills(hero.skills)}
            </div>
          </div>
          <div className="col list">
            <h4>Actions</h4>
            <button
              className="combat-action-button m-1"
              disabled={combatProcessing}
              onClick={() => {
                handleHeroAttack(NamesOfBodyParts.Head);
              }}
            >
              Attack your opponent's head &#40;
              {combatService.calculateHitChance(
                ExampleEnemy,
                NamesOfBodyParts.Head
              )}
              %&#41;
            </button>
            <button
              className="combat-action-button m-1"
              disabled={combatProcessing}
              onClick={() => {
                handleHeroAttack(NamesOfBodyParts.Chest);
              }}
            >
              Attack your opponent's chest &#40;
              {combatService.calculateHitChance(
                ExampleEnemy,
                NamesOfBodyParts.Chest
              )}
              %&#41;
            </button>
            <button
              className="combat-action-button m-1"
              disabled={combatProcessing}
              onClick={() => {
                handleHeroAttack(NamesOfBodyParts.Arms);
              }}
            >
              Attack your opponent's arms &#40;
              {combatService.calculateHitChance(
                ExampleEnemy,
                NamesOfBodyParts.Arms
              )}
              %&#41;
            </button>
            <button
              className="combat-action-button m-1"
              disabled={combatProcessing}
              onClick={() => {
                handleHeroAttack(NamesOfBodyParts.Legs);
              }}
            >
              Attack your opponent's legs &#40;
              {combatService.calculateHitChance(
                ExampleEnemy,
                NamesOfBodyParts.Legs
              )}
              %&#41;
            </button>
            <button
              className="combat-action-button m-1"
              disabled={combatProcessing}
              onClick={() => {
                handleHeroAttack(NamesOfBodyParts.Feet);
              }}
            >
              Attack your opponent's feet &#40;
              {combatService.calculateHitChance(
                ExampleEnemy,
                NamesOfBodyParts.Feet
              )}
              %&#41;
            </button>
            <div className="combat-state m-3">
              <h4>{combatState}</h4>
              {displayCombatHistory()}
            </div>
            <div className="m-5">
              <button onClick={() => props.closeDialog()}>Close dialog</button>
            </div>
          </div>
          <div className="col list pt-5">
            <h4>{ExampleEnemy.name}</h4>
            <div className="combat-stats">
              <Health health={enemyState.health} />
              <Energy energy={enemyState.energy} />
              {displaySkills(ExampleEnemy.skills)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CombatDialog);

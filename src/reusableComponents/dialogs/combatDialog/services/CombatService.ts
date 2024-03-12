import { SkillName } from "../../../../enums/skills.enum";
import { Skill } from "../../../../interfaces/Skill";
import { NamesOfBodyParts } from "../enums/NamesOfBodyParts.enum";
import { CombatData } from "../types/CombatDialogData.type";

class CombatService {
  randomBodyPart(): NamesOfBodyParts {
    const number: number = Math.floor(Math.random() * 5);
    switch (number) {
      case 0:
        return NamesOfBodyParts.Head;
      case 1:
        return NamesOfBodyParts.Chest;
      case 2:
        return NamesOfBodyParts.Arms;
      case 3:
        return NamesOfBodyParts.Legs;
      case 4:
        return NamesOfBodyParts.Feet;
      default:
        return NamesOfBodyParts.Chest;
    }
  }

  calculateHitChance(target: any, bodyPart: NamesOfBodyParts): number {
    const targetAgility: number = target.skills.find(
      (skill: Skill) => skill.name === SkillName.Agility
    ).value;

    switch (bodyPart) {
      case NamesOfBodyParts.Head:
        return Number((100 / (targetAgility * 4)).toFixed(1));
      case NamesOfBodyParts.Chest:
        return Number((100 / (targetAgility * 1)).toFixed(1));
      case NamesOfBodyParts.Arms:
        return Number((100 / (targetAgility * 5)).toFixed(1));
      case NamesOfBodyParts.Legs:
        return Number((100 / (targetAgility * 2)).toFixed(1));
      case NamesOfBodyParts.Feet:
        return Number((100 / (targetAgility * 3)).toFixed(1));
    }
  }

  handleAttack(
    historyCounter: number,
    attacker: any,
    target: any,
    bodyPart: NamesOfBodyParts,
    targetEquipment: any
  ): CombatData {
    const attackData: CombatData = {
      hit: false,
      critical: false,
      historyEntry: "",
      hitPoints: 0,
    };

    const attackerStrength: number = attacker.skills.find(
      (skill: Skill) => skill.name === SkillName.Strength
    ).value;

    const attackPoints: number = Math.floor(Math.random() * 101);

    if (attackPoints <= this.calculateHitChance(target, bodyPart)) {
      attackData.hit = true;
      attackData.hitPoints =
        attackerStrength * 0.5 -
        this.calculateDamageReductionByArmor(targetEquipment, bodyPart);
      console.log(attackData.hitPoints);

      const criticalPoints: number = Math.floor(Math.random() * 101);
      if (
        criticalPoints <=
        this.calculateCriticalHitChance(attackerStrength, bodyPart)
      ) {
        console.log(attackData.hitPoints);
        attackData.critical = true;
        attackData.hitPoints *= 1.5;
      }

      if (attackData.hitPoints <= 0) {
        attackData.hitPoints = 0;
      }
    }

    console.log(attackData.hitPoints);
    attackData.historyEntry = this.generateHistoryEntry(
      historyCounter,
      attacker.name,
      target.name,
      bodyPart,
      attackData
    );
    return attackData;
  }

  private calculateCriticalHitChance(
    attackerStrength: number,
    bodyPart: NamesOfBodyParts
  ): number {
    switch (bodyPart) {
      case NamesOfBodyParts.Head:
        return Number((100 / (attackerStrength * 4)).toFixed(1));
      case NamesOfBodyParts.Chest:
        return Number((100 / (attackerStrength * 1)).toFixed(1));
      case NamesOfBodyParts.Arms:
        return Number((100 / (attackerStrength * 5)).toFixed(1));
      case NamesOfBodyParts.Legs:
        return Number((100 / (attackerStrength * 2)).toFixed(1));
      case NamesOfBodyParts.Feet:
        return Number((100 / (attackerStrength * 3)).toFixed(1));
    }
  }

  private calculateDamageReductionByArmor(
    equipment: any,
    bodyPart: NamesOfBodyParts
  ): number {
    switch (bodyPart) {
      case NamesOfBodyParts.Head:
        const headArmor: number = equipment.head.armor;
        if (!headArmor) {
          return 0;
        }
        return headArmor * 0.8;
      case NamesOfBodyParts.Chest:
        const chestArmor: number = equipment.chest.armor;
        if (!chestArmor) {
          return 0;
        }
        return chestArmor * 0.7;
      case NamesOfBodyParts.Arms:
        const handsArmor: number = equipment.hands.armor;
        if (!handsArmor) {
          return 0;
        }
        return handsArmor * 0.2;
      case NamesOfBodyParts.Legs:
        const legsArmor: number = equipment.legs.armor;
        if (!legsArmor) {
          return 0;
        }
        return legsArmor * 0.5;
      case NamesOfBodyParts.Feet:
        const feetArmor: number = equipment.boots.armor;
        if (!feetArmor) {
          return 0;
        }
        return feetArmor * 0.4;
    }
  }

  private generateHistoryEntry(
    historyCounter: number,
    attackerName: string,
    targetName: string,
    bodyPart: NamesOfBodyParts,
    attackData: CombatData
  ): string {
    let message: string = historyCounter + ". ";

    if (attackData.hit) {
      message +=
        attackerName +
        " hit " +
        targetName +
        " in " +
        bodyPart +
        " for " +
        attackData.hitPoints.toFixed(1);
      if (attackData.critical) {
        return message + " (CRITICAL HIT)";
      }
      return message;
    }
    return message + attackerName + " missed!";
  }
}

export default CombatService;

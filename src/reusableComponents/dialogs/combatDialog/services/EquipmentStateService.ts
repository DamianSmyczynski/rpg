import { CharacterEquipmentState } from "../../../../type";

export const calculateArmorValue = (equipment: CharacterEquipmentState) => {
  let armorValue = 0;
  if (equipment.head?.durability) {
    armorValue += equipment.head.armor * (equipment.head.durability / 100);
  }

  if (equipment.chest?.durability) {
    armorValue += equipment.chest.armor * (equipment.chest.durability / 100);
  }

  if (equipment.hands?.durability) {
    armorValue += equipment.hands.armor * (equipment.hands.durability / 100);
  }

  if (equipment.legs?.durability) {
    armorValue += equipment.legs.armor * (equipment.legs.durability / 100);
  }

  if (equipment.boots?.durability) {
    armorValue += equipment.boots.armor * (equipment.boots.durability / 100);
  }

  return Number(armorValue.toFixed(2));
};

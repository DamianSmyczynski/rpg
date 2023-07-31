import { connect } from "react-redux";
import "./Dialogue.css";

const mapStateToProps = (state: any) => {
  return {
    gameLocation: state.location.gameLocation,
    place: state.location.place,
  };
};

// const handleSpecificSkills = (skills: Skill[]) => {
//   let specialMessage;
//   skills.forEach((skill) => {
//     if (skill.value >= 7 && skill.value < 11) {
//       switch (skill.name) {
//         case SkillName.Strength:
//           specialMessage = DialogBySkill.HighStrength;
//           break;
//         case SkillName.Agility:
//           specialMessage = DialogBySkill.HighAgility;
//           break;
//         case SkillName.Intellect:
//           specialMessage = DialogBySkill.HighIntellect;
//           break;
//       }
//     } else if (skill.value === 11) {
//       switch (skill.name) {
//         case SkillName.Strength:
//           specialMessage = DialogBySkill.ExtremelyHighStrength;
//           break;
//         case SkillName.Agility:
//           specialMessage = DialogBySkill.ExtremelyHighAgility;
//           break;
//         case SkillName.Intellect:
//           specialMessage = DialogBySkill.ExtremelyHighIntellect;
//           break;
//       }
//     }
//   });

//   return specialMessage;
// };

const Dialogue = (props: any) => {
  return (
    <div className="p-1">
      <h4>{props.gameLocation.name}</h4>
      <div className="place">{props.place.name.toUpperCase()}</div>
    </div>
  );
};

export default connect(mapStateToProps)(Dialogue);

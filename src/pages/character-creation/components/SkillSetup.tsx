// import { SkillName } from "../../../enums/skills.enum";
// import { addSkill, reduceSkill } from "../../../store/hero/heroActionCreators";
// import { store } from "../../../store/store";
// import "./SkillSetup.css";

// interface SkillSetupProps {
//   name: SkillName;
//   allSkillPoints: number;
//   addSkillPoint: () => void;
//   removeSkillPoint: () => void;
// }

// const SkillSetup = ({
//   name,
//   allSkillPoints,
//   addSkillPoint,
//   removeSkillPoint,
// }: SkillSetupProps) => {
//   const skill = store.getState().hero.skills.find((item) => {
//     return item.name === name;
//   });

//   const handleMinus = () => {
//     if (skill!.value > 1) {
//       removeSkillPoint();
//       store.dispatch(reduceSkill(name));
//     }
//   };

//   const handlePlus = () => {
//     if (allSkillPoints > 0) {
//       addSkillPoint();
//       store.dispatch(addSkill(name));
//     }
//   };

//   return (
//     <div>
//       <div className="container text-center">
//         <div className="row">
//           <div className="col">
//             <button type="button" onClick={handleMinus}>
//               -
//             </button>
//           </div>
//           <div className="col">
//             {skill!.name.charAt(0).toUpperCase() + skill!.name.slice(1)}:{" "}
//             {skill!.value}
//           </div>
//           <div className="col">
//             <button type="button" onClick={handlePlus}>
//               +
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SkillSetup;

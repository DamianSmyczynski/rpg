import { store } from "../../../../../../../store/store";
import "./SkillStat.css";

interface SkillStatProps {
  name: string;
}

const SkillStat = ({ name }: SkillStatProps) => {
  const skill = store.getState().hero.skills.find((item) => {
    return item.name === name;
  });

  return (
    <div className="skillstat">
      {skill?.name}: {skill?.value}
    </div>
  );
};

export default SkillStat;

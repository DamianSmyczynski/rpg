import { store } from "../../../../../../../store/store";

const Gender = () => {
  const gender = store.getState().hero.gender;
  return (
    <div className="gender">
      <h4>Gender</h4> {gender}
    </div>
  );
};

export default Gender;

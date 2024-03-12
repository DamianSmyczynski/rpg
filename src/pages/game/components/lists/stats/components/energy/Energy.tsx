import "./Energy.css";

const Energy = (props: any) => {
  return (
    <>
      <h5>Energy</h5>
      <div className="energy-bar">
        <div
          className="energy-bar-progress"
          style={{ width: `${props.energy}%` }}
        ></div>
      </div>
    </>
  );
};

export default Energy;

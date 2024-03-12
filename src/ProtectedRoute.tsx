import { connect } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const mapStateToProps = (state: any) => {
  return {
    heroName: state.hero.name,
  };
};

const ProtectedRoute = (props: any) => {
  const heroName = props.heroName;
  return heroName.length ? <Outlet /> : <Navigate to="/" />;
};

export default connect(mapStateToProps)(ProtectedRoute);

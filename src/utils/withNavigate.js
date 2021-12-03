import { useNavigate } from "react-router-dom";

function withRouteNavigate(Component) {
  return props => {
    const navigate = useNavigate();

    return <Component {...props} navigate={navigate} />;
  };
}

export default withRouteNavigate;

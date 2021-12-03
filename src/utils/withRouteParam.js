import { useParams } from "react-router-dom";

function withRouteParams(Component) {
  return props => {
    const params = useParams();

    return <Component {...props} params={params} />;
  };
}

export default withRouteParams;

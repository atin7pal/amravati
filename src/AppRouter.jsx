import { useRoutes } from "react-router-dom";
import routes from "./Routes.jsx";

function AppRouter() {
  const routing = useRoutes(routes);
  return routing;
}

export default AppRouter
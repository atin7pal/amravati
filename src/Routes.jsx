import { About } from "./pages/user/About";
import { Contact } from "./pages/user/Contact";
import { Home } from "./pages/user/Home";
import { NotFound } from "./pages/user/NotFound";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "*", element: <NotFound /> },
];

export default routes;

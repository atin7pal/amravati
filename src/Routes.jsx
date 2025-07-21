import Loader from "./components/Loader";
import { About } from "./pages/user/About";
import BlogPage from "./pages/user/Blogs";
import { Contact } from "./pages/user/Contact";
import { Home } from "./pages/user/Home";
import { NotFound } from "./pages/user/NotFound";
import Projects from "./pages/user/Projects";
import Projects2 from "./pages/user/Projects2";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  {path: "/blogs", element: <BlogPage/>},
  { path: "*", element: <NotFound /> },
  { path: "/projects", element: <Projects/> },
  { path: "/projects1", element: <Projects2/> },

];

export default routes;

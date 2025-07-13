import { About } from "./pages/user/About";
import BlogPage from "./pages/user/Blogs";
import { Contact } from "./pages/user/Contact";
import { Home } from "./pages/user/Home";
import { NotFound } from "./pages/user/NotFound";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  {path: "/blogs", element: <BlogPage/>},
  { path: "*", element: <NotFound /> },
];

export default routes;

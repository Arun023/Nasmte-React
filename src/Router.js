import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import About from "./components/About";
import Error from "./components/Error";
// const AppLayout = lazy(() => import("./AppLayout"));
// const About = lazy(() => import("./components/About"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default appRouter;

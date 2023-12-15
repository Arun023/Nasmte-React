import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import About from "./components/About";
import Error from "./components/Error";
import Search from "./components/Search";
import { StrictMode } from "react";
import ContactForm from "./components/ContactForm";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
// const AppLayout = lazy(() => import("./AppLayout"));
// const About = lazy(() => import("./components/About"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactForm />,
      },
      {
        path: "/restaurant/:id/:latitude?/:langitude?",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

export default appRouter;

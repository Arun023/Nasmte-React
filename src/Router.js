import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import AppLayout from "./AppLayout";
// import About from "./components/About";
import Error from "./components/Error";
import Search from "./components/Search";
// import ContactForm from "./components/ContactForm";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import CartPage from "./components/CartPage";
// const AppLayout = lazy(() => import("./AppLayout"));
const About = lazy(() => import("./components/About"));
const ContactForm = lazy(() => import("./components/ContactForm"));

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
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<div className="text-2xl">Hello</div>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<div className="text-2xl">Hello</div>}>
            <ContactForm />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:id/:latitude?/:langitude?",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

export default appRouter;

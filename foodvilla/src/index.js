import React, { lazy, Suspense } from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Body from "./components/Body";
import RestaruntMenu from "./components/RestatruntMenu";
import ProfileClass from "./components/ProfileClass";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShimmerUi from "./components/ShimmerUi";

const el = document.getElementById("root");
const root = ReactDom.createRoot(el);

const InstaMart = lazy(() => import("./components/InstaMart"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile", // relative path, it will assume that take parent path and add profile to it about/profile.
            element: <ProfileClass />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restarunt/:resId",
        element: <RestaruntMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<ShimmerUi />}>
            <InstaMart />
          </Suspense>
        ),
      },
    ],
  },
]);
root.render(<RouterProvider router={appRouter} />);

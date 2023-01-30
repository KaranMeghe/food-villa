import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Body from "./components/Body";
import RestaruntMenu from "./components/RestatruntMenu";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const el = document.getElementById("root");
const root = ReactDom.createRoot(el);

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
    ],
  },
]);
root.render(<RouterProvider router={appRouter} />);

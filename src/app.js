import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/AboutMe";
import Errors from "./components/Error";
import Contact from "./components/ContactMe";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    children: [
      {
        path: "/",
        element: <Body></Body>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
    errorElement: <Errors></Errors>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);

import React from "react";
import Auth from "../pages/Auth";
import Home from "../pages/Home";
import LogOut from "../pages/LogOut";
import { PathE } from "../utils/constants";
import { RouteI } from "../utils/interfaces";

const unsecuredRoutes: RouteI[] = [
  {
    path: PathE.Auth,
    element: Auth,
  },
  {
    path: PathE.Logout,
    element: LogOut,
  },
];
const securedRoutes: RouteI[] = [
  {
    path: PathE.Home,
    element: Home,
  },
  {
    path: PathE.Logout,
    element: LogOut,
  },
];
export { securedRoutes, unsecuredRoutes };

import React from "react";

import { securedRoutes, unsecuredRoutes } from "./routes";
import { RouteI } from "./utils/interfaces";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { Cookies, useCookies } from "react-cookie";
import { PathE } from "./utils/constants";
import ToastBox from "./components/ToastBox";
import NavigationBar from "./components/NavigationBar";
import NotFound from "./pages/NotFound";

const App = () => {

const cookies1=new Cookies()
  const { user } = useSelector((state: any) => state.user);
  const { toast } = useSelector((state: any) => state.toast);



  return (
    <>
      <ToastBox {...toast} />

      <BrowserRouter>
        {user && cookies1.get('token') && <NavigationBar />}
        <Routes>
          {cookies1.get('token')
            ? securedRoutes.map((routesItem: RouteI) => (
                <Route
                  key={routesItem.path}
                  path={routesItem.path}
                  element={<routesItem.element />}
                />
              ))
            : unsecuredRoutes.map((routesItem: RouteI) => (
                <Route
                  key={routesItem.path}
                  path={routesItem.path}
                  element={<routesItem.element />}
                />
              ))}
          {user && cookies1.get('token') && (
            <Route path="/" element={<Navigate replace to={PathE.Auth} />} />
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

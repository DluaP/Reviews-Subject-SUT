import React from "react";

import {
  useNavigate,
  BrowserRouter,
  Route,
  Routes,
  useRoutes,
} from "react-router-dom";
import Home from "./Pages/Home";
import { APP_ROUTER } from "./router";

function App() {
  const appRoute = useRoutes(APP_ROUTER);
  return appRoute;
}

const Wrapper = () => {
  return (
    <>
      <Home></Home>
      <App />
    </>
  );
};
export default Wrapper;

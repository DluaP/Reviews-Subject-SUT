import React from "react";

import { useNavigate,BrowserRouter,Route, Routes, useRoutes } from "react-router-dom";
import { APP_ROUTER } from "./router";

function App() {
  const appRoute = useRoutes(APP_ROUTER);
  return appRoute;
  
}


const Wrapper = () => {
  return (
              <App />  
  );
};
export default Wrapper;

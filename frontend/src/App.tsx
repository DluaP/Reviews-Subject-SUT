import React from "react";
import Home from "./components/Home";
import Login from "./components/login";
import CreatePost from "./components/create-post";
import Review from "./components/review";
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

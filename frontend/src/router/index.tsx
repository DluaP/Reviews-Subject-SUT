import { RouteObject } from "react-router-dom";
import CreatePost from "../components/create-post";
import Home from "../components/Home";
import Login from "../components/login";
import Profile from "../components/profile";
import Review from "../components/review";

export const APP_ROUTER: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/create-post",
    element: <CreatePost />,
  },
  {
    path: "/review",
    element: <Review />,
  },  {
    path: "/profile",
    element: <Profile />,
  },
];

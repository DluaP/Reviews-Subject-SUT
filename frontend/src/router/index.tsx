import { RouteObject } from "react-router-dom";
import CreatePost from "../components/create-post";
import Home from "../components/Home";
import Login from "../components/login";
import Review from "../components/review";

export const APP_ROUTER: RouteObject[] =[
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/create-post",
        element: <CreatePost/>,
    },
    {
        path: "/review",
        element: <Review/>,
    },
    {
        path: "/",
        element: <Home/>,
    },

]
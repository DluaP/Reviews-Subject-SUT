import { RouteObject } from "react-router-dom";
import AddCourse from "../components/add-course";
import CreatePost from "../components/create-post";
import EditPost from "../components/edit-post";
import EditProfile from "../components/edit-profile";
import Home from "../components/Home";
import Login from "../components/login";
import Profile from "../components/profile";
import ReportManagement from "../components/report-management";
import Review from "../components/review";
import ReviewsManagement from "../components/reviews-management";
import UserManagement from "../components/user-management";

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
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/edit-profile",
    element: <EditProfile />,
  },
  {
    path: "/user-management",
    element: <UserManagement />,
  },
  {
    path: "/edit-post",
    element: <EditPost />,
  },
  {
    path: "/report-management",
    element: <ReportManagement />,
  },
  {
    path: "/add-course",
    element: <AddCourse />,
  },
  {
    path:"/reviews-management",
    element: <ReviewsManagement/>
  }
];

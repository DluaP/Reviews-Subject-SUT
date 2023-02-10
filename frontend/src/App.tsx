import CreatePost from "./components/create-post";
import HomePage from "./components/Home";
import Review from "./components/review";
import NavHome from "./Pages/Home";
import Login from "../src/components/login";
import Profile from "./components/profile";
import EditProfile from "./components/edit-profile";
import UserManagement from "./components/user-management";
import EditPost from "./components/edit-post";
import ReportManagement from "./components/report-management";
import AddCourse from "./components/add-course";
import ReviewsManagement from "./components/reviews-management";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <>
      <NavHome></NavHome>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/create-post" element={<CreatePost />}></Route>
        <Route path="/review" element={<Review />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/edit-profile" element={<EditProfile />}></Route>
        <Route path="/user-management" element={<UserManagement />}></Route>
        <Route path="/edit-post" element={<EditPost />}></Route>
        <Route path="/report-management" element={<ReportManagement />}></Route>
        <Route path="/add-course" element={<AddCourse />}></Route>
        <Route
          path="/reviews-management"
          element={<ReviewsManagement />}
        ></Route>
      </Routes>
    </>
  );
};

export default App;

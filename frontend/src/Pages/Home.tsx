import { Affix, Button, Divider, Drawer, Form, Input, Row, Select } from "antd";
import form from "antd/es/form";
import { Col } from "antd/es/grid";
import { Image } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, NavLink, Route, Routes } from "react-router-dom";
import React from "react";
import HomePage from "../components/Home";
import { UserOutlined, MenuOutlined } from "@ant-design/icons";
import { useUser } from "../components/context/user";
import { log } from "console";
import { baseURL } from "../components/login";
import Logo from "../components/images/Logo.png";
import Student from "../components/images/Student.png"
import Admin from "../components/images/Admin.png"
import Teacher from "../components/images/Teacher.png"
// import {Logo} from 


type Props = {};

export function refreshPage() {
  window.location.reload();
}

// export function session(){
//   const navigate = useNavigate();
//   const { user, setUser, userDetail, setUserDetail } = useUser();

//   useEffect(() => {
//    (user !== undefined ? (""):(navigate("/login")))
//   }, []);
// }
function NavHome({}: Props) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [top, setTop] = useState(10);
  const { user, setUser, userDetail, setUserDetail } = useUser();

  const triger = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      {user === undefined ? (
        <Affix offsetTop={top}>
          <div className="text-right pr-12 pt-10 ">
            <button
              onClick={() => {
                navigate("/login");
              }}
            >
              <div className="text-center justify-center">
                <UserOutlined className=" text-2xl" />
              </div>
              <div className="text-center justify-center  pt-1"> login </div>
            </button>
          </div>
        </Affix>
      ) : (
        <Affix offsetTop={top}>
          <div>
            <div className="text-right pr-12 pt-10 ">
              <button onClick={triger}>
                <div className="text-center justify-center">
                  <MenuOutlined className=" text-2xl" />
                </div>
                <div className="text-center justify-center  pt-1"> เมนู </div>
              </button>
            </div>
          </div>
        </Affix>
      )}

      <div className="text-center ">
        <button onClick={() => navigate("/")}>
          <Image
            style={{ width: "100%", height: "100%" }}
            src={Logo}
            preview={false}
          />
        </button>
      </div>
      {userDetail?.status !== "admin" ? (
        <Drawer placement="right" onClose={triger} open={open}>
          <div className="text-center justify-center items-center">
            {userDetail?.status === "admin" ? (
              <Image
                src={Admin}
                preview={false}
                style={{ width: "100px", height: "100px" }}
                className="rounded-full text-center"
              />
            ) : userDetail?.status === "teacher" ? (
              <Image
                src={Teacher}
                preview={false}
                style={{ width: "100px", height: "100px" }}
                className="rounded-full text-center"
              />
            ) : (
              <Image
                src={Student}
                preview={false}
                style={{ width: "100px", height: "100px" }}
                className="rounded-full text-center"
              />
            )}

            <p className="m-2">
              {userDetail?.firstName} {userDetail?.lastName}
            </p>
          </div>
          <Divider className="my-1" />
          <div className="p-2">
            <button
              className="w-[100%] text-left"
              onClick={() => {
                navigate("/profile");
                triger();
              }}
            >
              โปรไฟล์
            </button>
          </div>
          <div className="p-2">
            <button
              className="w-[100%] text-left"
              onClick={() => {
                navigate("/create-post");
                triger();
              }}
            >
              เขียนรีวิว
            </button>
          </div>
          <div className="p-2">
            <button
              className="w-[100%] text-left"
              onClick={() => {
                navigate("/edit-profile");
                triger();
              }}
            >
              ตั้งค่าบัญชี
            </button>
          </div>
          <Divider className="my-1" />

          <div className="p-2">
            <button
              className="w-[100%] text-left"
              onClick={() => {
                navigate("/");
                refreshPage();
                triger();
                //   Logout();
              }}
            >
              ออกจากระบบ
            </button>
          </div>
        </Drawer>
      ) : (
        <Drawer placement="right" onClose={triger} open={open}>
          <div className="text-center justify-center items-center">
            {/* {userDetail?.status === "admin" ? (
              <Image
                src="./images/Admin.png"
                preview={false}
                style={{ width: "100px", height: "100px" }}
                className="rounded-full text-center"
              />
            ) : ("")}
            {userDetail?.status === "teacher" ? (
              <Image
                src="./images/Teacher.png"
                preview={false}
                style={{ width: "100px", height: "100px" }}
                className="rounded-full text-center"
              />
            ) : ("")}
           {userDetail?.status === "student" ? (
              <Image
                src="./images/Student.png"
                preview={false}
                style={{ width: "100px", height: "100px" }}
                className="rounded-full text-center"
              />
            ) : ("")} */}
            {userDetail?.status === "admin" ? (
              <Image
                src={Admin}
                preview={false}
                style={{ width: "100px", height: "100px" }}
                className="rounded-full text-center"
              />
            ) : userDetail?.status === "teacher" ? (
              <Image
                src={Teacher}
                preview={false}
                style={{ width: "100px", height: "100px" }}
                className="rounded-full text-center"
              />
            ) : (
              <Image
                src={Student}
                preview={false}
                style={{ width: "100px", height: "100px" }}
                className="rounded-full text-center"
              />
            )}

            <p className="m-2">{userDetail?.nickName}</p>
          </div>
          <Divider className="my-1" />
          <div className="p-2">
            <button
              className="w-[100%] text-left"
              onClick={() => {
                navigate("/profile");
                triger();
              }}
            >
              โปรไฟล์
            </button>
          </div>
          <div className="p-2">
            <button
              className="w-[100%] text-left"
              onClick={() => {
                navigate("/create-post");
                triger();
              }}
            >
              เขียนรีวิว
            </button>
          </div>
          <div className="p-2">
            <button
              className="w-[100%] text-left"
              onClick={() => {
                navigate("/edit-profile");
                triger();
              }}
            >
              ตั้งค่าบัญชี
            </button>
          </div>
          <Divider className="my-1" />
          <div className="p-2">
            <button
              className="w-[100%] text-left"
              onClick={() => {
                navigate("/add-course");
                triger();
              }}
            >
              เพิ่มรายวิชา
            </button>
          </div>
          <div className="p-2">
            <button
              className="w-[100%] text-left"
              onClick={() => {
                navigate("/user-management");
                triger();
              }}
            >
              จัดการผู้ใช้
            </button>
          </div>
          <div className="p-2">
            <button
              className="w-[100%] text-left"
              onClick={() => {
                navigate("/reviews-management");
                triger();
              }}
            >
              จัดการรีวิว
            </button>
          </div>
          <div className="p-2">
            <button
              className="w-[100%] text-left"
              onClick={() => {
                navigate("/report-management");
                triger();
              }}
            >
              จัดการรายงาน
            </button>
          </div>
          <div className="p-2">
            <button
              className="w-[100%] text-left"
              onClick={() => {
                navigate("/");
                refreshPage();
                triger();
                //   Logout();
              }}
            >
              ออกจากระบบ
            </button>
          </div>
        </Drawer>
      )}
    </React.Fragment>
  );
}

export default NavHome;

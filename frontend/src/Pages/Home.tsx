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
type Props = {};

function Home({}: Props) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [top, setTop] = useState(10);
  const { user, setUser , userDatail } = useUser();

  useEffect(() => {
    console.log(user);
  }, []);

  const triger = () => {
    setOpen(!open);
  };

  console.log(user, "55");

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
          <div onClick={triger}>
            <div className="text-right pr-12 pt-10 ">
              <button>
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
            src="./images/Logo.png"
            preview={false}
          />
        </button>
      </div>
      <Drawer placement="right" onClose={triger} open={open}>
        <div className="text-center justify-center items-center">
          <Image
            src="./images/test-men.jpg"
            preview={false}
            style={{ width: "100px", height: "100px" }}
            className="rounded-full text-center"
          />
          <p className="m-0">อ่อ ช่างแอ้</p>
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
              navigate("/login");
              triger();
            }}
          >
            เข้าสู่ระบบ
          </button>
        </div>
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
              navigate("/report-management");
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
              triger();
              //   Logout();
            }}
          >
            ออกจากระบบ
          </button>
        </div>
      </Drawer>
    </React.Fragment>
  );
}

export default Home;

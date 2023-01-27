import { Button, Divider, Drawer, Form, Input, Row, Select, Modal, Checkbox } from "antd";
import form from "antd/es/form";
import { Col } from "antd/es/grid";
import { Image } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { CheckboxValueType } from 'antd/es/checkbox/Group';



const UserManagement = () => {
  const navigate = useNavigate()
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onFinish = (e: any) => {
    console.log(e);
  };

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };


  return (
    <div className="w-[100%] h-[100vh] ">
     <div onClick={showDrawer}>
        <div className="text-right pr-12 pt-10 ">
          <button>
            <div className="text-center justify-center">
              <Image
                style={{ width: 30, height: 30 }}
                src="./images/human.png"
                preview={false}
              />
            </div>
            <div className="text-center justify-center  pt-1"> โปรไฟล์ </div>
          </button>
        </div>
      </div>
      <div className="text-center ">
      <button onClick={() => navigate("/")}>
        <Image
          style={{ width: "100%", height: "100%" }}
          src="./images/Logo.png"
          preview={false}
        />
        </button>
      </div>
      <div className="px-[40vh] pt-[50px] pb-[100px] text-center justify-center ">
        
      </div>
      <Drawer placement="right" onClose={onClose} open={open}>
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
        <div className="p-2"> <button className="w-[100%] text-left" onClick={() => navigate("/profile")}>โปรไฟล์</button> </div>
        <div className="p-2"> <button className="w-[100%] text-left" onClick={() => navigate("/edit-profile")}>ตั้งค่าบัญชี</button> </div>
        <Divider className="my-1" />
        <div className="p-2"> <button className="w-[100%] text-left" onClick={() => navigate("/login")}>เข้าสู่ระบบ </button> </div>
        <div className="p-2"> <button className="w-[100%] text-left" onClick={() => navigate("/user-management")}>จัดการผู้ใช้ </button> </div>
        <div className="p-2"> <button className="w-[100%] text-left" onClick={() => navigate("/")}>ออกจากระบบ </button> </div>
      </Drawer>
    </div>
  );
};
export default UserManagement;
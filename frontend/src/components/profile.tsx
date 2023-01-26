import { Button, Divider, Drawer, Form, Input, Row, Select } from "antd";
import form from "antd/es/form";
import { Col } from "antd/es/grid";
import { Image } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
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
  return (
    <div className="w-[100%] h-[100vh] ">
      <div onClick={showDrawer}>
        <div className="text-right pr-12 pt-10 ">
          <Image
            style={{ width: 30, height: 30 }}
            src="./images/human.png"
            preview={false}
          />
        </div>
        <div className="text-right pr-10 pt-1"> โปรไฟล์ </div>
      </div>
      <div className="text-center ">
        <Image
          style={{ width: "100%", height: "100%" }}
          src="./images/Logo.png"
          preview={false}
        />
      </div>
      <div className="px-[40vh] pt-[50px] pb-[100px] text-center justify-center ">
        <Row>
          <Col span={8}>
            <div className="border-2 border-[#F9ECCE] rounded-lg">
            <Row gutter={[12, 12]} className="p-6">
              <Col span={24}>
                <Image
                  src="./images/test-men.jpg"
                  preview={false}
                  style={{ width: "100px", height: "100px" }}
                  className="rounded-full text-center"
                />
              </Col>
              <Col span={24}>อ้อ ช่างแอ้</Col>
              <div className=" text-left">
              <Col span={24}>
                <span>#โสด</span><br/>
                <span>#หล่อ</span><br/>
                <span>#ตี๋</span>
              </Col>
              <Col span={24} className="mt-4">Facebook : อ้อ ช่างแอ้</Col>
              <Col span={24}>Instagram : O_Chang_Ae</Col>
              <Col span={24}>Email : Ohchangair@gmail.com</Col>
              </div>
            </Row>
            </div>
          </Col>
          <Col span={16}>xxxx</Col>
        </Row>
      </div>
      <Drawer placement="right" onClose={onClose} open={open}>
        <Image
          src="./images/test-men.jpg"
          preview={false}
          style={{ width: "100px", height: "100px" }}
          className="rounded-full text-center"
        />
        <p className="m-0">อ่อ ช่างแอ้</p>
        <Divider className="my-1" />
        <p>โปรไฟล์</p>
        <p>ตั้งค่าบัญชี</p>
        <Divider className="my-1" />
        <p>ออกจากระบบ</p>
      </Drawer>
    </div>
  );
};
export default Profile;

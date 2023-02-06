import {
  Affix,
  Button,
  Divider,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Typography,
} from "antd";
import form from "antd/es/form";
import { Col } from "antd/es/grid";
import { Image } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";
import { baseURL } from "./login";

const EditProfile = () => {
  const navigate = useNavigate();
  const [top, setTop] = useState(10);
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
      <Affix offsetTop={top}>
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
      </Affix>
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
        <Form layout="vertical" onFinish={onFinish}>
          <Row
            gutter={[12, 12]}
            className="border-2 border-[#F9ECCE] rounded-lg "
          >
            <Col span={12} className="p-4">
              <div className="border-2 border-[#F9ECCE] rounded-lg text-left">
                <Row gutter={[12, 0]} className="p-2">
                  <Col span={24}>
                    <div className="text-xl">จัดการโปรไฟล์</div>
                  </Col>
                  <Col span={6}>
                    <Image
                      src="./images/test-men.jpg"
                      preview={false}
                      style={{ width: "100%" }}
                      className="rounded-full text-center"
                    />
                    <Button className="w-[100%]">อัพโหลดรูปภาพ</Button>
                  </Col>
                  <Col span={18}>
                    <Form.Item name="nickname" label="ชื่อเล่น">
                      <Input placeholder="ชื่อเล่น" />
                    </Form.Item>
                    <Form.Item name="vio" label="เกี่ยวกับฉัน">
                      <TextArea rows={2} />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item name="facebok" label="facebok">
                      <Input placeholder="facebok" />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item name="ig" label="instagram">
                      <Input placeholder="instagram" />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item name="email" label="email">
                      <Input placeholder="email" />
                    </Form.Item>
                  </Col>
                </Row>
              </div>
            </Col>
            {/* ข้อมูลส่วนนี้ต้องทำเป็น for loop*/}
            <Col span={12} className="p-4">
              <div className="border-2 border-[#F9ECCE] rounded-lg text-left">
                <Row gutter={[12, 0]} className="p-2">
                  <Col span={24}>
                    <div className="text-xl">จัดการบัญชี</div>
                  </Col>
                  <Col span={24}>
                    <Form.Item name="username" label="Username">
                      <Input placeholder="Username" />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item name="firstname" label="Firstname">
                      <Input placeholder="Firstname" />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item name="surname" label="Surname">
                      <Input placeholder="Surname" />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item name="password" label="Password">
                      <Input placeholder="Password" type="password" />
                    </Form.Item>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col span={9}></Col>
            <Col span={3}>
              <Button htmlType="submit" className="w-[100%]">
                บันทึก
              </Button>
            </Col>
            <Col span={3}>
              <Button className="w-[100%]" onClick={() => navigate("/")}>
                Back
              </Button>
            </Col>
            <Col span={9}></Col>
          </Row>
        </Form>
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
        <div className="p-2">
          {" "}
          <button
            className="w-[100%] text-left"
            onClick={() => navigate("/profile")}
          >
            โปรไฟล์
          </button>{" "}
        </div>
        <div className="p-2"> <button className="w-[100%] text-left" onClick={() => navigate("/create-post")}>เขียนรีวิว</button> </div>
        <div className="p-2">
          {" "}
          <button
            className="w-[100%] text-left"
            onClick={() => navigate("/edit-profile")}
          >
            ตั้งค่าบัญชี
          </button>{" "}
        </div>
        <Divider className="my-1" />
        <div className="p-2">
          {" "}
          <button
            className="w-[100%] text-left"
            onClick={() => navigate("/login")}
          >
            เข้าสู่ระบบ{" "}
          </button>{" "}
        </div>
        <div className="p-2">
          {" "}
          <button
            className="w-[100%] text-left"
            onClick={() => navigate("/user-management")}
          >
            จัดการผู้ใช้{" "}
          </button>{" "}
        </div>
        <div className="p-2">
          {" "}
          <button
            className="w-[100%] text-left"
            onClick={() => navigate("/report-management")}
          >
            จัดการรายงาน{" "}
          </button>{" "}
        </div>
        <div className="p-2">
          {" "}
          <button className="w-[100%] text-left" onClick={() => navigate("/")}>
            ออกจากระบบ{" "}
          </button>{" "}
        </div>
      </Drawer>
    </div>
  );
};
export default EditProfile;

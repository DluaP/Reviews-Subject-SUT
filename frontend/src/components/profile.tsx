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

const Profile = () => {
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
        <Row gutter={[12, 12]}>
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
                    <span>#โสด</span>
                    <br />
                    <span>#หล่อ</span>
                    <br />
                    <span>#ตี๋</span>
                  </Col>
                  <Col span={24} className="pt-4">
                    Facebook : อ้อ ช่างแอ้
                  </Col>
                  <Col span={24}>Instagram : O_Chang_Ae</Col>
                  <Col span={24}>Email : Ohchangair@gmail.com</Col>
                </div>
              </Row>
            </div>
          </Col>
          {/* ข้อมูลส่วนนี้ต้องทำเป็น for loop*/}
          <Col span={16}>
            <Row
              className=" text-left border-2 p-4 border-[#F9ECCE] rounded-lg"
              gutter={[12, 12]}
            >
              <Col span={24}>
                <span className="!text-lx">รหัสวิชา 21720 วิชาแปลกๆ</span>
              </Col>
              <Col span={24}>
                <Typography.Text>
                  ***เทคนิคการเรียนให้ไม่ F 1.อ่านล่วงหน้าใน e-learning ไปให้หมด
                  (ชีทมันจะมีให้โหลดใน e-learning 1) แล้วอ่านบ่อยๆ จนแบบจำได้อะ
                  เพราะว่าข้อสอบมันออกตามแบบฝึกหัดใน e-learning เลย
                </Typography.Text>
                <Divider className="m-1" />
              </Col>
              <Col span={3}>
                <Button
                  className="w-[100%] "
                  onClick={() => {
                    navigate("/edit-post");
                  }}
                >
                  แก้ไข
                </Button>
              </Col>
              <Col span={3}>
                <Button className="w-[100%] ">ลบ</Button>
              </Col>
            </Row>

            <Row
              className=" text-left border-2 p-4 border-[#F9ECCE] mt-2 rounded-lg"
              gutter={[12, 12]}
            >
              <Col span={24}>
                <span className="!text-lx">รหัสวิชา 21721 วิชาแปลกๆ</span>
              </Col>
              <Col span={24}>
                <Typography.Text>
                  ***เทคนิคการเรียนให้ไม่ F 1.อ่านล่วงหน้าใน e-learning ไปให้หมด
                  (ชีทมันจะมีให้โหลดใน e-learning 1) แล้วอ่านบ่อยๆ จนแบบจำได้อะ
                  เพราะว่าข้อสอบมันออกตามแบบฝึกหัดใน e-learning เลย
                </Typography.Text>
                <Divider className="m-1" />
              </Col>
              <Col span={3}>
                <Button
                  className="w-[100%] "
                  onClick={() => {
                    navigate("/edit-post");
                  }}
                >
                  แก้ไข
                </Button>
              </Col>
              <Col span={3}>
                <Button className="w-[100%] ">ลบ</Button>
              </Col>
            </Row>

            <Row
              className=" text-left border-2 p-4 border-[#F9ECCE] mt-2 rounded-lg"
              gutter={[12, 12]}
            >
              <Col span={24}>
                <span className="!text-lx">รหัสวิชา 21721 วิชาแปลกๆ</span>
              </Col>
              <Col span={24}>
                <Typography.Text>
                  ***เทคนิคการเรียนให้ไม่ F 1.อ่านล่วงหน้าใน e-learning ไปให้หมด
                  (ชีทมันจะมีให้โหลดใน e-learning 1) แล้วอ่านบ่อยๆ จนแบบจำได้อะ
                  เพราะว่าข้อสอบมันออกตามแบบฝึกหัดใน e-learning เลย
                </Typography.Text>
                <Divider className="m-1" />
              </Col>
              <Col span={3}>
                <Button
                  className="w-[100%] "
                  onClick={() => {
                    navigate("/edit-post");
                  }}
                >
                  แก้ไข
                </Button>
              </Col>
              <Col span={3}>
                <Button className="w-[100%] ">ลบ</Button>
              </Col>
            </Row>
          </Col>
        </Row>
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
export default Profile;

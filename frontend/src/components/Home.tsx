import { Button, Divider, Drawer, Form, Input, Row, Select } from "antd";
import form from "antd/es/form";
import { Col } from "antd/es/grid";
import { Image } from "antd";
import { useState } from "react";
import { useNavigate, NavLink, Route, Routes } from "react-router-dom";
import CreatePost from "./create-post";

const Home = () => {
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
    <div className="w-[100%]  ">
      <div onClick={showDrawer}>
        <div className="text-right pr-12 pt-10 ">
          <button>
            <div className="text-center justify-center">
              <Image
                style={{ width: 30, height: 30 }}
                src="./images/human.png"
                preview={false}
                onClick={() => navigate("/")}
              />
            </div>
            <div className="text-center justify-center  pt-1"> โปรไฟล์ </div>
          </button>
        </div>
      </div>
      <div className="text-center ">
        <Image
          style={{ width: "100%", height: "100%" }}
          src="./images/Logo.png"
          preview={false}
        />
      </div>
      <div className="px-[40vh] pt-[50px] pb-[100px] text-center justify-center ">
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Row gutter={[12, 6]}>
            <Col span={6}>
              <Form.Item name="1" label="ชื่อวิชา">
                <Input placeholder="ชื่อวิชา" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="2" label="รหัสวิชา">
                <Input placeholder="รหัสวิชา" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="3" label="ปี">
                <Input placeholder="ปี" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="4" label="เรียงตาม">
                <Select defaultValue={"all"}>
                  <Select.Option value="all">ทั้งหมด</Select.Option>
                  <Select.Option value="like">ยอดไลก์</Select.Option>
                  <Select.Option value="review">ยอดวิว</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={3}>
              <Button
                htmlType="submit"
                className="w-[100%] text-[white] bg-[#46B072] "
              >
                ค้นหา
              </Button>
            </Col>
            <Col span={3}>
              <Button
                className="w-[100%] "
                onClick={() => {
                  form.resetFields();
                }}
              >
                ล้างข้อมูล
              </Button>
            </Col>
            <Col span={3}>
              <Button
                className="w-[100%] bg-[#FECC73]"
                onClick={() => navigate("/create-post")}
              >
                เขียนรีวิว
              </Button>
            </Col>
            <Col span={17}></Col>
          </Row>
        </Form>

        <Row gutter={[12, 12]} className="pt-6 ">
          <Col span={7}>
            <Button
              className="w-[100%] h-[100px] bg-[#F9ECCE]"
              onClick={() => navigate("/review")}
            >
              202324 ไทยศึกษาเชิงพหุวัฒนธรรม
            </Button>
          </Col>
          <Col span={1} />
          <Col span={8}>
            <Button className="w-[100%] h-[100px] bg-[#F9ECCE]">
              202241 กฎหมายในชีวิตประจำวัน
            </Button>
          </Col>
          <Col span={1} />
          <Col span={7}>
            <Button className="w-[100%] h-[100px] bg-[#F9ECCE]">
              202175 ศิลปวิจักษ์
            </Button>
          </Col>
        </Row>
        <Row gutter={[12, 12]} className="mt-10">
          <Col span={7}>
            <Button className="w-[100%] h-[100px] bg-[#F9ECCE]">
              202111 ภาษาไทยเพื่อการสื่อสาร
            </Button>
          </Col>
          <Col span={1} />
          <Col span={8}>
            <Button className="w-[100%] h-[100px] bg-[#F9ECCE]">
              202331 อาเซียนศึกษา
            </Button>
          </Col>
          <Col span={1} />
          <Col span={7}>
            <Button className="w-[100%] h-[100px] bg-[#F9ECCE]">
              202181 สุขภาพองค์รวม
            </Button>
          </Col>

          {/* <Col span={7} className="bg-[#F9ECCE] h-[100px] rounded-md " >
                27749 วิชาน่ารัก sdfsdfdsfdsf
          </Col>
          <Col span={1} />
          <Col span={8} className="bg-[#F9ECCE] h-[100px] rounded-md">
            27743 รักนะจุ๊บๆ
          </Col>
          <Col span={1} />
          <Col span={7} className="bg-[#F9ECCE] h-[100px] rounded-md">
            8841 ยังไงๆ
          </Col>
        </Row>
        <Row gutter={[12, 12]} className="mt-10">
          <Col span={7} className="bg-[#F9ECCE] h-[100px] rounded-md">
            27749 วิชาน่ารัก
          </Col>
          <Col span={1} />
          <Col span={8} className="bg-[#F9ECCE] h-[100px] rounded-md">
            27743 รักนะจุ๊บๆ
          </Col>
          <Col span={1} />
          <Col span={7} className="bg-[#F9ECCE] h-[100px] rounded-md">
            8841 ยังไงๆ
          </Col> */}
        </Row>
        <Row gutter={[12, 12]} className="mt-10">
          <Col span={7}>
            <Button className="w-[100%] h-[100px] bg-[#F9ECCE]">
              202203 มนุษย์กับสังคมและสิ่งแวดล้อม
            </Button>
          </Col>
          <Col span={1} />
          <Col span={8}>
            <Button className="w-[100%] h-[100px] bg-[#F9ECCE]">
              214346 การบัญชีพื้นฐานเพื่อการจัดการ
            </Button>
          </Col>
          <Col span={1} />
          <Col span={7}>
            <Button className="w-[100%] h-[100px] bg-[#F9ECCE]">
              213305 ภาษาอังกฤษเพื่อการทำงาน
            </Button>
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
        <div className="p-2"> <button className="w-[100%] text-left" onClick={() => navigate("/profile")}>โปรไฟล์</button> </div>
        <div className="p-2"> <button className="w-[100%] text-left">ตั้งค่าบัญชี</button> </div>
        <Divider className="my-1" />
        <p>ออกจากระบบ</p>
      </Drawer>
    </div>
  );
};
export default Home;

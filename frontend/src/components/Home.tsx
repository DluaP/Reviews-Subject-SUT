import { Affix, Button, Divider, Drawer, Form, Input, Row, Select } from "antd";
import form from "antd/es/form";
import { Col } from "antd/es/grid";
import { Image } from "antd";
import { useState } from "react";
import { useNavigate, NavLink, Route, Routes } from "react-router-dom";
import CreatePost from "./create-post";
import { Logout } from "./context/auth";

const HomePage = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = (e: any) => {
    console.log(e);
  };

  return (
    <div className="w-[100%]  ">
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

            <Col span={3}>
              <Button
                htmlType="submit"
                className="w-[100%] text-[white] bg-[#46B072] top-7"
              >
                ค้นหา
              </Button>
            </Col>
            <Col span={3}>
              <Button
                className="w-[100%] top-7 "
                onClick={() => {
                  form.resetFields();
                }}
              >
                ล้างข้อมูล
              </Button>
            </Col>

            <Col span={3}>
              <Button
                className="w-[100%] bg-[#FECC73] top-7"
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
    </div>
  );
};
export default HomePage;

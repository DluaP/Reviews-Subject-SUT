import { Affix, Button, Divider, Drawer, Form, Input, Row, Select } from "antd";
import form from "antd/es/form";
import { Col } from "antd/es/grid";
import { Image } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, NavLink, Route, Routes } from "react-router-dom";
import CreatePost from "./create-post";
import { Logout } from "./context/auth";
import { useReview } from "./context/review";
import { baseURL } from "./login";

const mockdata = [
  { id: 1, course_id: "204561", course_name: "vvvvvvvv" },
  { id: 2, course_id: "456054", course_name: "aaaaaaaaa" },
  { id: 3, course_id: "54664", course_name: "wwwwwwwww" },
  { id: 3, course_id: "54664", course_name: "wwwwwwwww" },
  { id: 3, course_id: "54664", course_name: "wwwwwwwww" },
  { id: 3, course_id: "54664", course_name: "wwwwwwwww" },
  { id: 3, course_id: "54664", course_name: "wwwwwwwww" },
  { id: 3, course_id: "54664", course_name: "wwwwwwwww" },
  { id: 3, course_id: "54664", course_name: "wwwwwwwww" },
];

const HomePage = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [dataCourse, setDataCourse] = useState([]);
  const { setCouresId } = useReview();
  
  const getData = () => {
    baseURL.get("/course").then((e: any) => {
      setDataCourse(e.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const fetchData = () => {
    baseURL.get("/course").then((res) => {
      setDataCourse(res.data);
    });
  };
  const onFinish = (e: any) => {
    console.log(e);
  };

  return (
    <div className="w-[100%]  ">
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

        <Row gutter={[20, 20]} className="">
          {dataCourse?.map((item: any, index: any) => (
            <Col span={8}>
              <a
                onClick={() => {
                  navigate("/review");
                  setCouresId(item?.id);
                }}
              >
                <div className="bg-[#F9ECCE] p-10 rounded-md">
                  {item?.course_id} {item?.course_name}
                </div>
              </a>
            </Col>
          ))}
          {/* <Col span={7}>
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
          </Col> */}
        </Row>
      </div>
    </div>
  );
};
export default HomePage;

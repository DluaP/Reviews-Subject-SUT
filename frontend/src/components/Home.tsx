import { Affix, Button, Divider, Drawer, Form, Input, Row, Select ,notification} from "antd";
import { Col } from "antd/es/grid";
import { Image } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, NavLink, Route, Routes } from "react-router-dom";

import { useReview } from "./context/review";
import { baseURL } from "./login";
import { useUser } from "./context/user";

const HomePage = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [dataCourse, setDataCourse] = useState([]);
  const { setCouresId } = useReview();
  const { userDatail, user } = useUser();

  const openNotification = () => {
    notification.open({
      message: 'คำเเตือน!!!',
      description:
        'โปรดเข้าสู่ระบบก่อนทำการเขียนรีวิว',
    });
  };
  
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    baseURL.get("/course").then((e: any) => {
      setDataCourse(e.data);
    });
  };

  const onSearch = (e: any) => {
    if (!e.course_id && !e.course_name) {
      getData();
    } else {
      console.log("e",e)
      baseURL
        .get(
          `/course?course_id=${e.course_id}&course_name=${e.course_name}`
        )
        .then((res) => {
          setDataCourse(res.data);
        });
    }
  };

  return (
    <div className="w-[100%]  ">
      <div className="px-[40vh] pt-[50px] pb-[100px] text-center justify-center ">
        <Form form={form} layout="vertical" onFinish={onSearch}>
          <Row gutter={[12, 6]}>
            <Col span={6}>
              <Form.Item name="course_id" label="ชื่อวิชา">
                <Input placeholder="ชื่อวิชา" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="course_name" label="รหัสวิชา">
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
                  getData();
                }}
              >
                ล้างข้อมูล
              </Button>
            </Col>

            <Col span={3}>
              <Button
                className="w-[100%] bg-[#FECC73] top-7"
                onClick={() => {
                  {user !== undefined ? (navigate("/create-post")):(openNotification())}
                  }}
              >
                เขียนรีวิว
              </Button>
            </Col>
            <Col span={17}></Col>
          </Row>
        </Form>

        <Row gutter={[20, 20]} className="">
          {dataCourse?.map((item: any, index: any) => (
            <Col span={8} >
              <a
                onClick={() => {
                  navigate("/review");
                  setCouresId(item?.id);
                }}
              >
                <div className="bg-[#F9ECCE] p-10 rounded-md !h-[110px]">
                  {item?.course_id} {item?.course_name}
                </div>
              </a>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};
export default HomePage;

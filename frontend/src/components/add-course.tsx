import { Col, Form, Row, Image, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
  const navigate = useNavigate();
  const onFinish = () => {};

  return (
    <div className="w-[100%] h-[100vh] ">
   
      <div className="px-[40vh] pt-[50px] pb-[100px] text-center justify-center ">
        <Form layout="vertical" onFinish={onFinish}>
          <Row
            gutter={[12, 12]}
            className="border-2 border-[#F9ECCE] rounded-lg "
          >
            <Col span={24} className="p-4">
            <div className="text-xl text-left mb-4" >เพิ่มวิชา</div>
              <div className="border-2 border-[#F9ECCE] rounded-lg text-left p-4">
                <Col span={24}>
                  <Form.Item name="course_id" label="รหัสวิชา">
                    <Input placeholder="รหัสวิชา" />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item name="course_name" label="ชื่อวิชา">
                    <Input placeholder="ชื่อวิชา" />
                  </Form.Item>
                </Col>
                <Col span={24} className="justify-end text-right ">
                  <Button htmlType="submit" className="w-[10%] mr-2">เพิ่ม</Button>
                  <Button onClick={() => navigate("/")} className="w-[10%]">ย้อนกลับ</Button>
                </Col>
              </div>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default AddCourse;

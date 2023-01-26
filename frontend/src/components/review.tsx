import { Button, Divider, Drawer, Form, Input, Row, Select } from "antd";
import form from "antd/es/form";
import { Col } from "antd/es/grid";
import { Image } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Review = () => {
    const navigate = useNavigate()
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
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Row gutter={[12, 6]}>
           
            <Col span={6}>
              <Form.Item name="3" label="ปี">
                <Input placeholder="ปี" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="4" label="เรียงตาม">
              <Select  defaultValue={"all"}>
                    <Select.Option value="all">ทั้งหมด</Select.Option>
                    <Select.Option value="like">ยอดไลก์</Select.Option>
                    <Select.Option value="review">ยอดวิว</Select.Option>
                  </Select>
              </Form.Item>
            </Col>
            <Col span={3}>
              <Button htmlType="submit" className="w-[100%] text-[white] bg-[#46B072] top-7" >
                ค้นหา
              </Button>
            </Col>
            <Col span={3}>
              <Button className="w-[100%] top-7 "onClick={() => {form.resetFields();}}>
                ล้างข้อมูล
              </Button>
            </Col>
            <Col span={3}>
              <Button className="w-[100%] top-7 "onClick={() => {navigate("/")}}>
                ย้อนกลับ
              </Button>
            </Col>
         
          </Row>
        </Form>

        <Row gutter={[12, 12]} className ="pt-6 " >
        
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
export default Review;

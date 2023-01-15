import { Button, Divider, Drawer, Form, Input, Row } from "antd";
import form from "antd/es/form";
import { Col } from "antd/es/grid";
import { Image } from "antd";
import { useState } from "react";

const Home = () => {
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
      <div className="px-[30vh] py-[100px] text-center justify-center ">
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Row gutter={[12, 6]}>
            <Col span={6}>
              <Form.Item name="1" label="ชื่อวิชา">
                <Input placeholder="input placeholder" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="2" label="รหัสวิชา">
                <Input placeholder="input placeholder" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="3" label="ปี">
                <Input placeholder="input placeholder" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="4" label="รูปแบบ">
                <Input placeholder="input placeholder" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[12, 12]}>
            <Col span={3}>
              <Button htmlType="submit" className="w-[100%]">
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
            <Col span={20}></Col>
          </Row>
        </Form>
        <Row gutter={[12, 12]}>
          <Col span={7} className="bg-[#F9ECCE] h-[100px] rounded-md">
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
          </Col>
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
export default Home;

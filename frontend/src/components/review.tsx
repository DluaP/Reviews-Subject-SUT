import {
  Button,
  Divider,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Modal,
  Checkbox,
  Affix,
} from "antd";
import form from "antd/es/form";
import { Col } from "antd/es/grid";
import { Image } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { CheckboxValueType } from "antd/es/checkbox/Group";

const Review = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [top, setTop] = useState(10);
  const [isModalOpen, setIsModalOpen] = useState(false);  
  const [open, setOpen] = useState(false);
  
  const onFinish = (e: any) => {
    console.log(e);
  };
  const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log("checked = ", checkedValues);
  };


  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
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
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Row gutter={[12, 6]}>
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
                className="w-[100%] top-7 "
                onClick={() => {
                  navigate("/");
                }}
              >
                ย้อนกลับ
              </Button>
            </Col>
          </Row>
        </Form>

        <Row gutter={[12, 12]} className="pt-6 ">
          <Col span={24} className="text-left text-4xl">
            ไทยศึกษาเชิงพหุวัฒนธรรม
            <br />
          </Col>

          <Col
            span={24}
            className="bg-[#F9ECCE] w-[100%]  rounded-md !text-left"
          >
            <div className="p-4">
              ไทยศึกษาเชิงพหุวัฒนธรรมเรียนอะไรบ้าง ? <br />
              <br />
              <ul>
                <li> - ส่วนใหญ่จะเรียนเรื่องการเมืองในประเทศ (แบบดุดัน)</li>
                <li> - พหุลักษณ์ของสังคมวัฒนธรรมไทยและความเป็นพลเมือง</li>
                <li>
                  {" "}
                  -
                  ปรากฏการณ์ที่เกิดขึ้นในสังคมมาวิเคราะห์วิจารณ์ด้วยหลักการทางวิชาการได้
                </li>
                <li>
                  {" "}
                  - การวิพากษ์วิจารณ์สังคม
                  และวัฒนธรรมที่มีหลักคิดที่เป็นเหตุและผล{" "}
                </li>
                <li> - การตั้งคำถามให้คิดเกี่ยวกับสังคมในปัจจุบัน </li>
              </ul>
              <br />
              คำเตือน !! ต้องเข้าเรียนด้วยนะ เพราะมีหลายคนน้ำตาตกมาแล้วววว{" "}
              <br />
              อาจารย์ ผู้สอน อ.ปราโมทย์ ภักดีณรงค์
              <br />
              <br />
              โดย: บักพีเอวสปริง
              <Divider className="my-1" />
              <Button className="w-[10%] text-[black] bg-[#FED584] ">
                ดูรีวิวนี้
              </Button>
              <Button
                className="w-[10%] text-[black] bg-[#FED584] absolute bottom-4 right-4"
                onClick={showModal}
              >
                รายงาน
              </Button>
            </div>
          </Col>
          <Col
            span={24}
            className="bg-[#F9ECCE] w-[100%]  rounded-md !text-left"
          >
            <div className="p-4">
              ไทยศึกษาเชิงพหุวัฒนธรรมเรียนอะไรบ้าง ? <br />
              <br />
              <ul>
                <li> - ส่วนใหญ่จะเรียนเรื่องการเมืองในประเทศ (แบบดุดัน)</li>
                <li> - พหุลักษณ์ของสังคมวัฒนธรรมไทยและความเป็นพลเมือง</li>
                <li>
                  -
                  ปรากฏการณ์ที่เกิดขึ้นในสังคมมาวิเคราะห์วิจารณ์ด้วยหลักการทางวิชาการได้
                </li>
                <li>
  
                  - การวิพากษ์วิจารณ์สังคม
                  และวัฒนธรรมที่มีหลักคิดที่เป็นเหตุและผล
                </li>
                <li> - การตั้งคำถามให้คิดเกี่ยวกับสังคมในปัจจุบัน </li>
              </ul>
              <br />
              คำเตือน !! ต้องเข้าเรียนด้วยนะ เพราะมีหลายคนน้ำตาตกมาแล้วววว
              <br />
              อาจารย์ ผู้สอน อ.ปราโมทย์ ภักดีณรงค์
              <br />
              <br />
              โดย: บักพีเอวสปริง
              <Divider className="my-1" />
              <Button className="w-[10%] text-[black] bg-[#FED584] ">
                ดูรีวิวนี้
              </Button>
              <Button
                className="w-[10%] text-[black] bg-[#FED584] absolute bottom-4 right-4"
                onClick={showModal}
              >
                รายงาน
              </Button>
            </div>
          </Col>
        </Row>
        <Modal
          title="รายงานรีวิว"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
            <Row gutter={[12, 12]}>
              <Col span={24}>
                <Checkbox value="A">ใช้ถ้อยคำหยาบคาย</Checkbox>
              </Col>
              <Col span={24}>
                <Checkbox value="B">
                  ใช้ข้อความที่เป็นเท็จหรือเกินความจริง
                </Checkbox>
              </Col>
              <Col span={24}>
                <Checkbox value="C">
                  ใช้ข้อความที่จะก่อให้เกิดความเข้าใจผิดในสาระสำคัญ
                </Checkbox>
              </Col>
              <Col span={24}>
                <Checkbox value="D">
                  ใช้ข้อความที่จะทำให้เกิดความแตกแยกหรือเสื่อมเสียความสามัคคีในหมู่ประชาชน
                </Checkbox>
              </Col>
              <Col span={24}>
                <Checkbox value="E">
                  ใช้ข้อความที่เป็นการสนับสนุนให้มีการกระทำผิดกฎหมายหรือศีลธรรม
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Modal>
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
          <button className="w-[100%] text-left" onClick={() => navigate("/")}>
            ออกจากระบบ{" "}
          </button>{" "}
        </div>
      </Drawer>
    </div>
  );
};
export default Review;

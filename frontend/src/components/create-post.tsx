import {
  Button,
  Col,
  Divider,
  Drawer,
  Form,
  Image,
  Input,
  Radio,
  Row,
  Select,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fireNotification } from "./notification";
const CreatePost = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };
  const onFinish = (e: any) => {
    fireNotification({ type: "success" });
    console.log(e);
  };
  return (
    <div>
      <div className=" w-[100%] ">
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
      <div className="text-center ">
      <button onClick={() => navigate("/")}>
        <Image
          style={{ width: "100%", height: "100%" }}
          src="./images/Logo.png"
          preview={false}
        />
        </button>
      </div>
        <div className="px-[40vh] pt-[50px] pb-10 !content-center">
          <Form onFinish={onFinish}>
            <Row gutter={[12, 12]}>
              <Col span={21}>
                <Form.Item name="namesub">
                  <Select
                    showSearch
                    placeholder="ค้นหารหัสวิชา หรือ ชื่อวิชา"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                      (option?.label ?? "")
                        .toLowerCase()
                        .includes(input.toLowerCase())
                    }
                    options={[
                      {
                        value: "214327",
                        label: "214327",
                      },
                      {
                        value: "214328",
                        label: "214328",
                      },
                      {
                        value: "214329",
                        label: "214329",
                      },
                    ]}
                  />
                </Form.Item>
              </Col>
              <Col span={3}>
                <Button
                  className="w-[100%]"
                  onClick={() => navigate("/")}
                >
                  ย้อนกลับ
                </Button>
              </Col>
              <Col span={24}>
                <Form.Item name="text1">
                  <TextArea rows={6} />
                </Form.Item>
              </Col>
              <Col span={12}>ความพึงพอใจในวิชา</Col>
              <Col span={4}></Col>
              <Col span={2}>ไม่พอใจ</Col>
              <Col span={3}></Col>
              <Col span={3}>พอใจมาก</Col>

              <Col span={1}></Col>
              <Col span={15}>เนื้อหาและความหน้าสนใจ</Col>
              <Col span={8}>
                <Form.Item name="a">
                  <Radio.Group className="pl-6">
                    <Radio value="a1">1</Radio>
                    <Radio value="a2">2</Radio>
                    <Radio value="a3">3</Radio>
                    <Radio value="a4">4</Radio>
                    <Radio value="a5">5</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>

              <Col span={1}></Col>
              <Col span={15}>จำนวนงานและความเหมาะสม</Col>
              <Col span={8}>
                <Form.Item name="b">
                  <Radio.Group className="pl-6">
                    <Radio value="b1">1</Radio>
                    <Radio value="b2">2</Radio>
                    <Radio value="b3">3</Radio>
                    <Radio value="b4">4</Radio>
                    <Radio value="b5">5</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>

              <Col span={1}></Col>
              <Col span={15}>อาจารย์ผู้สอน</Col>
              <Col span={8}>
                <Form.Item name="c">
                  <Radio.Group className="pl-6">
                    <Radio value="c1">1</Radio>
                    <Radio value="c2">2</Radio>
                    <Radio value="c3">3</Radio>
                    <Radio value="c4">4</Radio>
                    <Radio value="c5">5</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item name="gpa" label="เกรดที่ได้">
                  <Select placeholder="Please select favourite colors">
                    <Select.Option value="80">A</Select.Option>
                    <Select.Option value="75">B+</Select.Option>
                    <Select.Option value="70">B</Select.Option>
                    <Select.Option value="65">C+</Select.Option>
                    <Select.Option value="60">C</Select.Option>
                    <Select.Option value="50">F</Select.Option>
                    <Select.Option value="0">ไม่ระบุ</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item name="schoolYear" label="ปีการศึกษา">
                  <Input placeholder="ปีการศึกษา" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item name="term" label="เทอม">
                  <Radio.Group>
                    <Radio value="t1">1</Radio>
                    <Radio value="t2">2</Radio>
                    <Radio value="t3">3</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
              <Col span={24}>
                <p>กรุณาตรวจสอบความถูกต้องก่อนโพสรีวิว</p>
              </Col>
              <Col span={1}></Col>
              <Col span={23}>
                <p>1.ห้ามใช้คำหยาบคาย </p>
                <p>2.ห้ามใช้ข้อความที่เป็นเท็จหรือเกินความจริง</p>
                <p>3.ห้ามใช้ข้อความที่จะก่อให้เกิดความเข้าใจผิดในสาระสำคัญ</p>
                <p>
                  4.ห้ามใช้ข้อความที่จะทำให้เกิดความแตกแยกหรือเสื่อมเสียความสามัคคีในหมู่ประชาชน
                </p>
                <p>
                  5.ห้ามใช้ข้อความที่เป็นการสนับสนุนโดยตรงหรือโดยอ้อมให้มีการกระทำผิดกฎหมายหรือศีลธรรม
                </p>
              </Col>
              <Col span={10}></Col>
              <Col span={4}>
                <Button htmlType="submit" className="w-[100%]">
                  โพสต์เลย!!
                </Button>
              </Col>
              <Col span={10}></Col>
            </Row>
          </Form>
        </div>
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
        <div className="p-2"> <button className="w-[100%] text-left" onClick={() => navigate("/edit-profile")}>ตั้งค่าบัญชี</button> </div>
        <Divider className="my-1" />
        <div className="p-2"> <button className="w-[100%] text-left" onClick={() => navigate("/login")}>เข้าสู่ระบบ </button> </div>
        <div className="p-2"> <button className="w-[100%] text-left" onClick={() => navigate("/user-management")}>จัดการผู้ใช้ </button> </div>
        <div className="p-2"> <button className="w-[100%] text-left" onClick={() => navigate("/")}>ออกจากระบบ </button> </div>
      </Drawer>
    </div>
  );
};
export default CreatePost;

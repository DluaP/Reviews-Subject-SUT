import {
  Button,
  Col,
  Divider,
  Drawer,
  Form,
  Image,
  Input,
  Row,
  Select,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
const CreatePost = () => {
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
    console.log('search:', value);
  };
  return (
    <div>
      <div className=" w-[100%] ">
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
        <div className="text-center pt-20">
          <Image src="./images/Logo.png" preview={false} />
        </div>
        <div className="px-[40vh]   !content-center">
          <Form>
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
                        value: "jack",
                        label: "Jack",
                      },
                      {
                        value: "lucy",
                        label: "Lucy",
                      },
                      {
                        value: "tom",
                        label: "Tom",
                      },
                    ]}
                  />
                </Form.Item>
              </Col>
              <Col span={3}>
                <Button className="w-[100%]">ย้อนกลับ</Button>
              </Col>
              <Col span={24} >
                <TextArea rows={6} />
              </Col>
              <Col span={12}>
                ความพึงพอใจในวิชา
              </Col>
              <Col span={4}></Col>
              <Col span={2}>ไม่พอใจ</Col>
              <Col span={4}></Col>
              <Col span={2}>พอใจมาก</Col>
            </Row>
          </Form>
        </div>
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
export default CreatePost;

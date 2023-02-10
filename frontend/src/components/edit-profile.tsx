import {
  Affix,
  Button,
  Divider,
  Drawer,
  Form,
  Input,
  notification,
  Row,
  Select,
  Typography,
} from "antd";
import form from "antd/es/form";
import { Col } from "antd/es/grid";
import { Image } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";
import { baseURL } from "./login";
import { useUser } from "./context/user";
import { fireNotification } from "./notification";

const EditProfile = () => {
  const navigate = useNavigate();
  const [top, setTop] = useState(10);
  const [form] = Form.useForm();
  const { user, setUser, userDetail, setUserDetail } = useUser();

  const openNotification = () => {
    notification.open({
      message: "คำเเตือน!!!",
      description: "โปรดเข้าสู่ระบบก่อนทำการเขียนรีวิว",
    });
  };

  const session = () => {
    if (user !== undefined && userDetail?.id !== undefined) {
    } else {
      navigate("/login");
      openNotification();
    }
  };
  useEffect(() => {
    session();
  }, []);
  const onFinish = async (e: any) => {
    await baseURL
      .patch(`/users/${userDetail?.id}`, e)
      .then((res) => {
        if (res.status == 201 || 200) {
          fireNotification({ type: "success" });
        } else {
          fireNotification({ type: "error" });
        }

        setUserDetail(e);
      })
      .catch((e: any) => {
        fireNotification({ type: "error", description: `${e?.message}` });
      });
  };
  useEffect(() => {
    form.setFieldsValue({
      ...userDetail,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userDetail]);

  return (
    <div className="w-[100%] h-[100vh] ">
      <div className=" lg:px-[30vh] md:px-[10vh]  sm:px-[5vh] px-[20px] pt-[50px] pb-[100px] text-center justify-center ">
        <Form layout="vertical" form={form} onFinish={onFinish}>
          <Row
            gutter={[12, 12]}
            className="border-2 border-[#F9ECCE] rounded-lg "
          >
            <Col xs={24} md={24} lg={12} className="p-4">
              <div className="border-2 border-[#F9ECCE] rounded-lg text-left">
                <Row gutter={[12, 0]} className="p-2">
                  <Col span={24}>
                    <div className="text-xl">จัดการโปรไฟล์</div>
                  </Col>
                  <Col xs={24} md={24} lg={8} className="text-center pt-4">
                    {userDetail?.status === "admin" ? (
                      <Image
                        src="./images/Admin.png"
                        preview={false}
                        style={{ width: "100px", height: "100px" }}
                        className="rounded-full text-center"
                      />
                    ) : userDetail?.status === "teacher" ? (
                      <Image
                        src="./images/Teacher.png"
                        preview={false}
                        style={{ width: "100px", height: "100px" }}
                        className="rounded-full text-center"
                      />
                    ) : (
                      <Image
                        src="./images/Student.png"
                        preview={false}
                        style={{ width: "100px", height: "100px" }}
                        className="rounded-full text-center"
                      />
                    )}
                  </Col>
                  <Form.Item name="id">
                    <Input hidden />
                  </Form.Item>
                  <Col xs={24} md={24} lg={16}>
                    <Form.Item
                      name="nickName"
                      label="นามแฝง"
                      rules={[
                        {
                          required: true,
                          message: "กรุณากรอกนามแฝง",
                        },
                      ]}
                      tooltip="นามแฝงไม่เกิน 12 ตัวอักษร"
                    >
                      <Input placeholder="นามแฝง" maxLength={12} />
                    </Form.Item>
                    <Form.Item name="bio" label="เกี่ยวกับฉัน">
                      <TextArea rows={2} />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item name="facebook" label="facebok">
                      <Input placeholder="facebok" />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item name="ig" label="instagram">
                      <Input placeholder="instagram" />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item name="email" label="email">
                      <Input placeholder="email" type="email" />
                    </Form.Item>

                    <Form.Item name="status">
                      <Input hidden />
                    </Form.Item>
                  </Col>
                </Row>
              </div>
            </Col>
            {/* ข้อมูลส่วนนี้ต้องทำเป็น for loop*/}
            <Col xs={24} md={24} lg={12} className="p-4">
              <div className="border-2 border-[#F9ECCE] rounded-lg text-left">
                <Row gutter={[12, 0]} className="p-2">
                  <Col span={24}>
                    <div className="text-xl">จัดการบัญชี</div>
                  </Col>
                  <Col span={24}>
                    <Form.Item name="username" label="ชื่อผู้ใช้">
                      <Input placeholder="ชื่อผู้ใช้" disabled />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      name="firstName"
                      label="ชื่อ"
                      rules={[
                        {
                          pattern: new RegExp(/^[a-zA-Zก-๏]*$/),
                          message: "ชื่อเป็นภาษาไทยหรือภาษาอังกฤษเท่านั้น",
                        },
                        {
                          required: true,
                          message: "กรุณาข้อมูล",
                        },
                      ]}
                    >
                      <Input placeholder="ชื่อ" />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      name="lastName"
                      label="นามสกุล"
                      rules={[
                        {
                          pattern: new RegExp(/^[a-zA-Zก-๏]*$/),
                          message: "ชื่อเป็นภาษาไทยหรือภาษาอังกฤษเท่านั้น",
                        },
                        {
                          required: true,
                          message: "กรุณาข้อมูล",
                        },
                      ]}
                    >
                      <Input placeholder="นามสกุล" />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      name="password"
                      label="Password"
                      rules={[
                        {
                          required: true,
                          message: "กรุณากรอกรหัสผ่าน",
                        },
                      ]}
                      tooltip="รหัสผ่านต้องมากกว่า 8 ตัวอักษร ไม่เกิน 20 ตัวอักษร"
                    >
                      <Input.Password
                        placeholder="รหัสผ่าน"
                        maxLength={20}
                        minLength={8}
                      />
                    </Form.Item>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={5} md={7} lg={9}></Col>
            <Col xs={7} md={5} lg={3}>
              <Button htmlType="submit" className="w-[100%]">
                บันทึก
              </Button>
            </Col>
            <Col xs={7} md={5} lg={3}>
              <Button className="w-[100%]" onClick={() => navigate("/")}>
                Back
              </Button>
            </Col>
            <Col xs={5} md={7} lg={9}></Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};
export default EditProfile;

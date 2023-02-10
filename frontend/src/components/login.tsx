import {
  Card,
  Input,
  TabsProps,
  Form,
  Button,
  Tabs,
  Row,
  Col,
  Image,
  notification,
  Empty,
  Select,
} from "antd";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setToken } from "./context/auth";
import { useUser } from "./context/user";
import { fireNotification } from "./notification";

export const baseURL = axios.create({
  baseURL: "http://localhost:3100",
});

const Login = () => {
  const navigate = useNavigate();
  const { findByToken } = useUser();
  const { user, setUser, userDetail, setUserDetail } = useUser();

  const signin = async (data: any) => {
    await baseURL
      .post("/auth/login", data)
      .then((e: any) => {
        setToken(e.data.access_token);
        findByToken(e.data.access_token);
        navigate("/", { replace: true });

        if (e.status == 201 || 200) {
          fireNotification({ type: "success" });
        } else {
          fireNotification({ type: "error" });
        }
        // localStorage.setItem("access-token", e.data.access_token);
      })
      .catch((e: any) => {
        if (e.message === "Network Error") {
          fireNotification({ type: "error", description: `${e?.message}` });
        } else {
          fireNotification({
            type: "error",
            description: "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง",
          });
        }
      });
  };

  const signup = async (element: any) => {
    if (element.confirm != element.password) {
      fireNotification({ type: "error", description: "รหัสไม่ตรงกัน" });
    } else {
      await baseURL
        .post("/users", element)
        .then((e: any) => {
          if (e.status == 201 || 200) {
            fireNotification({ type: "success" });
            window.location.reload();
          } else {
            fireNotification({ type: "error" });
          }
        })
        .catch((e: any) => {
          if (e.message === "Network Error") {
            fireNotification({ type: "error", description: `${e?.message}` });
          } else {
            fireNotification({
              type: "error",
              description: "ชื่อผู้ใช้หรือนางแฝงมีผู้ใช้แล้ว",
            });
          }
        });
    }
  };
  const onChange = (key: string) => {};

  const test = () => {
    baseURL.get("/users").then((e: any) => {});
  };

  useEffect(() => {
    test();
  }, []);

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Login`,
      children: (
        <div>
          <Form layout="vertical" name="login" onFinish={signin}>
            <Row gutter={[12, 0]}>
              <Col span={24}>
                <Form.Item
                  name="username"
                  label="ชื่อผู้ใช้"
                  rules={[
                    {pattern: new RegExp(/^[a-zA-Z0-9]*$/),  message: "ชื่อผู้ใช้เป็นภาษาอังกฤษหรือตัวเลขเท่านั้น"},
                    {
                      required: true,
                      message: "กรุณากรอกชื่อผู้ใช้",
                    },
                  ]}
                  
                >
                  <Input
                    placeholder="ชื่อผู้ใช้"
                    maxLength={12}
                    
                  />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  name="password"
                  label="รหัสผ่าน"
                  
                  rules={[
                    {
                      required: true,
                      message: "กรุณากรอกรหัสผ่าน",
                    },
                  ]}
                >
                  <Input.Password placeholder="รหัสผ่าน" maxLength={20} />
                </Form.Item>
              </Col>
            </Row>
            <Button htmlType="submit">Login</Button>
            <Button onClick={() => navigate("/")}>Back</Button>
          </Form>
        </div>
      ),
    },
    {
      key: "2",
      label: `Sign up`,
      children: (
        <div>
          <Form layout="vertical" name="signUp" onFinish={signup}>
            <Row gutter={[12, 0]}>
              <Col span={24}>
                <Form.Item
                  name="username"
                  label="ชื่อผู้ใช้"
                  tooltip="ชื่อผู้ใช้ต้องมากกว่า 6 ตัวอักษร ไม่เกิน 12 ตัวอักษร"
                  rules={[
                    {pattern: new RegExp(/^[a-zA-Z0-9]*$/),  message: "ชื่อผู้ใช้เป็นภาษาอังกฤษหรือตัวเลขเท่านั้น"},
                    {
                      required: true,
                      message: "กรุณากรอกชื่อผู้ใช้",
                    },
                  ]}
                >
                  <Input placeholder="ชื่อผู้ใช้" maxLength={12} minLength={6}/>
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  name="firstName"
                  label="ชื่อ"
                  rules={[
                    {pattern: new RegExp(/^[a-zA-Zก-๏]*$/),  message: "ชื่อเป็นภาษาไทยหรือภาษาอังกฤษเท่านั้น"},
                    {
                      required: true,
                      message: "กรุณากรอกชื่อ",
                    },
                  ]}
                >
                  <Input placeholder="ชื่อ" maxLength={20} />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  name="lastName"
                  label="นามสกุล"
                  rules={[
                    {pattern: new RegExp(/^[a-zA-Zก-๏]*$/),  message: "นามสกุลเป็นภาษาไทยหรือภาษาอังกฤษเท่านั้น"},
                    {
                      required: true,
                      message: "กรุณากรอกนามสกุล",
                    },
                  ]}
                >
                  <Input placeholder="นามสกุล" maxLength={20} />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
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
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  name="status"
                  label="สถานะ"
                  rules={[
                    {
                      required: true,
                      message: "กรุณากรอกสถานะ",
                    },
                  ]}
                  initialValue="studen"
                >
                  <Select
                    placeholder="สถานะ"
                    options={[
                      { value: "studen", label: "นักศึกษา" },
                      { value: "teacher", label: "คุณครู" },
                      { value: "admin", label: "แอดมิน", disabled: true },
                    ]}
                  />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  name="password"
                  label="รหัสผ่าน"
                  rules={[
                    {
                      required: true,
                      message: "กรุณากรอกรหัสผ่าน",
                    },
                  ]}
                  tooltip="รหัสผ่านต้องมากกว่า 8 ตัวอักษร ไม่เกิน 20 ตัวอักษร"
                >
                  <Input.Password placeholder="รหัสผ่าน" maxLength={20} minLength={8}/>
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  name="confirm"
                  label="ยืนยัน รหัสผ่าน"
                  rules={[
                    {
                      required: true,
                      message: "กรุณากรอกยืนยันรหัสผ่าน",
                    },
                  ]}
                >
                  <Input.Password
                    placeholder="ยืนยัน รหัสผ่าน"
                    maxLength={20}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Button htmlType="submit">Sign up</Button>
            <Button onClick={() => navigate("/")}>Back</Button>
          </Form>
        </div>
      ),
    },
  ];

  return (
    <div className="w-[100%] h-[100vh] ">
      <div className=" lg:mx-[30vh] md:mx-[10vh]  sm:mx-[5vh] mx-[20px] pt-[50px] !content-center border-2 border-[#F9ECCE] rounded-lg ">
        <Tabs
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          className="bg-white px-10  pt-4 pb-10 rounded-lg"
        />
      </div>
    </div>
  );
};
export default Login;

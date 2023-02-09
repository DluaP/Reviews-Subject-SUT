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

  const signin = (data: any) => {
    baseURL.post("/auth/login", data).then((e: any) => {
      setToken(e.data.access_token);
      findByToken(e.data.access_token);
      navigate("/", { replace: true });
      // localStorage.setItem("access-token", e.data.access_token);
      // console.log("setToken", setToken(e.data.access_token));
      // console.log(e.data.access_token);
    });

    fireNotification({ type: "success" });
  };

  const signup = (element: any) => {
    if (element.confirm != element.password) {
      fireNotification({ type: "error", description: "รหัสไม่ตรงกัน" });
    } else {
      console.log(element);
      baseURL.post("/users", element).then((e: any) => {
        console.log(e);
      });
      fireNotification({ type: "success" });
      window.location.reload();
    }
  };
  const onChange = (key: string) => {
    console.log(key);
  };

  const test = () => {
    baseURL.get("/users").then((e: any) => {
      console.log(e);
    });
  };

  useEffect(() => {
    console.log("userDetail?.status",userDetail?.status)
    console.log("user",user)
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
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input placeholder="ชื่อผู้ใช้" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  name="password"
                  label="รหัสผ่าน"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input.Password placeholder="รหัสผ่าน"  />
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
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input placeholder="ชื่อผู้ใช้" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="firstName"
                  label="ชื่อ"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input placeholder="ชื่อ" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="lastName"
                  label="นามสกุล"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input placeholder="นามสกุล" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="nickName"
                  label="ชื่อเล่น"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input placeholder="ชื่อเล่น" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="status"
                  label="สถานะ"
                  rules={[
                    {
                      required: true,
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
                    },
                  ]}
                >
                  <Input.Password placeholder="รหัสผ่าน"  />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  name="confirm"
                  label="ยืนยัน รหัสผ่าน"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input.Password placeholder="ยืนยัน รหัสผ่าน"  />
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
      <div className="mx-[50vh]   !content-center border-2 border-[#F9ECCE] rounded-lg">
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

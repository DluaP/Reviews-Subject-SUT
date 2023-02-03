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
} from "antd";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setToken } from "./context/auth";
import { fireNotification } from "./notification";

export const baseURL = axios.create({
  baseURL: "http://localhost:3100",
});

const Login = () => {
  const navigate = useNavigate();

  const signin = (data: any) => {
    baseURL.post("/auth/login", data).then((e: any) => {
      // localStorage.setItem("access-token", e.data.access_token);
      setToken(e.data.access_token)
      console.log("setToken",setToken(e.data.access_token));
      navigate("/", { replace: true })
      console.log(e.data.access_token);
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
                <Form.Item name="username" label="Username">
                  <Input placeholder="Username" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item name="password" label="Password">
                  <Input placeholder="Password" type="password" />
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
                <Form.Item name="username" label="Username">
                  <Input placeholder="Username" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="firstName" label="Firstname">
                  <Input placeholder="Firstname" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="lastName" label="LastName">
                  <Input placeholder="LastName" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item name="nickName" label="Nickname">
                  <Input placeholder="Nickname" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item name="password" label="Password">
                  <Input placeholder="Password" type="password" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item name="confirm" label="Confirm Password">
                  <Input placeholder="Confirm Password" type="password" />
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
    <div className="bg-[#F9ECCE] w-[100%] h-[100vh] ">
      <div className="text-center pt-20">
        <Image src="./images/Logo.png" preview={false} />
      </div>
      <div className="px-[50vh]   !content-center">
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

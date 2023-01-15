import { Card, Input, TabsProps, Form, Button, Tabs, Row, Col ,Image, notification} from "antd";
import { fireNotification } from "./notification"
const Login = () => {

  const signin = (element: any) => {
    fireNotification({ type: "success"});
  };
  const signup = (element: any) => {
    if(element.confirm != element.password){
        fireNotification({ type: "error", description: "รหัสไม่ตรงกัน" });
    }else{
        fireNotification({ type: "success"});
    }
  };
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Login`,
      children: (
        <div>
          <Form layout="vertical" onFinish={signin}>
          <Row gutter={[12, 0]}>
              <Col span={24}>
                <Form.Item name="username" label="Username">
                  <Input placeholder="Username" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item name="password" label="Password">
                  <Input placeholder="Password"  type="password"/>
                </Form.Item>
              </Col>
            </Row>
            <Button htmlType="submit">Login</Button>
            <Button>Back</Button>
          </Form>
        </div>
      ),
    },
    {
      key: "2",
      label: `Sign up`,
      children: (
        <div>
          <Form layout="vertical" onFinish={signup}>
            <Row gutter={[12, 0]}>
              <Col span={24}>
                <Form.Item name="username" label="Username">
                  <Input placeholder="Username" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="firstname" label="Firstname">
                  <Input placeholder="Firstname"  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="surname" label="Surname">
                  <Input placeholder="Surname"  />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item name="nickname" label="Nickname">
                  <Input placeholder="Nickname"  />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item name="password" label="Password">
                  <Input placeholder="Password"  type="password"/>
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item name="confirm" label="Confirm Password">
                  <Input placeholder="Confirm Password"  type="password"/>
                </Form.Item>
              </Col>
            </Row>

            <Button htmlType="submit">Sign up</Button>
            <Button>Back</Button>
          </Form>
        </div>
      ),
    },
  ];
  return (
    <div className="bg-[#F9ECCE] w-[100%] h-[100vh] ">
        <div className="text-center pt-20">
        <Image  src="./images/Logo.png" preview={false}/>
      </div>
      <div className="px-[50vh]   !content-center">
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} className="bg-white px-10  pt-4 pb-10 rounded-lg"/>
      </div>
    </div>
  );
};
export default Login;

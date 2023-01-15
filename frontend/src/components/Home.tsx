import { Form, Input, Row } from "antd";
import form from "antd/es/form";
import { Col } from "antd/es/grid";

const Home = () => {
  const [form] = Form.useForm();
  const onFinish = () => {};

  return (
    <div className="w-[100%] h-[100vh] ">
      <div className="p-[100px] text-center justify-center ">
        <Form layout="vertical" onFinish={onFinish}>
        <Row gutter={[12, 6]}>
            <Col span={6}>
              <Form.Item
                name="url"
                label="URL"
              >
                <Input placeholder="input placeholder" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                name="url"
                label="URL"

              >
                <Input placeholder="input placeholder" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                name="url"
                label="URL"

              >
                <Input placeholder="input placeholder" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                name="url"
                label="URL"

              >
                <Input placeholder="input placeholder" />
              </Form.Item>
            </Col>
        </Row>
        </Form>
        <Row gutter={[12, 12]}>
          <Col span={7} className="bg-[#F9ECCE] h-[100px] ">
            27749 วิชาน่ารัก sdfsdfdsfdsf
          </Col>
          <Col span={1} />
          <Col span={8} className="bg-[#F9ECCE] h-[100px]">
            27743 รักนะจุ๊บๆ
          </Col>
          <Col span={1} />
          <Col span={7} className="bg-[#F9ECCE] h-[100px]">
            8841 ยังไงๆ
          </Col>
        </Row>
        <Row gutter={[12, 12]} className="mt-10">
          <Col span={7} className="bg-[#F9ECCE] h-[100px] ">
            27749 วิชาน่ารัก
          </Col>
          <Col span={1} />
          <Col span={8} className="bg-[#F9ECCE] h-[100px]">
            27743 รักนะจุ๊บๆ
          </Col>
          <Col span={1} />
          <Col span={7} className="bg-[#F9ECCE] h-[100px]">
            8841 ยังไงๆ
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Home;

import { Form, Input, Row } from "antd";
import form from "antd/es/form";
import { Col } from "antd/es/grid";

const Page = () => {
  const [form] = Form.useForm();
  const onFinish = () => {};

  return (
    <div className="w-[100%] h-[1000px] ">
      <div className="p-[100px] text-center justify-center ">
        <Row gutter={[12, 6]}>
          <Form form={form} layout="vertical" onFinish={onFinish}>
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
            
          </Form>
        </Row>
        <Row gutter={[12, 12]}>
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
export default Page;

import { Form, Input, Row } from "antd";
import form from "antd/es/form";
import { Col } from "antd/es/grid";
import { Image } from 'antd';
import  ImageHM  from './images/human.png';



const Home = () => {
  const [form] = Form.useForm();
  const onFinish = () => { };

  return (

    <div className="w-[100%] h-[1000px] ">
      <div className="text-right pr-12 pt-10 "><Image style={{ width: 30, height: 30 }} src= './images/human.png' /></div>
      <div className="text-right pr-10 pt-1"> โปรไฟล์ </div>
      <div className="text-center "><Image style={{ width: 200, height: 100 }} src= './images/Logo.png' /></div>
      <div className="p-[100px] text-center justify-center ">

 <Form form={form} layout="vertical" onFinish={onFinish}>
        <Row gutter={[12, 6]} >

          <Col span={6}>
            <Form.Item
              name="url"
              label="ชื่อวิชา"
            >
              <Input placeholder="input placeholder" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              name="url"
              label="รหัสวิชา"
            >
              <Input placeholder="input placeholder" />
            </Form.Item>

          </Col>
          <Col span={6}>
            <Form.Item
              name="url"
              label="ปี"
            >
              <Input placeholder="input placeholder" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              name="url"
              label="รูปแบบ"
            >
              <Input placeholder="input placeholder" />
            </Form.Item>
          </Col>

        </Row>
        </Form>


        <Row gutter={[12, 12]}>
        <Col span={3} ></Col>
        </Row>
        <Row gutter={[12, 12]}>
          <Col span={7} className="bg-[#F9ECCE] h-[100px] rounded-md" >
            27749 วิชาน่ารัก sdfsdfdsfdsf
          </Col>
          <Col span={1} />
          <Col span={8} className="bg-[#F9ECCE] h-[100px] rounded-md">
            27743 รักนะจุ๊บๆ
          </Col>
          <Col span={1} />
          <Col span={7} className="bg-[#F9ECCE] h-[100px] rounded-md">
            8841 ยังไงๆ
          </Col>
        </Row>
        <Row gutter={[12, 12]} className="mt-10">
          <Col span={7} className="bg-[#F9ECCE] h-[100px] rounded-md">
            27749 วิชาน่ารัก
          </Col>
          <Col span={1} />
          <Col span={8} className="bg-[#F9ECCE] h-[100px] rounded-md">
            27743 รักนะจุ๊บๆ
          </Col>
          <Col span={1} />
          <Col span={7} className="bg-[#F9ECCE] h-[100px] rounded-md">
            8841 ยังไงๆ
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Home;

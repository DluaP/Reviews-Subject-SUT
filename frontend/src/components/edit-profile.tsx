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

const EditProfile = () => {
  const navigate = useNavigate();
  const [top, setTop] = useState(10);
  const [form] = Form.useForm();
  const { user, setUser, userDetail, setUserDetail } = useUser();


  const openNotification = () => {
    notification.open({
      message: 'คำเเตือน!!!',
      description:
        'โปรดเข้าสู่ระบบก่อนทำการเขียนรีวิว',
    });
  };
  
  const session = () => {
    if(user !== undefined){
    }else{
      navigate("/login");
      openNotification();
    }
  }
  useEffect(() => {

    session()
  }, []);
  const onFinish = (e: any) => {
    baseURL.patch(`/users/${userDetail?.id}`, e).then((res) => {
      console.log("e", e);
      setUserDetail(e)
    });

    console.log(e);
  };
  useEffect(() => {
    form.setFieldsValue({
      ...userDetail,
    }); 
    console.log("userDetail?.id",userDetail?.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userDetail]);

  return (
    <div className="w-[100%] h-[100vh] ">
      <div className="px-[40vh] pt-[50px] pb-[100px] text-center justify-center ">
        <Form layout="vertical" form={form} onFinish={onFinish}>
          <Row
            gutter={[12, 12]}
            className="border-2 border-[#F9ECCE] rounded-lg "
          >
            <Col span={12} className="p-4">
              <div className="border-2 border-[#F9ECCE] rounded-lg text-left">
                <Row gutter={[12, 0]} className="p-2">
                  <Col span={24}>
                    <div className="text-xl">จัดการโปรไฟล์</div>
                  </Col>
                  <Col span={6}>
                    <Image
                      src="./images/test-men.jpg"
                      preview={false}
                      style={{ width: "100%" }}
                      className="rounded-full text-center"
                    />
                    <Button className="w-[100%]">อัพโหลดรูปภาพ</Button>
                  </Col> 
                  <Form.Item name="id">
                      <Input  hidden/>
                    </Form.Item>
                  <Col span={18}>
                 
                    <Form.Item name="nickName" label="ชื่อเล่น">
                      <Input placeholder="ชื่อเล่น" />
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
                      <Input placeholder="email" />
                    </Form.Item>
                    
                    <Form.Item name="status" >
                      <Input hidden />
                    </Form.Item>
                  </Col>
                </Row>
              </div>
            </Col>
            {/* ข้อมูลส่วนนี้ต้องทำเป็น for loop*/}
            <Col span={12} className="p-4">
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
                    <Form.Item name="firstName" label="ชื่อ">
                      <Input placeholder="ชื่อ" />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item name="lastName" label="นามสกุล">
                      <Input placeholder="นามสกุล" />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item name="password" label="Password">
                      <Input.Password placeholder="Password" />
                    </Form.Item>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col span={9}></Col>
            <Col span={3}>
              <Button htmlType="submit" className="w-[100%]">
                บันทึก
              </Button>
            </Col>
            <Col span={3}>
              <Button className="w-[100%]" onClick={() => navigate("/")}>
                Back
              </Button>
            </Col>
            <Col span={9}></Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};
export default EditProfile;

import {
  Affix,
  Button,
  Col,
  Divider,
  Drawer,
  Form,
  Image,
  Input,
  Popconfirm,
  Radio,
  Row,
  Select,
  notification,
} from "antd";
import ReactQuill from "react-quill"; // ES6
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useReview } from "./context/review";
import { useUser } from "./context/user";
import { baseURL } from "./login";
import { fireNotification } from "./notification";

const EditPost = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { courseReviwe, setCouresReview, setEditReview, editReview } =
    useReview();

  const [values, setValue] = useState("");
  let options: any = [];
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

  useEffect(() => {
    fetchCourse();
    form.setFieldsValue({
      ...editReview,
    });
  }, []);

  const onChange = (value: string) => {
    
  };

  const onSearch = (value: string) => {
    
  };

  const onFinish = async (e: any) => {
    
    delete e.course;
    await baseURL.patch(`/reviews/${editReview?.id}`, e).then((e: any) => {
      // localStorage.setItem("access-token", e.data.access_token);
      navigate("/profile");
      if (e.status == 201 || 200) {
        fireNotification({ type: "success" });
      } else {
        fireNotification({ type: "error" });
      }
      
    });
  };

  const fetchCourse = async () => {
    await baseURL.get(`/course`).then((res) => {
      setCouresReview(res.data);
    });
  };

  courseReviwe?.map((item: any) => {
    <div key={item?.id}></div>;
    options.push({
      value: `${item?.course_id} ${item?.course_name}`,
      label: `${item?.course_id} ${item?.course_name}`,
    });
  });

  return (
    <div>
      <div className=" w-[100%] ">
        <div className=" lg:px-[30vh] md:px-[10vh]  sm:px-[5vh] px-[20px] pt-[50px] pb-[100px] !text-left justify-center ">
          <Form onFinish={onFinish} form={form} name="reviews">
            <Row gutter={[12, 12]}>
              <Col xs={18} md={20} lg={21}>
                <Form.Item name="course" initialValue={editReview?.course_name}>
                  <Select
                    showSearch
                    placeholder="ค้นหารหัสวิชา หรือ ชื่อวิชา"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                    options={options}
                    disabled
                  />
                </Form.Item>
              </Col>
              <Col xs={6} md={4} lg={3}>
                <Button
                  className="w-[100%]"
                  onClick={() => navigate("/profile")}
                >
                  ย้อนกลับ
                </Button>
              </Col>

              <Col span={24}>
                <Form.Item name="review_detail">
                  <ReactQuill
                    theme="snow"
                    value={values}
                    onChange={setValue}
                    className="h-[300px] pb-8"
                    placeholder={"รีวิวเลย!!"}
                  />
                </Form.Item>
              </Col>

              <Col xs={24} md={24} lg={24}>
                ความพึงพอใจในวิชา
              </Col>

              <Col xs={1} md={1} lg={1}></Col>
              <Col xs={24} md={24} lg={13}>
                เนื้อหาและความหน้าสนใจ
              </Col>
              <Col span={2}>ไม่พอใจ</Col>
              <Form.Item name="satisfied_point">
                <Radio.Group className="">
                  <Radio value="0">1</Radio>
                  <Radio value="25">2</Radio>
                  <Radio value="50">3</Radio>
                  <Radio value="75">4</Radio>
                  <Radio value="100">5</Radio>
                </Radio.Group>
              </Form.Item>
              <Col span={2}>พอใจมาก</Col>

              <Col xs={1} md={1} lg={1}></Col>
              <Col xs={24} md={24} lg={13}>
                จำนวนงานและความเหมาะสม
              </Col>
              <Col span={2}>ไม่พอใจ</Col>
              <Form.Item name="appropriate_point">
                <Radio.Group className="">
                  <Radio value="0">1</Radio>
                  <Radio value="25">2</Radio>
                  <Radio value="50">3</Radio>
                  <Radio value="75">4</Radio>
                  <Radio value="100">5</Radio>
                </Radio.Group>
              </Form.Item>
              <Col span={2}>พอใจมาก</Col>

              <Col xs={1} md={1} lg={1}></Col>
              <Col xs={24} md={24} lg={13}>
                อาจารย์ผู้สอน
              </Col>
              <Col span={2}>ไม่พอใจ</Col>
              <Form.Item name="teacher_point">
                <Radio.Group className="">
                  <Radio value="0">1</Radio>
                  <Radio value="25">2</Radio>
                  <Radio value="50">3</Radio>
                  <Radio value="75">4</Radio>
                  <Radio value="100">5</Radio>
                </Radio.Group>
              </Form.Item>
              <Col span={2}>พอใจมาก</Col>

              <Col span={24}>
                <Form.Item name="grade" label="เกรดที่ได้">
                  <Select placeholder="Please select favourite colors">
                    <Select.Option value="80">A</Select.Option>
                    <Select.Option value="75">B+</Select.Option>
                    <Select.Option value="70">B</Select.Option>
                    <Select.Option value="65">C+</Select.Option>
                    <Select.Option value="60">C</Select.Option>
                    <Select.Option value="50">F</Select.Option>
                    <Select.Option value="0">ไม่ระบุ</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item name="semester" label="ปีการศึกษา">
                  <Input placeholder="ปีการศึกษา" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item name="term" label="เทอม">
                  <Radio.Group>
                    <Radio value="t1">1</Radio>
                    <Radio value="t2">2</Radio>
                    <Radio value="t3">3</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
              <Col span={24}>
                <p>กรุณาตรวจสอบความถูกต้องก่อนโพสรีวิว</p>
              </Col>
              <Col span={1}></Col>
              <Col span={23}>
                <p>1.ห้ามใช้คำหยาบคาย </p>
                <p>2.ห้ามใช้ข้อความที่เป็นเท็จหรือเกินความจริง</p>
                <p>3.ห้ามใช้ข้อความที่จะก่อให้เกิดความเข้าใจผิดในสาระสำคัญ</p>
                <p>
                  4.ห้ามใช้ข้อความที่จะทำให้เกิดความแตกแยกหรือเสื่อมเสียความสามัคคีในหมู่ประชาชน
                </p>
                <p>
                  5.ห้ามใช้ข้อความที่เป็นการสนับสนุนโดยตรงหรือโดยอ้อมให้มีการกระทำผิดกฎหมายหรือศีลธรรม
                </p>
              </Col>

              <Col xs={6} md={8} lg={10}></Col>
              <Col xs={8} md={6} lg={4}>
                <Button htmlType="submit" className="w-[100%]">
                  บันทึก
                </Button>
              </Col>
              <Col xs={6} md={8} lg={10}></Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default EditPost;

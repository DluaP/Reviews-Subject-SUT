import {
  Button,
  Divider,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Modal,
  Checkbox,
  Affix,
  Card,
  Switch,
  Typography,
} from "antd";
import form from "antd/es/form";
import { Col } from "antd/es/grid";
import { Image } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
import { useReview } from "./context/review";
import { baseURL } from "./login";
import { log } from "console";
import parse from "html-react-parser";

const { Paragraph, Text } = Typography;

const Review = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { courseId } = useReview();
  const [review, setReview] = useState<any[]>([]);
  const [inreview, setInreviw] = useState<any>();
  const [ellipsis, setEllipsis] = useState(true);

  useEffect(() => {
    getReviewCourse();
    console.log("review",review)
  }, [courseId]);

  const onFinish = (e: any) => {
    console.log(e);
  };
  const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log("checked = ", checkedValues);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const showModal2 = () => {
    setIsModalOpen2(true);
  };

  const handleOk2 = () => {
    setIsModalOpen2(false);
  };

  const handleCancel2 = () => {
    setIsModalOpen2(false);
  };

  const getReviewCourse = () => {
    baseURL.get(`/reviews?course_id=${courseId}`).then((res) => {
      console.log(res.data);
      setReview(res.data);
    });
  };

  const onFComment = (e: any) => {};

  return (
    <div className="w-[100%] h-[100vh] ">
      <div className="px-[40vh] pt-[50px] pb-[100px] text-center justify-center ">
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Row gutter={[12, 6]}>
            <Col span={6}>
              <Form.Item name="3" label="ปี">
                <Input placeholder="ปี" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="4" label="เรียงตาม" initialValue="all">
                <Select >
                  <Select.Option value="all">ทั้งหมด</Select.Option>
                  <Select.Option value="like">ยอดไลก์</Select.Option>
                  <Select.Option value="review">ยอดวิว</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={3}>
              <Button
                htmlType="submit"
                className="w-[100%] text-[white] bg-[#46B072] top-7"
              >
                ค้นหา
              </Button>
            </Col>
            <Col span={3}>
              <Button
                className="w-[100%] top-7 "
                onClick={() => {
                  form.resetFields();
                }}
              >
                ล้างข้อมูล
              </Button>
            </Col>
            <Col span={3}>
              <Button
                className="w-[100%] top-7 "
                onClick={() => {
                  navigate("/");
                }}
              >
                ย้อนกลับ
              </Button>
            </Col>
          </Row>
        </Form>
        <Row gutter={[20, 20]} className="pt-6">
          <Col span={24} className="text-left text-4xl">
            {review[0]?.course_name}
          </Col>
          {!review[0]?.course_name ? ("ไม่มีรีวิววิชานี้"):(
            <div>
              {review?.map((item: any, index: any) => (
            <Card
              style={{ width: "100%" }}
              className="bg-[#F9ECCE] w-[100%]  rounded-md !text-left"
            >
              <Paragraph
                ellipsis={
                  ellipsis
                    ? { rows: 5, expandable: true, symbol: "more" }
                    : false
                }
              >
                {parse(item?.review_detail)} 
              </Paragraph>
              <div className=" border-b-2 pb-3 mb-2 mt-4">
                โดย : {item?.nickName}
              </div>
              <div className="justify-between flex">
                <Button
                  className=" text-[black] bg-[#FED584] "
                  onClick={(e) => {
                    setInreviw(item);
                    showModal2();
                  }}
                >
                  {"ดูรีวิวนี้"}
                </Button>
                <Button
                  className=" text-[black] bg-[#FED584]   "
                  onClick={showModal}
                >
                  {"รายงาน"}
                </Button>
              </div>
            </Card>
          ))}</div>
          )}
          
        </Row>

        <Modal
          title="รายงานรีวิว"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
            <Row gutter={[12, 12]}>
              <Col span={24}>
                <Checkbox value="A">ใช้ถ้อยคำหยาบคาย</Checkbox>
              </Col>
              <Col span={24}>
                <Checkbox value="B">
                  ใช้ข้อความที่เป็นเท็จหรือเกินความจริง
                </Checkbox>
              </Col>
              <Col span={24}>
                <Checkbox value="C">
                  ใช้ข้อความที่จะก่อให้เกิดความเข้าใจผิดในสาระสำคัญ
                </Checkbox>
              </Col>
              <Col span={24}>
                <Checkbox value="D">
                  ใช้ข้อความที่จะทำให้เกิดความแตกแยกหรือเสื่อมเสียความสามัคคีในหมู่ประชาชน
                </Checkbox>
              </Col>
              <Col span={24}>
                <Checkbox value="E">
                  ใช้ข้อความที่เป็นการสนับสนุนให้มีการกระทำผิดกฎหมายหรือศีลธรรม
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Modal>

        <Modal
          title="รีวิว"
          open={isModalOpen2}
          onOk={handleOk2}
          onCancel={handleCancel2}
          footer={null}
        >
          <div className="border-2 p-4 border-[#F9ECCE] rounded-lg">
            <div>{inreview?.course_name}</div>
            <div>{inreview?.review_detail}</div>
            <div>{inreview?.satisfied_point}</div>
            <div>เกรดที่ได้ : {inreview?.grade} </div>
            <div>
              ปีการศึกษา : {inreview?.semester} เทอม : {inreview?.term}
            </div>
            <div> </div>
            <div></div>
          </div>
          <Button htmlType="submit">Submit</Button>

          <div className="border-2 m-4 p-4 border-[#F9ECCE] rounded-lg">
            <div>test</div>
          </div>
          <Form layout="vertical" name="comment" onFinish={onFComment}>
            <Form.Item name="comment_detail">
              <Input.Group compact>
                <Input
                  style={{ width: "calc(100% - 75px)" }}
                  placeholder="แสดงความิดเห็น"
                />
                <Button htmlType="submit">Submit</Button>
              </Input.Group>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
};
export default Review;

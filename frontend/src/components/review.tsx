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
  InputNumber,
  MenuProps,
  Dropdown,
  Space,
  notification,
  Tooltip,
} from "antd";
import { Col } from "antd/es/grid";
import { Image } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
import { useReview } from "./context/review";
import { baseURL } from "./login";
import { log } from "console";
import parse from "html-react-parser";
import { useUser } from "./context/user";
import { EllipsisOutlined, EyeOutlined, LikeOutlined } from "@ant-design/icons";

const { Paragraph, Text } = Typography;

const Review = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [form2] = Form.useForm();
  const [form3] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { courseId } = useReview();
  const [review, setReview] = useState<any[]>([]);
  const [comment, setComment] = useState<any[]>([]);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [inreview, setInreviw] = useState<any>();
  const [ellipsis, setEllipsis] = useState(true);
  const { user, setUser, userDetail, setUserDetail } = useUser();
  const [commentId, setCommentId] = useState();
  const [like, setLike] = useState<number>();
  const [view, setView] = useState<number>();
  useEffect(() => {
    getReviewCourse();
  }, [courseId]);

  const onLikeCilck = async (e: any) => {
    console.log("like_post", e?.like_post);
    setLike(Number(e?.like_post) + 1);
    console.log("like", Number(like));
    
    await baseURL
      .patch(`/reviews/${e?.id}`, { like_post: like })
      .then((res: any) => {
        // localStorage.setItem("access-token", e.data.access_token);
        // setLike(Number(e?.like_post) + 1);
        getReviewCourse();
        console.log("tttt", res);
      });
  };
  const onViewCilck = async (e: any) => {
    console.log("setView", e?.setView);
    setLike(Number(e?.setView) + 1);
    console.log("view", Number(view));
    
    await baseURL
      .patch(`/reviews/${e?.id}`, { view_post: view })
      .then((res: any) => {
        // localStorage.setItem("access-token", e.data.access_token);
        // setLike(Number(e?.like_post) + 1);
        getReviewCourse();
        console.log("tttt", res);
      });
  };
  const onSearch = (e: any) => {
    // if (!e.semester && !e.orderBy ) {
    //   getReviewCourse();
    // } else {
    //   console.log("e",e)
    //   baseURL
    //     .get(
    //       `/review?semester=${e.semester}`
    //     )
    //     .then((res) => {
    //       setReview(res.data);
    //     });
    // }
  };

  const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log("checked = ", checkedValues);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const onFReport = async (e: any) => {
    form3.resetFields();
    console.log("event", e);
    let reports_detail = "";
    for (let i = 0; i < e.reports_detail.length; i++) {
      // if ((i = 0)) {
      //   reports_detail = `${e?.reports_detail[i]}`;
      // }
      reports_detail = `${reports_detail}${e?.reports_detail[i]}, `;
    }
    console.log(reports_detail);
    delete e.reports_detail;

    await baseURL
      .post(`/report`, {
        ...e,
        report_detail: reports_detail,
        user_id: userDetail?.id,
        nickName: userDetail?.nickName,
        review_id: inreview?.id,
      })
      .then((res) => {
        console.log("ส่งค่าจ้าา", res.data);
      });
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModal2 = () => {
    setIsModalOpen2(true);
    // setLike((inreview?.like_post))
  };

  const handleCancel2 = () => {
    setIsModalOpen2(false);
    setComment([]);
  };

  const getReviewCourse = async () => {
    await baseURL.get(`/reviews?course_id=${courseId}`).then((res) => {
      console.log(res.data);
      setReview(res.data);
    });
  };

  const openNotification = () => {
    notification.open({
      message: "คำเเตือน!!!",
      description: `กรุณาเข้าสู่ระบบก่อนแสดงความคิดเห็น `,
    });
  };
  const onFComment = async (e: any) => {
    if (user !== undefined && userDetail?.id !== undefined) {
      await baseURL
        .post(`/comment`, {
          ...e,
          user_id: userDetail?.id,
          nickName: userDetail?.nickName,
          review_id: inreview?.id,
        })
        .then((res: any) => {
          getComment(res.data?.review_id);
          console.log(res.data);
          form2.resetFields();
        });
    } else {
      openNotification();
    }
  };

  const getComment = async (id: string) => {
    await baseURL.get(`/comment?review_id=${id}`).then((res) => {
      console.log("comentttttt", res.data);
      setComment(res.data);
    });
  };

  const deleteComment = async (e: any) => {
    await baseURL.delete(`/comment/${commentId}`).then((res) => {
      console.log("comentttttt", res.data);
      getComment(inreview?.id);
    });
  };

  const items: MenuProps["items"] = [
    {
      label: <a onClick={deleteComment}>ลบ</a>,
      key: "0",
    },
  ];

  return (
    <div className="w-[100%] h-[100vh] ">
      <div className="px-[40vh] pt-[50px] pb-[100px] text-center justify-center ">
        <Form form={form} layout="vertical" onFinish={onSearch}>
          <Row gutter={[12, 6]}>
            <Col span={6}>
              <Form.Item name="semester" label="ปี">
                <Input placeholder="ปี" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                name="orderBy"
                label="เรียงตาม"
                initialValue="created_at"
              >
                <Select>
                  <Select.Option value="created_at">ทั้งหมด</Select.Option>
                  <Select.Option value="like_post">ยอดไลก์</Select.Option>
                  <Select.Option value="view_post">ยอดวิว</Select.Option>
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
        </Row>
        {!review[0]?.course_name ? (
          "ไม่มีรีวิววิชานี้"
        ) : (
          <div>
            {review?.map((item: any, index: any) => (
              <Card
                style={{ width: "100%" }}
                className="bg-[#F9ECCE] rounded-md !text-left mb-3"
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
                  <div>
                  <Button
                    className=" text-[black] bg-[#FED584] "
                    onClick={async (e) => {
                      await setInreviw(item);
                      console.log("item", item);
                      showModal2();
                      getComment(item?.id);
                      getReviewCourse();
                      // setView(item?.view_post);
                      // onViewCilck(item);
                    }}
                  >
                    {"ดูรีวิวนี้"}
                  </Button>
                  <Tooltip title="Double click!!">
                  <Button
                    className=" text-[black] bg-[#FED584] "
                    onClick={() => {
                      // setLike(item?.like_post+1);
                      // getReviewCourse();
                      console.log("item?.like_post", item?.like_post);
                      // likeC();
                      // onLikeCilck(item);
                      getReviewCourse();
                    }}
                  >
                    {"ถูกใจ"}
                  </Button>
                  </Tooltip>
                  </div>
                  <div>
                    <span className="mr-4">
                      <LikeOutlined /> {item?.like_post}
                    </span>
                    <span className="mr-4">
                      <EyeOutlined /> {item?.view_post}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      <Modal
        title="รายงาน"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form name="report" form={form3} onFinish={onFReport}>
          <Form.Item name="reports_detail">
            <Checkbox.Group style={{ width: "100%" }}>
              <Row gutter={[12, 12]}>
                <Col span={24}>
                  <Checkbox value="ใช้ถ้อยคำหยาบคาย">ใช้ถ้อยคำหยาบคาย</Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox value="ใช้ข้อความที่เป็นเท็จหรือเกินความจริง">
                    ใช้ข้อความที่เป็นเท็จหรือเกินความจริง
                  </Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox value="ใช้ข้อความที่จะก่อให้เกิดความเข้าใจผิดในสาระสำคัญ">
                    ใช้ข้อความที่จะก่อให้เกิดความเข้าใจผิดในสาระสำคัญ
                  </Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox value="ใช้ข้อความที่จะทำให้เกิดความแตกแยกหรือเสื่อมเสียความสามัคคีในหมู่ประชาชน">
                    ใช้ข้อความที่จะทำให้เกิดความแตกแยกหรือเสื่อมเสียความสามัคคีในหมู่ประชาชน
                  </Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox value="ใช้ข้อความที่เป็นการสนับสนุนให้มีการกระทำผิดกฎหมายหรือศีลธรรม">
                    ใช้ข้อความที่เป็นการสนับสนุนให้มีการกระทำผิดกฎหมายหรือศีลธรรม
                  </Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">ยืนยัน</Button>
            <Button onClick={handleCancel}>ยกเลิก</Button>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title={`โดย : ${inreview?.nickName}`}
        open={isModalOpen2}
        onCancel={handleCancel2}
        footer={null}
        className=" !w-[100vh]"
      >
        <div className="border-2 p-4 border-[#F9ECCE] rounded-lg">
          <div className="flex justify-between">
            <div>{inreview?.course_name}</div>
            <div>
              <a
                onClick={async (e) => {
                  e.preventDefault();
                  showModal();
                  await setInreviw(inreview);
                  // console.log("eeee", e);
                }}
              >
                รายงาน
              </a>
            </div>
          </div>
          <Divider className="m-0" />
          <div className="p-4">
            <Paragraph
              ellipsis={
                ellipsis ? { rows: 5, expandable: true, symbol: "more" } : false
              }
            >
              {parse(String(inreview?.review_detail))}
            </Paragraph>
          </div>
          <Divider className="m-0" />
          <div>เนื้อหาและความหน้าสนใจ :{inreview?.satisfied_point}/100</div>
          <div>จำนวนงานและความเหมาะสม :{inreview?.appropriate_point}/100</div>
          <div>อาจารย์ผู้สอน :{inreview?.teacher_point}/100</div>
          <div>เกรดที่ได้ : {inreview?.grade} </div>
          <div>
            ปีการศึกษา : {inreview?.semester} เทอม : {inreview?.term}
          </div>
          <Divider className="mt-0" />
          <div className="flex">
            <div>ถูกใจ:{inreview?.like_post}</div>
            <div className="ml-4">ยอดวิว :{inreview?.view_post} </div>
          </div>
        </div>
        <Button
          onClick={() => {
            onLikeCilck(inreview?.like_post);
            getReviewCourse();
          }}
          className="mb-5"
        >
          ถูกใจ
        </Button>
        {comment?.map((item: any, index: any) => (
          <div>
            <div className="flex justify-between">
              <div>{item?.nickName}</div>
              {String(userDetail?.id) === String(item?.user_id) ? (
                <div>
                  <Dropdown menu={{ items }} trigger={["click"]}>
                    <a
                      onClick={async (e) => {
                        e.preventDefault();
                        await setCommentId(item?.id);
                        // console.log("eeee", e);
                      }}
                    >
                      <Space>
                        <EllipsisOutlined />
                      </Space>
                    </a>
                  </Dropdown>
                </div>
              ) : null}
            </div>

            <div className="border-2 m-4 p-4 border-[#F9ECCE] rounded-lg">
              <div>{item?.comment_detail}</div>
            </div>
          </div>
        ))}

        <Form
          layout="vertical"
          name="comment"
          form={form2}
          onFinish={onFComment}
        >
          <Form.Item name="comment_detail">
            <div className=" flex">
              <Input
                style={{ width: "calc(100% - 75px)", borderRight: "none" }}
                placeholder="แสดงความิดเห็น"
              />
              <Button htmlType="submit">Submit</Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
export default Review;

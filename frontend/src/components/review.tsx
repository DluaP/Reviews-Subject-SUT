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
  message,
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
import { EllipsisOutlined, EyeOutlined, LikeOutlined,SendOutlined } from "@ant-design/icons";
import { fireNotification } from "./notification";

const { Paragraph, Text } = Typography;

const Review = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [form2] = Form.useForm();
  const [form3] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { courseId } = useReview();
  const [review, setReview] = useState<any[] | any>([]);
  const [comment, setComment] = useState<any[]>([]);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [inreview, setInreviw] = useState<any>();
  const [ellipsis, setEllipsis] = useState(true);
  const { user, setUser, userDetail, setUserDetail } = useUser();
  const [commentId, setCommentId] = useState();
  const [like, setLike] = useState<number>();
  const [view, setView] = useState<number>();
  let likeNumber = 0;
  let viewNumber = 0;
  useEffect(() => {
    getReviewCourse();
  }, [courseId]);

  const onSearch = async (e: any) => {
    if (!e.semester && e.orderBy === "created_at") {
      getReviewCourse();
    } else if (e.semester && e.orderBy === "created_at") {
      delete e.orderBy;
      await baseURL
        .get(`/reviews?course_id=${courseId}&semester=${Number(e.semester)}`)
        .then((res) => {
          setReview(res.data);
        });
    } else if (e.orderBy === "like_post") {
      delete e.orderBy;
      await baseURL
        .get(
          `/reviews?course_id=${courseId}&semester=${Number(
            e.semester
          )}&like_post="DESC"`
        )
        .then((res) => {
          setReview(res.data);
        });
    } else if (e.orderBy === "view_post") {
      delete e.orderBy;
      await baseURL
        .get(
          `/reviews?course_id=${courseId}&semester=${Number(
            e.semester
          )}&view_post="DESC"`
        )
        .then((res) => {
          setReview(res.data);
        });
    } else getReviewCourse();
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const onFReport = async (e: any) => {
    if (user !== undefined) {
      form3.resetFields();
      let reports_detail = "";
      for (let i = 0; i < e.reports_detail.length; i++) {
        <div key={i}></div>;
        // if ((i = 0)) {
        //   reports_detail = `${e?.reports_detail[i]}`;
        // }
        reports_detail = `${reports_detail}${e?.reports_detail[i]}, `;
      }
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
          if (res.status == 201 || 200) {
            fireNotification({ type: "success" });
          } else {
            fireNotification({ type: "error" });
          }
        })
        .catch((e: any) => {
          fireNotification({ type: "error", description: `${e?.message}` });
        });
      setIsModalOpen(false);
    } else {
      openNotification2();
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form3.resetFields();
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
      setReview(res.data);
    });
  };

  const openNotification = () => {
    notification.open({
      message: "คำเเตือน!!!",
      description: `กรุณาเข้าสู่ระบบก่อนแสดงความคิดเห็น `,
    });
  };
  const openNotification2 = () => {
    notification.open({
      message: "คำเเตือน!!!",
      description: `กรุณาเข้าสู่ระบบก่อนรายงาน `,
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
          form2.resetFields();
        })
        .catch((e: any) => {
          fireNotification({ type: "error", description: `${e?.message}` });
        });
    } else {
      openNotification();
    }
  };

  const getComment = async (id: string) => {
    await baseURL.get(`/comment?review_id=${id}`).then((res) => {
      setComment(res.data);
    });
  };

  const deleteComment = async (e: any) => {
    await baseURL
      .delete(`/comment/${commentId}`)
      .then((res) => {
        getComment(inreview?.id);
        if (res.status == 201 || 200) {
          fireNotification({ type: "success" });
        } else {
          fireNotification({ type: "error" });
        }
      })
      .catch((e: any) => {
        fireNotification({ type: "error", description: `${e?.message}` });
      });
  };

  const items: MenuProps["items"] = [
    {
      label: <a onClick={deleteComment}>ลบ</a>,
      key: "0",
    },
  ];

  const info = () => {
    messageApi.open({
      type: 'info',
      content: `เยี่ยม!!`,
    });
  };
  const [messageApi, contextHolder] = message.useMessage();
  return (
    <div className="w-[100%] h-[100vh] ">
      <div className=" lg:px-[30vh] md:px-[10vh]  sm:px-[5vh] px-[20px] pt-[50px] pb-[100px] text-center justify-center ">
        <Form form={form} layout="vertical" onFinish={onSearch}>
          <Row gutter={[12, 6]}>
            <Col xs={24} md={12} lg={6}>
              <Form.Item name="semester" label="ปี" className="!m-0">
                <Input placeholder="ปี" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12} lg={6}>
              <Form.Item
                name="orderBy"
                label="เรียงตาม"
                initialValue="created_at"
                className="!m-0"
              >
                <Select>
                  <Select.Option value="created_at">ทั้งหมด</Select.Option>
                  <Select.Option value="like_post">ยอดไลก์</Select.Option>
                  <Select.Option value="view_post">ยอดวิว</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Form.Item className="!m-0">
                <Button
                  htmlType="submit"
                  className="w-[100%] text-[white] bg-[#46B072] top-7"
                >
                  ค้นหา
                </Button>
              </Form.Item>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Form.Item className="!m-0">
                <Button
                  className="w-[100%] top-7 "
                  onClick={() => {
                    form.resetFields();
                  }}
                >
                  ล้างข้อมูล
                </Button>
              </Form.Item>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Form.Item className="!mx-0 !mt-0 !mb-4">
                <Button
                  className="w-[100%] top-7 "
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  ย้อนกลับ
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <Row gutter={[20, 20]} className="pt-6">
          <Col span={24} className="text-left text-4xl pt-6 pb-4">
            {review[0]?.course_name}
          </Col>
        </Row>
        {!review[0]?.course_name ? (
          "ไม่มีรีวิววิชานี้"
        ) : (
          <div>
            {review?.map((item: any, index: any) => (
              <Card
                key={item?.id}
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
                      className=" text-[black] bg-[#FED584]"
                      onClick={async (e) => {
                        showModal2();
                        getComment(item?.id);
                        getReviewCourse();
                        viewNumber = item?.view_post + 1;
                        await baseURL
                          .patch(`reviews/${item?.id}`, {
                            view_post: viewNumber,
                          })
                          .then((res) => {
                            setInreviw({ ...item, view_post: viewNumber });
                            getReviewCourse();
                          });
         
  
                      }}
                    >
                      {"ดูรีวิวนี้"}
                    </Button>
                   
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
            <div>
              <LikeOutlined />:{inreview?.like_post}
            </div>
            <div className="ml-4">
              <EyeOutlined /> :{inreview?.view_post}{" "}
            </div>
          </div>
        </div>
        {contextHolder}
        <Button
          onClick={async () => {
            likeNumber = inreview?.like_post + 1;
            await baseURL
              .patch(`reviews/${inreview?.id}`, {
                like_post: likeNumber,
              })
              .then((res) => {
                setInreviw({ ...inreview, like_post: likeNumber });
                getReviewCourse();
                info();
              });
          }}
          className="mb-5"
        >
          <LikeOutlined /> ถูกใจ
        </Button>
        {comment?.map((item: any, index: any) => (
          <div key={item?.id}>
            <div className="flex justify-between">
              <div>{item?.nickName}</div>
              {String(userDetail?.id) === String(item?.user_id) ||
              String(userDetail?.status) === "admin" ? (
                <div>
                  <Dropdown menu={{ items }} trigger={["click"]}>
                    <a
                      onClick={async (e) => {
                        e.preventDefault();
                        await setCommentId(item?.id);
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
              <Button htmlType="submit" >ส่ง</Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
export default Review;

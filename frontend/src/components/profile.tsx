import {
  Affix,
  Button,
  Divider,
  Drawer,
  Form,
  Input,
  Popconfirm,
  Row,
  Select,
  Typography,
  notification,
} from "antd";
import form from "antd/es/form";
import { Col } from "antd/es/grid";
import { Image } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./context/user";
import { baseURL } from "./login";
import { useReview } from "./context/review";
import parse from "html-react-parser";
import { fireNotification } from "./notification";
import Student from "../components/images/Student.png"
import Admin from "../components/images/Admin.png"
import Teacher from "../components/images/Teacher.png"

const Profile = () => {
  const navigate = useNavigate();
  const { user, setUser, userDetail, setUserDetail } = useUser();
  const { setEditReview } = useReview();
  const [form] = Form.useForm();
  const [review, setReview] = useState<any[]>([]);
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
    getReviewUserId();
    session();
  }, []);
  const getReviewUserId = async () => {
    await baseURL.get(`/reviews?user_id=${userDetail?.id}`).then((res) => {
      setReview(res.data);
    });
  };

  const handleDelete = async (id: any) => {
    await baseURL
      .delete(`/reviews/${id}`)
      .then((res) => {
        getReviewUserId();
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
  return (
    <div className="w-[100%] h-[100vh] ">
      <div className=" lg:px-[30vh] md:px-[10vh]  sm:px-[5vh] px-[20px] pt-[50px] pb-[100px] text-center justify-center ">
        <Row gutter={[12, 12]}>
          <Col xs={24} md={24} lg={8}>
            <div className="border-2 border-[#F9ECCE] rounded-lg">
              <Row gutter={[12, 12]} className="p-6">
                <Col span={24}>
                  {userDetail?.status === "admin" ? (
                    <Image
                      src={Admin}
                      preview={false}
                      style={{ width: "100px", height: "100px" }}
                      className="rounded-full text-center"
                    />
                  ) : userDetail?.status === "teacher" ? (
                    <Image
                      src={Teacher}
                      preview={false}
                      style={{ width: "100px", height: "100px" }}
                      className="rounded-full text-center"
                    />
                  ) : (
                    <Image
                      src={Student}
                      preview={false}
                      style={{ width: "100px", height: "100px" }}
                      className="rounded-full text-center"
                    />
                  )}
                </Col>
                <Col span={24}>{userDetail?.nickName}</Col>
                <div className=" text-left">
                  <Col span={24}>{userDetail?.bio}</Col>
                  <Col span={24} className="pt-4">
                    Facebook : {userDetail?.facebook}
                  </Col>
                  <Col span={24}>Instagram : {userDetail?.ig}</Col>
                  <Col span={24}>Email : {userDetail?.email}</Col>
                </div>
              </Row>
            </div>
          </Col>
          {/* ข้อมูลส่วนนี้ต้องทำเป็น for loop*/}
          <Col xs={24} md={24} lg={16}>
            <div className=" text-left border-2 p-4 border-[#F9ECCE] rounded-lg">
              {review.length > 0 ? (
                <>
                  {review?.map((item: any, index: any) => (
                    <>
                      <div className="!text-lx" key={item?.id}>
                        {item?.course_name}
                      </div>
                      <div>{parse(item?.review_detail)}</div>
                      <Divider className="m-1" />
                      <Row>
                        <Col xs={7} md={5} lg={3}>
                          <Button
                            className="w-[100%] "
                            onClick={() => {
                              setEditReview(item);
                              navigate("/edit-post");
                            }}
                          >
                            แก้ไข
                          </Button>
                        </Col>

                        <Col xs={7} md={5} lg={3} className="ml-2">
                          <Popconfirm
                            key={item?.id}
                            title="ยืนยันการลบ ?"
                            cancelText="ยกเลิก"
                            okText="ยืนยัน"
                            okType="default"
                            onConfirm={() => {
                              handleDelete(item?.id);
                            }}
                          >
                            <Button className="w-[100%] ">ลบ</Button>
                          </Popconfirm>
                        </Col>
                      </Row>
                    </>
                  ))}
                </>
              ) : (
                <>NO REVIEW</>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Profile;

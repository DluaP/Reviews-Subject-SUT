import {
  Affix,
  Button,
  Divider,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Typography,
} from "antd";
import form from "antd/es/form";
import { Col } from "antd/es/grid";
import { Image } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./context/user";
import { baseURL } from "./login";

const Profile = () => {
  const navigate = useNavigate();
  const { userDetail } = useUser();
  const [form] = Form.useForm();
  const [review, setReview] = useState<any[]>([]);
  const onFinish = (e: any) => {
    console.log(e);
  };
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    getReviewUserId();
  }, []);
  const getReviewUserId = () => {
    baseURL.get(`/reviews?user_id=${userDetail?.id}`).then((res) => {
      console.log(res.data);
      setReview(res.data);
    });
  };
  return (
    <div className="w-[100%] h-[100vh] ">
      <div className="px-[40vh] pt-[50px] pb-[100px] text-center justify-center ">
        <Row gutter={[12, 12]}>
          <Col span={8}>
            <div className="border-2 border-[#F9ECCE] rounded-lg">
              <Row gutter={[12, 12]} className="p-6">
                <Col span={24}>
                  <Image
                    src="./images/test-men.jpg"
                    preview={false}
                    style={{ width: "100px", height: "100px" }}
                    className="rounded-full text-center"
                  />
                </Col>
                <Col span={24}>{userDetail.nickName}</Col>
                <div className=" text-left">
                  <Col span={24}>{userDetail.bio}</Col>
                  <Col span={24} className="pt-4">
                    Facebook : {userDetail.facebook}
                  </Col>
                  <Col span={24}>Instagram : {userDetail.ig}</Col>
                  <Col span={24}>Email : {userDetail.email}</Col>
                </div>
              </Row>
            </div>
          </Col>
          {/* ข้อมูลส่วนนี้ต้องทำเป็น for loop*/}
          <Col span={16}>
            <div className=" text-left border-2 p-4 border-[#F9ECCE] rounded-lg">
              {review?.map((item: any, index: any) => (
                <>
                  <div className="!text-lx">{item?.course_name}</div>
                  <div>{item?.review_detail}</div>
                  <Divider className="m-1" />
                  <Row>
                    <Col span={3}>
                      <Button
                        className="w-[100%] "
                        onClick={() => {
                          navigate("/edit-post");
                        }}
                      >
                        แก้ไข
                      </Button>
                    </Col>

                    <Col span={3}>
                      <Button className="w-[100%] ">ลบ</Button>
                    </Col>
                  </Row>
                </>
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Profile;

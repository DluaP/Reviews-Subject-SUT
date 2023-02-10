import { DeleteOutlined } from "@ant-design/icons";
import {
  Popconfirm,
  Row,
  Space,
  Typography,
  Form,
  Col,
  Button,
  Input,
  Table,
  notification,
} from "antd";
import { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import parse from "html-react-parser";
import { baseURL } from "./login";
import { useUser } from "./context/user";
import { useNavigate } from "react-router-dom";
import { fireNotification } from "./notification";

export interface IreviewManagement {
  id: number;
  username: string;
  mickName: string;
  user_id: string;
  course_id: string;
  course_name: string;
  review_detail: string;
  satisfied_point: string;
  appropriate_point: string;
  teacher_point: string;
  grade: string;
  semester: string;
  term: string;
  view_post: number;
  like_post: number;
  create_date: string;
}

const ReviewsManagement = () => {
  const [form] = Form.useForm();
  const [data1, setDatas] = useState([]);
  const navigate = useNavigate();
  const { user, setUser, userDetail, setUserDetail } = useUser();

  const openNotification = () => {
    notification.open({
      message: "คำเเตือน!!!",
      description: "โปรดเข้าสู่ระบบก่อนทำการเขียนรีวิว",
    });
  };

  const openNotification2 = () => {
    notification.open({
      message: "คุณไม่ใช่Admin!!!",
      description: "โปรดเข้าสู่ระบบใหม่",
    });
  };
  const session = () => {
    if (user !== undefined && userDetail?.id !== undefined) {
      if (String(userDetail?.status) !== "admin") {
        navigate("/login");
        openNotification2();
      } else {
      }
    } else {
      navigate("/login");
      openNotification();
    }
  };
  useEffect(() => {
    session();
  }, []);
  const onSearch = async (e: any) => {
    if (!e.id) {
      getData();
    } else {
      await baseURL.get(`/course?id=${e.id}`).then((res) => {
        setDatas(res.data);
      });
    }
  };

  const getData = async () => {
    await baseURL.get("/reviews").then((e: any) => {
      setDatas(e.data);
    });
  };

  const fetchData = async () => {
    await baseURL.get("/reviews").then((res) => {
      setDatas(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id: any) => {
    await baseURL
      .delete(`/reviews/${id}`)
      .then((res) => {
        fetchData();
        if (res.status == 201 || 200) {
          fireNotification({ type: "success" });
        } else {
          fireNotification({ type: "error" });
        }
      })
      .catch((e: any) => {
        fireNotification({ type: "error", description: `${e?.message}` });
      });
    getData();
  };

  const columns: ColumnsType<IreviewManagement> = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "ชื่อผู้ใช้",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "รหัสวิชา และ ชื่อวิชา",
      dataIndex: "course_name",
      key: "course_name",
    },
    {
      title: "ข้อความ",
      // dataIndex: "firstName",
      key: "review_detail",
      render: (_, rc) => {
        return (
          <>
            <Typography.Text ellipsis={true} className="w-[200px] !h-[60px]">
              {parse(String(rc?.review_detail))}
            </Typography.Text>
          </>
        );
      },
    },

    {
      title: "จัดการ",
      // dataIndex: "manage",
      render: (_, record) =>
        data1.length >= 1 ? (
          <Space size="middle" key={record?.id}>
            <Popconfirm
              key={record?.id}
              title="ยืนยันการลบ ?"
              cancelText="ยกเลิก"
              okText="ยืนยัน"
              okType="default"
              onConfirm={() => {
                handleDelete(record.id);
              }}
            >
              <DeleteOutlined />
            </Popconfirm>
          </Space>
        ) : null,
    },
  ];

  return (
    <div className="w-[100%] h-[100vh] ">
      <div className=" lg:px-[30vh] md:px-[10vh]  sm:px-[5vh] px-[20px] pt-[50px] pb-[100px] text-center justify-center ">
        <Form name="Search" layout="vertical" form={form} onFinish={onSearch}>
          <Row gutter={[12, 6]} className="pb-4">
            <Col xs={24} md={12} lg={6}>
              <Form.Item name="id" label="Id">
                <Input placeholder="Id" />
              </Form.Item>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Form.Item className="!m-0">
                <Button
                  htmlType="submit"
                  className="w-[100%] text-[white] bg-[#45B072] top-7"
                >
                  ค้นหา
                </Button>
              </Form.Item>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Form.Item className="!m-0">
                <Button
                  className="w-[100%] top-7"
                  onClick={() => {
                    form.resetFields();
                    getData();
                  }}
                >
                  ล้างข้อมูล
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>

        <div className="text-left text-2xl p-4">
          จัดการรีวิว <br />
        </div>
        <Table dataSource={data1} columns={columns} pagination={false} />
      </div>
    </div>
  );
};

export default ReviewsManagement;

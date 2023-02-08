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
      message: 'คำเเตือน!!!',
      description:
        'โปรดเข้าสู่ระบบก่อนทำการเขียนรีวิว',
    });
  };
  
  const session = () => {
    if(user !== undefined && userDetail?.status !== "admin"){
    }else{
      navigate("/login");
      openNotification();
    }
  }
  useEffect(() => {
    session()
  }, []);
  const onSearch = (e: any) => {};

  const getData = () => {
    baseURL.get("/reviews").then((e: any) => {
      setDatas(e.data);
    });
  };

  const fetchData = () => {
    baseURL.get("/reviews").then((res) => {
      setDatas(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (id: any) => {
    baseURL.delete(`/reviews/${id}`).then((res) => {
      fetchData();
      console.log("1111");
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
                // console.log("de;ete", record.id);
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
      <div className="px-[40vh] pt-[50px] pb-[100px] text-center justify-center ">
        <Form name="s" layout="vertical" form={form} onFinish={onSearch}>
          <Row gutter={[12, 6]}>
            <Col span={5}>
              <Form.Item name="username" label="ชื่อผู้ใช้">
                <Input placeholder="ขื่อผู้ใช้" />
              </Form.Item>
            </Col>
            <Col span={5}>
              <Form.Item name="firstName" label="ชื่อ">
                <Input placeholder="ขื่อ" />
              </Form.Item>
            </Col>
            <Col span={5}>
              <Form.Item name="lastName" label="นามสกุล">
                <Input placeholder="นามสกุล" />
              </Form.Item>
            </Col>
            <Col span={5}>
              <Form.Item name="nickName" label="ชื่อเล่น">
                <Input placeholder="ขื่อเล่น" />
              </Form.Item>
            </Col>
            <Col span={2}>
              <Button
                htmlType="submit"
                className="w-[100%] text-[white] bg-[#45B072] top-7"
              >
                ค้นหา
              </Button>
            </Col>
            <Col span={2}>
              <Button
                className="w-[100%] top-7 "
                onClick={() => {
                  form.resetFields();
                  getData();
                }}
              >
                ล้างข้อมูล
              </Button>
            </Col>
          </Row>
        </Form>
        <div className="border-2 border-[#F9ECCE] rounded-lg text-left p-4">
          <div className="text-left text-2xl">
            จัดการผู้ใช้ <br />
          </div>
          <Table dataSource={data1} columns={columns} pagination={false} />
        </div>
      </div>
    </div>
  );
};

export default ReviewsManagement;
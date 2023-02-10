import {
  Button,
  Form,
  Input,
  Row,
  Select,
  Table,
  Space,
  Popconfirm,
  Card,
  Col,
  notification,
} from "antd";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DeleteOutlined, FormOutlined } from "@ant-design/icons";
import { ColumnsType } from "antd/es/table";
import { baseURL } from "./login";
import { useUser } from "./context/user";
import { fireNotification } from "./notification";

export interface IuserManagement {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  nickName: string;
  facebook: string;
  ig: string;
  email: string;
  bio: string;
  avatar: string;
  status: string;
  create_date?: string;
  update_date?: string;
}

const UserManagement = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [data1, setDatas] = useState([]);
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
    if (!e.username && !e.lastName && !e.firstName && !e.nickName) {
      getData();
    } else {
      await baseURL
        .get(
          `/users?username=${e.username}&firstName=${e.firstName}&lastName=${e.lastName}&nickName=${e.nickName}`
        )
        .then((res) => {
          setDatas(res.data);
        });
    }
  };

  const getData = () => {
    baseURL.get("/users").then((e: any) => {
      setDatas(e.data);
    });
  };

  const fetchData = async () => {
    await baseURL.get("/users").then((res) => {
      setDatas(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id: any) => {
    await baseURL
      .delete(`/users/${id}`)
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

  const columns: ColumnsType<IuserManagement> = [
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
      title: "ชื่อ-สกุล",
      // dataIndex: "firstName",
      key: "firstName",
      render: (_, rc) => {
        return (
          <>
            {rc?.firstName} {rc?.lastName}
          </>
        );
      },
    },
    {
      title: "ชื่อเล่น",
      dataIndex: "nickName",
      key: "nickName",
    },
    {
      title: "สถานะ",
      dataIndex: "status",
      render: (_, rc) => {
        return (
          <Select
            className="w-[100%]"
            placeholder="สถานะ"
            defaultValue={`${rc?.status}`}
            onChange={async (e) => {
              await baseURL
                .patch(`/users/${rc?.id}`, { status: e })
                .then((res) => {
                  if (res.status == 201 || 200) {
                    fireNotification({ type: "success" });
                  } else {
                    fireNotification({ type: "error" });
                  }
                })
                .catch((e: any) => {
                  fireNotification({
                    type: "error",
                    description: `${e?.message}`,
                  });
                });
            }}
            options={[
              { value: "student", label: "student" },
              { value: "teacher", label: "teacher" },
              { value: "admin", label: "admin" },
            ]}
          />
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
        <Form form={form} layout="vertical" onFinish={onSearch}>
          <Row gutter={[12, 6]} className="pb-4">
            <Col xs={24} md={12} lg={6}>
              <Form.Item name="username" label="ชื่อผู้ใช้">
                <Input placeholder="ขื่อผู้ใช้" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12} lg={6}>
              <Form.Item name="firstName" label="ชื่อ">
                <Input placeholder="ขื่อ" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12} lg={6}>
              <Form.Item name="lastName" label="นามสกุล">
                <Input placeholder="นามสกุล" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12} lg={6}>
              <Form.Item name="nickName" label="ชื่อเล่น">
                <Input placeholder="ขื่อเล่น" />
              </Form.Item>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Form.Item className="!m-0 top-7">
                <Button
                  htmlType="submit"
                  className="w-[100%] text-[white] bg-[#45B072] "
                >
                  ค้นหา
                </Button>
              </Form.Item>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Form.Item className="!m-0 top-7">
                <Button
                  className="w-[100%]  "
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
          จัดการผู้ใช้ <br />
        </div>
        <Table dataSource={data1} columns={columns} pagination={false} />
      </div>
    </div>
  );
};
export default UserManagement;

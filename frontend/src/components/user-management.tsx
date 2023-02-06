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
  Table,
  Space,
  Tag,
  Typography,
  Popconfirm,
} from "antd";
import form from "antd/es/form";
import { Col } from "antd/es/grid";
import { Image } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
import { DeleteOutlined, FormOutlined } from "@ant-design/icons";
import { render } from "@testing-library/react";
import { ColumnsType } from "antd/es/table";
import { baseURL } from "./login";

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
  isActive: string;
  create_date?: string;
  update_date?: string;
}

const UserManagement = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [data1, setDatas] = useState([]);

  const onFinish = (e: any) => {
    if (!e.username && !e.lastName && !e.firstName && !e.nickName) {
      test();
    } else {
      baseURL
        .get(
          `/users?username=${e.username}&firstName=${e.firstName}&lastName=${e.lastName}&nickName=${e.nickName}`
        )
        .then((res) => {
          setDatas(res.data);
        });
    }
  };

  const test = () => {
    baseURL.get("/users").then((e: any) => {
      setDatas(e.data);
    });
  };

  const fetchData = () => {
    baseURL.get("/users").then((res) => {
      setDatas(res.data);
    });
  };

  useEffect(() => {
    test();
  }, []);

  const handleDelete = (id: any) => {
    baseURL.delete(`/users/${id}`).then((res) => {
      fetchData();
      console.log("1111");
    });
    test();
  };
  const columns: ColumnsType<IuserManagement> = [
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
      <div className="text-center ">
        <button onClick={() => navigate("/")}>
          <Image
            style={{ width: "100%", height: "100%" }}
            src="./images/Logo.png"
            preview={false}
          />
        </button>
      </div>

      <div className="px-[40vh] pt-[50px] pb-[100px] text-center justify-center ">
        <Form form={form} layout="vertical" onFinish={onFinish}>
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
                  test();
                }}
              >
                ล้างข้อมูล
              </Button>
            </Col>
          </Row>
        </Form>
        <div className="text-left text-2xl">
          จัดการผู้ใช้ <br />
        </div>
        <Table dataSource={data1} columns={columns} pagination={false} />
      </div>
    </div>
  );
};
export default UserManagement;

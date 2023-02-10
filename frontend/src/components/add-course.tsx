import {
  Col,
  Form,
  Row,
  Image,
  Input,
  Button,
  Table,
  Space,
  Popconfirm,
  notification,
} from "antd";
import { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseURL } from "./login";
import { fireNotification } from "./notification";
import { DeleteOutlined } from "@ant-design/icons";
import { useUser } from "./context/user";
export interface IcourseManagement {
  id: number;
  course_id: string;
  course_name: string;
  create_date: string;
  update_date: string;
}

const AddCourse = () => {
  const [dataCourse, setDataCourse] = useState([]);
  const navigate = useNavigate();
  const { user, setUser, userDetail, setUserDetail } = useUser();
  const [form] = Form.useForm();

  const openNotification = () => {
    notification.open({
      message: "คำเเตือน!!!",
      description: "โปรดเข้าสู่ระบบก่อนทำการเขียนรีวิว",
    });
  };

  const session = () => {
    if (user !== undefined) {
    } else {
      navigate("/login");
      openNotification();
    }
  };
  useEffect(() => {
    session();
  }, []);

  const onSearch = async (e: any) => {
    if (!e.course_id && !e.course_name) {
      getData();
    } else {
      await baseURL
        .get(`/course?course_id=${e.course_id}&course_name=${e.course_name}`)
        .then((res) => {
          setDataCourse(res.data);
        })
        .catch((e: any) => {
          fireNotification({ type: "error", description: `${e?.message}` });
        });
    }
  };
  const onFinish = async (element: any) => {
    await baseURL
      .post("/course", element)
      .then((e: any) => {
        if (e.status == 201 || 200) {
          fireNotification({
            type: "success",
            description: "เพิ่มข้อมูลสำเร็จ",
          });
        } else {
          fireNotification({ type: "error" });
        }
        fetchData();
      })
      .catch((e: any) => {
        fireNotification({ type: "error", description: `${e?.message}` });
      });
  };

  const getData = async () => {
    await baseURL.get("/course").then((e: any) => {
      setDataCourse(e.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const fetchData = async () => {
    await baseURL.get("/course").then((res) => {
      setDataCourse(res.data);
    });
  };
  const handleDelete = async (id: any) => {
    await baseURL
      .delete(`/course/${id}`)
      .then((res) => {
        fetchData();
        if (res.status == 201 || 200) {
          fireNotification({ type: "success", description: "ลบข้อมูลสำเร็จ" });
        } else {
          fireNotification({ type: "error" });
        }
      })
      .catch((e: any) => {
        fireNotification({ type: "error", description: `${e?.message}` });
      });
    getData();
  };

  const columns: ColumnsType<IcourseManagement> = [
    {
      title: "รหัสวิชา",
      dataIndex: "course_id",
      key: "course_id",
    },
    {
      title: "ชื่อวิชา",
      dataIndex: "course_name",
      key: "course_name",
    },
    {
      title: "จัดการ",
      // dataIndex: "manage",
      render: (_, record) =>
        dataCourse.length >= 1 ? (
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
        <Form layout="vertical" name="addCourse" onFinish={onFinish}>
          <Row
            gutter={[12, 12]}
            className="border-2 border-[#F9ECCE] rounded-lg "
          >
            <Col span={24} className="p-4">
              <div className="text-xl text-left mb-4">เพิ่มวิชา</div>
              <div className="border-2 border-[#F9ECCE] rounded-lg text-left p-4">
                <Col span={24}>
                  <Form.Item name="course_id" label="รหัสวิชา">
                    <Input placeholder="รหัสวิชา" />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item name="course_name" label="ชื่อวิชา">
                    <Input placeholder="ชื่อวิชา" />
                  </Form.Item>
                </Col>
                <Col span={24} className="justify-end text-right ">
                  <Button htmlType="submit" className="  w-[10%] mr-2">
                    เพิ่ม
                  </Button>
                  <Button onClick={() => navigate("/")} className="w-[10%]">
                    ย้อนกลับ
                  </Button>
                </Col>
              </div>
            </Col>
          </Row>
        </Form>

        <Form form={form} layout="vertical" onFinish={onSearch}>
          <Row gutter={[12, 6]}>
            <Col xs={12} md={12} lg={6}>
              <Form.Item name="course_id" label="ชื่อผู้ใช้">
                <Input placeholder="ขื่อผู้ใช้" />
              </Form.Item>
            </Col>
            <Col xs={12} md={12} lg={6}>
              <Form.Item name="course_name" label="ชื่อ">
                <Input placeholder="ขื่อ" />
              </Form.Item>
            </Col>

            <Col xs={12} md={6} lg={3}>
              <Form.Item className="!m-0">
                <Button
                  htmlType="submit"
                  className="w-[100%] text-[white] bg-[#45B072] top-7 "
                >
                  ค้นหา
                </Button>
              </Form.Item>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Form.Item className="!m-0">
                <Button
                  className="!w-[100%] top-7"
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
        <div>
          <div className="py-4 text-left">จัดการวิชา</div>
          <Table dataSource={dataCourse} columns={columns} pagination={false} />
        </div>
      </div>
    </div>
  );
};

export default AddCourse;

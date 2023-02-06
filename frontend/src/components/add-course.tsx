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
} from "antd";
import { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseURL } from "./login";
import { fireNotification } from "./notification";
import { DeleteOutlined } from "@ant-design/icons";
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
  const onFinish = (element: any) => {
    console.log(element);
    baseURL.post("/course", element).then((e: any) => {
      console.log("tttt", e);
      fireNotification({ type: "success" });
      fetchData();
    });
  };

  const getData = () => {
    baseURL.get("/course").then((e: any) => {
      setDataCourse(e.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const fetchData = () => {
    baseURL.get("/course").then((res) => {
      setDataCourse(res.data);
    });
  };
  const handleDelete = (id: any) => {
    baseURL.delete(`/course/${id}`).then((res) => {
      fetchData();
      console.log("1111");
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
        <Form layout="vertical" onFinish={onFinish}>
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
                  <Button htmlType="submit" className="w-[10%] mr-2">
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

        <div>
          <div className="py-4 text-left" >จัดการวิชา</div>
          <Table dataSource={dataCourse} columns={columns} pagination={false} />
        </div>
      </div>
    </div>
  );
};

export default AddCourse;

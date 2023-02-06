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

  export interface IreportManagement {
    id: number;
    report_id : number;
    post_id: string;
    student_id: string;
    report_detail: string;
    create_date: string;
    update_date: string;

  }

  const ReportManagement = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [data1, setDatas] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const onFinish = (e: any) => {
      console.log(e);
    };

    
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  //ttt
  const onClose = () => {
    setOpen(false);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {    
    baseURL.get("/curse").then((e: any) => {
      setDatas(e.data);
      console.log("e.data",e.data);
      console.log("data",(data1));
    });

}, []);


const dataSource = [
    {
      key: "1",
      post_id: "202324-024",
      report_id: "คำหยาบ,พาดพิง",
      nickname: "ฟาร์มคนน่ารัก",
    },
  ];

  const columns = [
    {
      title: "โพสต์รีวิว",
      dataIndex: "post_id",
      key: "post_id",
    },
    {
      title: "การรายงาน",
      dataIndex: "report_id",
      key: "report_id",
    },
    {
      title: "จัดการ",
      dataIndex: "manage",
      key: "manage",
      render: () => {
        return (
          <span>
            <Space size="middle">
              <Typography.Link>
                <DeleteOutlined />
              </Typography.Link>
              <Typography.Link>
                <FormOutlined />
              </Typography.Link>
            </Space>
          </span>
        );
      },
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
            <Col span={6}>
              <Form.Item name="username" label="ชื่อผู้ใช้">
                <Input placeholder="ขื่อผู้ใช้" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="name" label="ชื่อ-สกุล">
                <Input placeholder="ขื่อ-สกุล" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="nickname" label="ชื่อเล่น">
                <Input placeholder="ขื่อเล่น" />
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
          </Row>
        </Form>
        <div className="text-left text-2xl">
          รายงานรีวิว <br />
        </div>
        <Table dataSource={dataSource} columns={columns} />;
      </div>

      <Drawer placement="right" onClose={onClose} open={open}>
        <div className="text-center justify-center items-center">
          <Image
            src="./images/test-men.jpg"
            preview={false}
            style={{ width: "100px", height: "100px" }}
            className="rounded-full text-center"
          />
          <p className="m-0">อ่อ ช่างแอ้</p>
        </div>
        <Divider className="my-1" />
        <div className="p-2"> <button className="w-[100%] text-left" onClick={() => navigate("/profile")}>โปรไฟล์</button> </div>
        <div className="p-2"> <button className="w-[100%] text-left" onClick={() => navigate("/create-post")}>เขียนรีวิว</button> </div>
        <div className="p-2"> <button className="w-[100%] text-left" onClick={() => navigate("/edit-profile")}>ตั้งค่าบัญชี</button> </div>
        <Divider className="my-1" />
        <div className="p-2">
          {" "}
          <button
            className="w-[100%] text-left"
            onClick={() => navigate("/login")}
          >
            เข้าสู่ระบบ{" "}
          </button>{" "}
        </div>
        <div className="p-2">
          {" "}
          <button
            className="w-[100%] text-left"
            onClick={() => navigate("/user-management")}
          >
            จัดการผู้ใช้{" "}
          </button>{" "}
        </div>
        <div className="p-2">
          {" "}
          <button
            className="w-[100%] text-left"
            onClick={() => navigate("/report-management")}
          >
            จัดการรายงาน{" "}
          </button>{" "}
        </div>
        <div className="p-2">
          {" "}
          <button className="w-[100%] text-left" onClick={() => navigate("/")}>
            ออกจากระบบ{" "}
          </button>{" "}
        </div>
      </Drawer>
    </div>
  );
};
export default ReportManagement;
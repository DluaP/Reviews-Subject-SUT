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
    notification,
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
import { useUser } from "./context/user";

  export interface IreportManagement {
    id:number;
    user_id:string;
    nickName:string;
    review_id:string;
    report_detail:string;
    created_at: Date;
    updated_at: Date;

  }

  const ReportManagement = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [data1, setDatas] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { user, setUser, userDetail, setUserDetail } = useUser();


  const openNotification = () => {
    notification.open({
      message: 'คำเเตือน!!!',
      description:
        'โปรดเข้าสู่ระบบก่อนทำการเขียนรีวิว',
    });
  };

  const openNotification2 = () => {
    notification.open({
      message: 'คุณไม่ใช่Admin!!!',
      description:
        'โปรดเข้าสู่ระบบใหม่',
    });
  };
  
  const session = () => {
    if(user !== undefined && userDetail?.id !== undefined){
      if( String(userDetail?.status) !== "admin"){
        console.log("userDetail?.status",userDetail?.status)
        navigate("/login");
        openNotification2();
      } 
      else{
      }
    }else{
      navigate("/login");
      openNotification();
    }
  }
  useEffect(() => {
    session()
  }, []);

  const onSearch = (e: any) => {
    if (!e.review_id) {
      getData();
    } else {
      baseURL
        .get(
          `/report?review_id=${e.review_id}`
        )
        .then((res) => {
          setDatas(res.data);
        });
    }
  };

    

    const getData = () => {
      baseURL.get("/report").then((e: any) => {
        setDatas(e.data);
      });
    };
  
    useEffect(() => {
      getData();
    }, []);
  
    const fetchData = () => {
      baseURL.get("/report").then((res) => {
        setDatas(res.data);
      });
    };
    const handleDelete = (id: any) => {
      baseURL.delete(`/report/${id}`).then((res) => {
        fetchData();
        console.log("1111");
      });
      getData();
    };
  



  const columns: ColumnsType<IreportManagement> = [
    {
      title: "โพสต์รีวิว Id",
      dataIndex: "review_id",
      key: "review_id",
    },
    {
      title: "การรายงาน",
      dataIndex: "report_detail",
      key: "report_detail",
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
                handleDelete(record.id)
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
      <div className=" lg:px-[30vh] md:px-[10vh]  sm:px-[5vh] px-[20px] pt-[50px] pb-[100px] text-center justify-center ">
        <Form form={form} layout="vertical" onFinish={onSearch}>
          <Row gutter={[12, 6]} className="pb-4">
          <Col xs={24} md={12} lg={6}>
              <Form.Item name="review_id" label="โพสต์รีวิว Id">
                <Input placeholder="โพสต์รีวิว Id" />
              </Form.Item>
            </Col>
            <Col xs={12} md={6} lg={3}>
            <Form.Item className="!m-0" >
              <Button
                htmlType="submit"
                className="w-[100%] text-[white] bg-[#46B072] "
              >
                ค้นหา
              </Button>
              </Form.Item>
            </Col>
            <Col xs={12} md={6} lg={3}>
            <Form.Item className="!m-0" >
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
        <div className="text-left text-2xl">
          รายงานรีวิว <br />
        </div>
        <Table dataSource={data1} columns={columns} />
      </div>

      
    </div>
  );
};
export default ReportManagement;
import { Divider, Drawer, Image, Row } from "antd";
import { useState } from "react";
const CreatePost = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div className=" w-[100%] h-[100vh] ">
        <div onClick={showDrawer}>
          <div className="text-right pr-12 pt-10 ">
            <Image
              style={{ width: 30, height: 30 }}
              src="./images/human.png"
              preview={false}
            />
          </div>
          <div className="text-right pr-10 pt-1"> โปรไฟล์ </div>
        </div>
        <div className="text-center pt-20">
          <Image src="./images/Logo.png" preview={false} />
        </div>
        <div className="px-[60vh]   !content-center"></div>
        <Row >
          
        </Row>
      </div>



      <Drawer placement="right" onClose={onClose} open={open}>
        <Image
          src="./images/test-men.jpg"
          preview={false}
          style={{ width: "100px", height: "100px" }}
          className="rounded-full text-center"
        />
        <p className="m-0">อ่อ ช่างแอ้</p>
        <Divider className="my-1" />
        <p>โปรไฟล์</p>
        <p>ตั้งค่าบัญชี</p>
        <Divider className="my-1" />
        <p>ออกจากระบบ</p>
      </Drawer>
    </div>
  );
};
export default CreatePost;

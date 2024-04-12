import React, { useState } from "react";
import { Button, Modal } from "antd";

type modalType = {
  title?:string,
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data?: JSX.Element,
  children?: React.ReactNode;
}
function CusModal({ open,title, setOpen, data,children  }: modalType) {

  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <Modal
        title={title}
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        width={"70rem"}
        okText={"ذخیره"}
        // okButtonProps={()=><Button></Button>}
        okType={"default"}
        cancelText={"لغو"}
      
      >
        {children }
      </Modal>
    </>
  );
}

export default CusModal;

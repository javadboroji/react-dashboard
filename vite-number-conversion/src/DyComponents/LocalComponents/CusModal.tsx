import React, { useState } from "react";
import { Button, Modal } from "antd";

type modalType = {
  title?: string,
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data?: JSX.Element,
  children?: React.ReactNode;
  size?: string,
  modalFooter?: any,
  handlerClose?: any,
  customizEstyle?: any
}
function CusModal({ open, title, setOpen, data, size, modalFooter, handlerClose, children, customizEstyle }: modalType) {

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
        style={customizEstyle}
        //onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handlerClose ? handlerClose : handleCancel}
        width={size ? size : "70rem"}
        //okText={"ذخیره"}
        // okButtonProps={()=><Button></Button>}
        okType={"default"}
        //cancelText={"لغو"}
        footer={modalFooter || []}
      >
        {children}
      </Modal>
    </>
  );
}

export default CusModal;
